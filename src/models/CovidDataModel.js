export default class CovidDataModel {
  constructor(cases, deaths, recovered) {
    this.cases = cases;
    this.deaths = deaths;
    this.recovered = recovered;
  }

  static fromApiResponse(response) {

    const cases = response.cases || {};
    const deaths = response.deaths || {};
    const recovered = response.recovered || {};

    const sanitizedCases = Object.keys(cases).reduce((acc, key) => {
      acc[key] = cases[key] || 0; 
      return acc;
    }, {});

    const sanitizedDeaths = Object.keys(deaths).reduce((acc, key) => {
      acc[key] = deaths[key] || 0; 
      return acc;
    }, {});

    const sanitizedRecovered = Object.keys(recovered).reduce((acc, key) => {
      acc[key] = recovered[key] || 0; 
      return acc;
    }, {});

    return new CovidDataModel(sanitizedCases, sanitizedDeaths, sanitizedRecovered);
  }
}