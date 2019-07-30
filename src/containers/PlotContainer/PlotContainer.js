import React, { useState, useEffect } from 'react';
import Plot from "../../components/Plot/Plot";
// import generateMock from "../../helpers/generateMockPlotData";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import PlotRequestModel from '../../models/Plot/plot';

const client = new W3CWebSocket('wss://Onder2.herokuapp.com/plot');

const PlotContainer = () => {

  const [traditional, setTraditional] = useState({});
  const [distributed, setDistributed] = useState({});
  const [internet, setInternet] = useState({});

  useEffect(() => {
    PlotRequestModel.getInitialPoints().then(data => console.log('GET RESPONSE', Object.values(data)));
  }, []);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      // console.log('WEBSOCKET MESSAGE', message);
    };
  }, []);
  return (
      <>
          <Plot traditionalData={traditional}
                // traditionalDataCurrentValue={}
                distributionData={distributed}
                internetData={internet}/>
      </>
  )
};

export default PlotContainer;
