import axios from 'axios';

export default class PlotRequestModel {
    static getInitialPoints = () => {
        // return axios.get('https://Onder2.herokuapp.com/data').then(({data}) => data)
        return axios.get('https://Onder2.herokuapp.com/data').then(({ data }) => data)

    }
}
