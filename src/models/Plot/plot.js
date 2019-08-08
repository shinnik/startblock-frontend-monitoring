import axios from 'axios';
import {PLOT_DATA} from "../../constants/endpoints";

export default class PlotRequestModel {
    static getInitialPoints = () => {
        // return axios.get('https://Onder2.herokuapp.com/data').then(({data}) => data)
        return axios.get(PLOT_DATA).then(({ data }) => data)

    }
}
