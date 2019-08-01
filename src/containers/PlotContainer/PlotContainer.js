import React, { useState, useEffect } from 'react';
import _isEmpty from 'lodash/isEmpty';
import _cloneDeep from 'lodash/cloneDeep';
import Plot from "../../components/Plot/Plot";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import PlotRequestModel from '../../models/Plot/plot';

const client = new W3CWebSocket('wss://Onder2.herokuapp.com/plot');


const PlotContainer = () => {

  const [traditional, setTraditional] = useState([]);
  const [traditionalCurrent, setTraditionalCurrent] = useState([]);
  const [distributed, setDistributed] = useState([]);
  const [distributedCurrent, setDistributedCurrent] = useState([]);
  const [internet, setInternet] = useState([]);
  const [internetCurrent, setInternetCurrent] = useState([]);
  const [labels, setLabels] = useState([]);

    useEffect(() => {
    // get points and subscribe on new points after
    PlotRequestModel.getInitialPoints().then(data => handleResponse(data)).then(() =>
        client.onmessage = ({ data }) => {
        const obj = JSON.parse(data);
        splicePlot(obj);
    });
  }, []);

  const separateData = (data) => {
    console.log(data, 'FROM GET')
      if (data) {
        const pureData = Object.values(data);
        const values = pureData.map(({ value }) => value);
        const labels = pureData.map(({ time }) => time);
        const last = values.map((value, index) => {
        return index !== values.length - 1
          ? null
          : value });
        return { values, labels, last }
      }
  }

  const handleResponse = (data) => {
    const initialState = {
      values: [],
      last: [],
      labels:[]
    }
    const separatedTraditional = separateData(data.traditional || initialState);
    const separatedDistributed = separateData(data.distributed || initialState);
    const separatedInternet = separateData(data.internet || initialState);
    setLabels(separatedInternet.labels);
    setTraditional(separatedTraditional.values);
    setDistributed(separatedDistributed.values);
    setInternet(separatedInternet.values);
    setTraditionalCurrent(separatedTraditional.last);
    setDistributedCurrent(separatedDistributed.last);
    setInternetCurrent(separatedInternet.last)
  };

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
  }, []);

  // useEffect(() => {
  //     client.onmessage = ({ data }) => {
  //       const obj = JSON.parse(data);
  //       splicePlot(obj);
  //     }
  // }, []);

  const splicePlot = (point) => {
    console.log(point, traditional);
    //replace points where needed
    if (point.id === 'internet' && !_isEmpty(internet)) {
      const copy = [...internet];
      const currentCopy = [...internetCurrent];
      currentCopy.pop();
      currentCopy.push(point.value);
      copy.shift();
      copy.push(point.value);
      setInternet(copy);
      setInternetCurrent(currentCopy)
    } else if (point.id === 'distributed' && !_isEmpty(distributed)) {
      const copy = [...distributed];
      const currentCopy = [...distributedCurrent];
      currentCopy.pop();
      currentCopy.push(point.value);
      copy.shift();
      copy.push(point.value);
      setDistributed(copy);
      setDistributedCurrent(currentCopy)
    } else if (point.id === 'traditional' && !_isEmpty(traditional)) {
      const copy = [...traditional];
      const currentCopy = [...traditionalCurrent];
      currentCopy.pop();
      currentCopy.push(point.value);
      copy.shift();
      copy.push(point.value);
      console.log(copy === currentCopy);
      setTraditional(copy);
      setTraditionalCurrent(currentCopy)
    }
    const labelCopy = _cloneDeep(labels);
    console.log(labelCopy === labels);
    labelCopy.shift();
    labelCopy.push(point.time);
    setLabels(labelCopy);
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
