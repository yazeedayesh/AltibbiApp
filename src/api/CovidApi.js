import axios from 'axios';
import CovidDataModel from '../models/CovidDataModel';

class CovidApi {
  static async fetchCovidData() {
    try {
      const response = await axios.get(
        'https://disease.sh/v3/covid-19/historical/all?lastdays=7'
      );
      const data = response.data;

      const covidData = CovidDataModel.fromApiResponse(data);

      return {
        dates: Object.keys(data.cases),
        casesData: Object.values(data.cases),
        deathsData: Object.values(data.deaths),
        recoveredData: Object.values(data.recovered || {}),
      };
    } catch (error) {
      console.error('Error fetching COVID data:', error);
      return {
        dates: [],
        casesData: [],
        deathsData: [],
        recoveredData: [],
      };
    }
  }
}

export default CovidApi;