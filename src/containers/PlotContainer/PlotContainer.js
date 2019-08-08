import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';
import _cloneDeep from 'lodash/cloneDeep';
import Plot from "../../components/Plot/Plot";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import PlotRequestModel from '../../models/Plot/plot';
import {BACKEND_IP} from "../../constants/endpoints";

const client = new W3CWebSocket(`wss://${BACKEND_IP}/plot`);


class PlotContainer extends Component {

  state = {
    traditional: [],
    traditionalCurrent: [],
    distributed: [],
    distributedCurrent: [],
    internet: [],
    internetCurrent: [],
    labels: []
  }

  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    // get points and subscribe on new points after
    PlotRequestModel.getInitialPoints().then(data => this.handleResponse(data)).then(() =>
        client.onmessage = ({ data }) => {
        const obj = JSON.parse(data);
        this.splicePlot(obj);
    });
  }


  separateData = (data) => {
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

  handleResponse = (data) => {
    const initialState = {
      values: [],
      last: [],
      labels:[]
    }
    const separatedTraditional = this.separateData(data.traditional || initialState);
    const separatedDistributed = this.separateData(data.distributed || initialState);
    const separatedInternet = this.separateData(data.internet || initialState);
    this.setState({ labels: separatedInternet.labels });
    this.setState({ traditional: separatedTraditional.values });
    this.setState({ distributed: separatedDistributed.values });
    this.setState({ internet: separatedInternet.values });
    this.setState({ traditionalCurrent: separatedTraditional.last })
    this.setState({ distributedCurrent: separatedDistributed.last })
    this.setState({ internetCurrent: separatedInternet.last })
  }

  splicePlot = (point) => {
    //replace points where needed
    const { internet, internetCurrent, traditional, traditionalCurrent,
    distributed, distributedCurrent, labels } = this.state;
    if (point.id === 'internet' && !_isEmpty(internet)) {
      const copy = [...internet];
      const currentCopy = [...internetCurrent];
      currentCopy.pop();
      currentCopy.push(point.value);
      copy.shift();
      copy.push(point.value);
      this.setState({internet: copy});
      this.setState({internetCurrent: currentCopy})
    } else if (point.id === 'distributed' && !_isEmpty(distributed)) {
      const copy = [...distributed];
      const currentCopy = [...distributedCurrent];
      currentCopy.pop();
      currentCopy.push(point.value);
      copy.shift();
      copy.push(point.value);
      this.setState({distributed: copy});
      this.setState({distributedCurrent: currentCopy})
    } else if (point.id === 'traditional' && !_isEmpty(traditional)) {
      const copy = [...traditional];
      const currentCopy = [...traditionalCurrent];
      currentCopy.pop();
      currentCopy.push(point.value);
      copy.shift();
      copy.push(point.value);
      this.setState({traditional: copy});
      this.setState({traditionalCurrent: currentCopy})
    }
    const labelCopy = [...labels];
    labelCopy.shift();
    labelCopy.push(point.time);
    this.setState({labels: labelCopy});
  }

  render() {
    const { internet, internetCurrent, traditional, traditionalCurrent,
      distributed, distributedCurrent, labels } = this.state;
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
  }
};

export default PlotContainer;
