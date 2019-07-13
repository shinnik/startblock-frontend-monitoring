import React, { Component } from 'react';
import Plot from "../../components/Plot/Plot";
import generateMock from "../../helpers/generateMockPlotData";

export default class PlotContainer extends Component {
    state = {
        traditional: {},
        distributed: {},
        internet: {}
    };
    componentDidMount() {
        this.interval = setInterval(() => {
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
        }, 1000);
    }
    componentWillUnmount() {
        console.log(this.interval);
        clearInterval(this.interval);
    }
    render() {
        console.log(this.state);
        return (
            <Plot traditionalData={this.state.traditional}
                  distributionData={this.state.distributed}
                  internetData={this.state.internet}/>
        )
    }
}
