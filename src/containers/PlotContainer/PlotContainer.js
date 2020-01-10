import React, { Component } from 'react';
import Plot from "../../components/Plot/Plot";
import WebSocketClients from "../../middlewares/WebSocketClients/WebSocketClients";
import PlotRequestModel from '../../models/Plot/plot';

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
    // get points and subscribe on new points after
    PlotRequestModel.getInitialPoints().then(data => this.handleResponse(data)).then(() =>
      WebSocketClients.setHandler({
        type: 'plot',
        exec: ({ payload: { data: points } }) => {
          this.serializePoints(points);
        }
      }));
  }


  separateData = (data) => {
    if (data) {
      const pureData = Object.values(data);
      const values = pureData.map(({ value }) => value);
      const labels = pureData.map(({ time }) => time);
      const last = values.map((value, index) => {
        return index !== values.length - 1
          ? null
          : value
      });
      return { values, labels, last }
    }
  }

  handleResponse = (data) => {
    const initialState = {
      values: [],
      last: [],
      labels: []
    }
    const separatedTraditional = this.separateData(data.traditional || initialState);
    const separatedDistributed = this.separateData(data.distributed || initialState);
    const separatedInternet = this.separateData(data.internet || initialState);
    this.setState({
      labels: separatedInternet.labels,
      traditional: separatedTraditional.values,
      distributed: separatedDistributed.values,
      internet: separatedInternet.values,
      traditionalCurrent: separatedTraditional.last,
      distributedCurrent: separatedDistributed.last,
      internetCurrent: separatedInternet.last
    });
  }

  serializePoints = (points) => {
    //replace points where needed
    const { internet, internetCurrent, traditional, traditionalCurrent,
      distributed, distributedCurrent, labels } = this.state;
    const [, ...internetWithoutFirst] = internet;
    const [, ...distributedWithoutFirst] = distributed;
    const [, ...traditionalWithoutFirst] = traditional;
    const [, ...labelsWithoutFirst] = labels;
    this.setState({
      internet: [...internetWithoutFirst, points.internet.value],
      internetCurrent: [...internetCurrent.slice(0, -1), points.internet.value],
      distributed: [...distributedWithoutFirst, points.distributed.value],
      distributedCurrent: [...distributedCurrent.slice(0, -1), points.distributed.value],
      traditional: [...traditionalWithoutFirst, points.traditional.value],
      traditionalCurrent: [...traditionalCurrent.slice(0, -1), points.traditional.value],
      labels: [...labelsWithoutFirst, points.internet.time]
    });
  }

  render() {
    const { internet, internetCurrent, traditional, traditionalCurrent,
      distributed, distributedCurrent, labels } = this.state;
    return (
      <Plot traditionalData={traditional}
        traditionalDataCurrent={traditionalCurrent}
        distributionData={distributed}
        distributionDataCurrent={distributedCurrent}
        internetData={internet}
        internetDataCurrent={internetCurrent}
        labels={labels} />
    )
  }
};

export default PlotContainer;
