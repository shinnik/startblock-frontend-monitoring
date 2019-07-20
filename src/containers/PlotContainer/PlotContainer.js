import React, { Component } from 'react';
import Plot from "../../components/Plot/Plot";
import generateMock from "../../helpers/generateMockPlotData";

export default class PlotContainer extends Component {
    state = {
        traditional: {},
        distributed: {},
        internet: {}
    };
    initMocks() {
        const mockOffset3 = generateMock(3);
        const mockOffset5 = generateMock(5, 1.5);
        const mockOffset6 = generateMock(6);
        mockOffset3.last = mockOffset3.data.map((val, index) =>
            index !== mockOffset3.data.length - 1
                ? null
                : mockOffset3.data[index]);
        mockOffset5.last = mockOffset5.data.map((val, index) =>
            index !== mockOffset5.data.length - 1
                ? null
                : mockOffset5.data[index]);
        mockOffset6.last = mockOffset6.data.map((val, index) =>
            index !== mockOffset6.data.length - 1
                ? null
                : mockOffset6.data[index]);
        this.setState({traditional: mockOffset3, distributed: mockOffset5, internet: mockOffset6});
    }
    updateMock(mock, offset, factor) {
        const copy = JSON.parse(JSON.stringify(mock));
        const point = generateMock(offset, factor, 1);
        const last = mock.data.map((val, index) =>
            index !== mock.data.length - 1
                ? null
                : point.data);
        copy.data.shift();
        copy.data.push(point.data[0]);
        console.log(point);
        copy.labels.shift();
        copy.labels.push(point.labels[0]);
        return { data: copy.data, labels: copy.labels, last: last }

    }
    componentDidMount() {
        this.initMocks();
        this.interval = setInterval(() => {
            const newTraditional = this.updateMock(this.state.traditional, 3, 1);
            const newDistributed = this.updateMock(this.state.distributed, 5, 1.5);
            const newInternet = this.updateMock(this.state.internet, 6, 1);
            this.setState({ traditional: newTraditional, distributed: newDistributed, internet: newInternet })
        }, 60000);
    }
    componentWillUnmount() {
        console.log(this.interval);
        clearInterval(this.interval);
    }
    render() {
        return (
            <Plot traditionalData={this.state.traditional}
                  distributionData={this.state.distributed}
                  internetData={this.state.internet}/>
        )
    }
}
