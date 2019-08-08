import axios from 'axios';
import {PLOT_DATA} from "../../constants/endpoints";

export default class PlotRequestModel {
  static getInitialPoints = () => {
    return axios.get(PLOT_DATA).then(({data}) => data);
  }
}
