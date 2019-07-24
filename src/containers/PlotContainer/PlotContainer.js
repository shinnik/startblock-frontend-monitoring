import React, { useState, useEffect } from 'react';
import Plot from "../../components/Plot/Plot";
import generateMock from "../../helpers/generateMockPlotData";
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('wss://Onder2.herokuapp.com');

const PlotContainer = () => {

  const [traditional, setTraditional] = useState({});
  const [distributed, setDistributed] = useState({});
  const [internet, setInternet] = useState({});

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      // setState
    };
  }, [])
  return (
    <Plot traditionalData={traditional}
          distributionData={distributed}
          internetData={internet}/>
  )
}

export default PlotContainer;
