import axios from 'axios';

export default class PlotRequestModel {
  static getInitialPoints = () => {
    return axios.get('https://onder2.herokuapp.com/data').then(({data}) => data);
  }
}