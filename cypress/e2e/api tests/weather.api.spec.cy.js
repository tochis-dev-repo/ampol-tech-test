const xmlConverter = require('xml-js');
const sampleXsd = `<ase:aseXML xmlns:ase="urn:aseXML:r41"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="urn:aseXML:r41
http://www.nemmco.com.au/aseXML/schemas/r41/aseXML_r41.xsd
">`;

  describe('Part 1: API Testing', () => {
    it('should make a weather API request, validate the response and convert to XML', () => {
      make_api_get_call(buildWeatherUrl('Sydney')).then((response) => {
        expect(response.status).to.eq(200);
        let jsonResponse = JSON.stringify(response.body);
        expect(() => JSON.parse(jsonResponse), 'Assert that JSON response is valid').to.not.throw();
        expect(response.body.location).to.have.property('name', 'Sydney');
        expect(response.body.location).to.have.property('country', 'Australia');
        const xmlLocationData = xmlConverter.js2xml(response.body.location, { compact: true, ignoreComment: true, spaces: 4, xsd: sampleXsd });
        cy.log(xmlLocationData);
      });
    });
  });
  
function make_api_get_call(url, 
  headers = {
  'Content-Type': 'application/json'}) {
  return cy.request({
    method: 'GET',
    url: url,
    headers: headers
  });
}

function buildWeatherUrl(query='Melbourne', 
    airQualityQuery='no',
    url=Cypress.env('weather_api_server'), 
    key=Cypress.env('key'))
    {
        return `${url}?key=${key}&q=${query}&aqi=${airQualityQuery}`;
    }