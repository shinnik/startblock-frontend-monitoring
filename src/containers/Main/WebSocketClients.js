import {w3cwebsocket as W3CWebSocket} from "websocket";
import {WEBSOCKET_SERVER} from "../../constants/endpoints";

class WebSocketClients {
    constructor(endpoints) {
        // console.log('Creating websocket clients...');
        this.sockets = [];
        this.handler = () => {};
        this.endpoints = endpoints;
        endpoints.forEach(value => {
            const socket = new W3CWebSocket(`${WEBSOCKET_SERVER}/${value}`);
            socket.onopen = () => {
                // console.log(`Websocket connection to ${WEBSOCKET_SERVER}/${value} has been established.`);
            };
            socket.onmessage = (message) => {
                // console.log(`Got message: ${message.data} from ${WEBSOCKET_SERVER}/${value}`);
                try {
                    const json = JSON.parse(message.data);
                    this.handler({payload: {uri: value, data: json} });
                } catch (e) {
                    // console.log(e);
                }
            };
            this.sockets.push(socket);
        })
    }

    setHandler(handler) {
        this.handler = handler;
    }

    send(message, topic) {
        const msg = JSON.stringify(Object.assign(message, {time: new Date()}));
        // console.log(`Sending ${msg} to topic ${topic}`);
        this.sockets[ this.endpoints.indexOf(topic) ].send(msg);
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
                    id: [3, 5, 27, 29, 7, 12, 19, 20, 11, 13, 24, 25].indexOf(args.id)+1,
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
                    id: [9, 17, 22, 15, 160, 16].indexOf(args.id)+1,
                    status: args.state
                }, 'arrowdirections');
                break;
            }
            default:
                break;
        }
    }
}

export default WebSocketClients;
