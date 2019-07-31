import React, { useState, useEffect } from 'react';
import _isEmpty from 'lodash/isEmpty';
import _cloneDeep from 'lodash/cloneDeep';
import Plot from "../../components/Plot/Plot";
// import generateMock from "../../helpers/generateMockPlotData";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import PlotRequestModel from '../../models/Plot/plot';

// const client = new W3CWebSocket('wss://Onder2.herokuapp.com/plot');
const client = new W3CWebSocket('wss://Onder2.herokuapp.com/plot');


const removeFirst = (arr, num) => {
  return arr.splice(0, num);
}

const PlotContainer = () => {

  const [traditional, setTraditional] = useState({});
  const [traditionalCurrent, setTraditionalCurrent] = useState(null);
  const [distributed, setDistributed] = useState({});
  const [distributedCurrent, setDistributedCurrent] = useState(null);
  const [internet, setInternet] = useState({});
  const [internetCurrent, setInternetCurrent] = useState(null);
  const [labels, setLabels] = useState([]);

    useEffect(() => {
    PlotRequestModel.getInitialPoints().then(data => handleResponse(data));
  }, []);

  const separateData = (data) => {
    console.log(data, 'FROM GET')
      const pureData = Object.values(data);
      const values = pureData.map(({ value }) => value > 1000 ? 7 : value*Math.random()*5);
      const labels = pureData.map(({ time }) => time);
      const last = values.pop();
      return { values, labels, last }
  }

  const handleResponse = (data) => {
    console.log(data);
    // const separatedTraditional = separateData(data.traditional);
    // const separatedDistributed = separateData(data.distributed);
    const separatedInternet = separateData(data.internet);
    setLabels(separatedInternet.labels);
    // setTraditional(separatedTraditional.values);
    // setDistributed(separatedDistributed.values);
    setInternet(separatedInternet.values);
    // setTraditionalCurrent([separatedTraditional.last]);
    // setDistributedCurrent([separatedDistributed.last]);
    // setInternetCurrent([separatedInternet.last])
  };



  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
  }, []);
  useEffect(() => {
      client.onmessage = ({ data }) => {
        const obj = JSON.parse(data);
        console.log((Object.keys(obj)[0] === 'internet' || obj.id === 1) && !_isEmpty(obj));
          if ((Object.keys(obj)[0] === 'internet' || obj.id === 1) && !_isEmpty(obj)) {
              console.log(data);
              const copy = _cloneDeep(internet);
              console.log(copy);
              const labelCopy = _cloneDeep(labels);
              copy.shift();
              labelCopy.shift();
              setInternet(copy);
              setLabels(labelCopy);
          }
      };
  }, [labels, internet]);
  const splicePlot = (plotValues, point ) => {

  }
  return (
      <>
          <Plot traditionalData={traditional}
                traditionalDataCurrent={traditionalCurrent}
                distributionData={distributed}
                distributionDataCurrent={distributedCurrent}
                internetData={internet}
                internetDataCurrent={internetCurrent}
                labels={labels}/>
      </>
  )
};

export default PlotContainer;
