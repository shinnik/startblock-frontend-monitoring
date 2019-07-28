import React, { useState, useEffect } from 'react';
import Plot from "../../components/Plot/Plot";
// import generateMock from "../../helpers/generateMockPlotData";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import PlotRequestModel from '../../models/Plot/plot';

const client = new W3CWebSocket('wss://Onder2.herokuapp.com/cells');

const PlotContainer = () => {

  const [traditional, setTraditional] = useState({});
  const [distributed, setDistributed] = useState({});
  const [internet, setInternet] = useState({});

  useEffect(() => {
    PlotRequestModel.getInitialPoints().then(data => console.log('GET RESPONSE', data));
  }, []);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log('WEBSOCKET MESSAGE', message);
    };
  }, []);
  const handleClick = () => {
    client.send(JSON.stringify('PRIVET RUSLAN, A PUTIN HUILO'));
  };
  return (
      <>
          <button onClick={handleClick}>CLICK</button>
          <Plot traditionalData={traditional}
                distributionData={distributed}
                internetData={internet}/>
      </>
  )
};

export default PlotContainer;
