import { w3cwebsocket as W3CWebSocket } from "websocket";
import { WEBSOCKET_SERVER } from "../../constants/endpoints";

const LOGS = true;

class WebSocketClients {

    static handlers = {};
    static socket = null;

    constructor(endpoints) {
        LOGS && console.log('Creating websocket clients...');
        this.handler = () => { };
    }

    run() {
        const socket = new W3CWebSocket(`${WEBSOCKET_SERVER}/`);
        socket.onopen = () => {
            LOGS && console.log(`Websocket connection to ${WEBSOCKET_SERVER}/ has been established.`);
        };
        socket.onmessage = (message) => {
            LOGS && console.log(`Got message: ${message.data} from ${WEBSOCKET_SERVER}/`);
            try {
                const json = JSON.parse(message.data);
                if (Array.isArray(json.data)) {
                    json.data.forEach(() => {
                        const handler = this.handlers[json.type] || this.handler.default;
                        handler({ payload: { type: json.type, data: json.data } });
                    });
                } else {
                    this.handler({ payload: { type: json.type, data: json.data } })
                }
            } catch (e) {
                LOGS && console.log(e);
            }
        };
        WebSocketClients.setSocket(socket);
    }

    static setSocket(socket) {
        this.socket = socket
    }

    static setHandler(handler) {
        if (!handler || !handler.exec) {
            throw new Error('Handler must have exec property to handle with');
        }
        if (handler.type) {
            this.handlers[handler.type] = handler.exec
        } else {
            if (!this.handlers.default) {
                this.handlers.default = handler.exec
            } else {
                throw new Error('Default handler is already specified. Please, specify type')
            }
        }
    }

    send(message, topic) {
        const msg = JSON.stringify(Object.assign(message, { time: new Date() }));
        LOGS && console.log(`Sending ${msg} to topic ${topic}`);
        console.log(WebSocketClients.socket)
        console.log(topic, msg);
        WebSocketClients.socket.send(msg);
    }

    sendSpecific(args) {
        switch (args.id) {
            case 3:
            case 5:
            case 27:
            case 29:
            case 7:
            case 19:
            case 11:
            case 24: {
                this.send({
                    id: [3, 5, 27, 29, 7, 12, 19, 20, 11, 13, 24, 25].indexOf(args.id) + 1,
                    status: args.state
                }, 'arrows');
                break;
            }
            case 9:
            case 17:
            case 22:
            case 15:
            case 160:
            case 16: {
                this.send({
                    id: [9, 17, 22, 15, 160, 16].indexOf(args.id) + 1,
                    status: args.state
                }, 'arrowdirections');
                break;
            }
            default:
                break;
        }
    }

    close() {
        console.log('Closing websocket clients...');
        this.socket.close();
        this.handlers = [];
        this.socket = null;
        console.log('Websocket clients have been closed.');
    }
}

export default WebSocketClients;
