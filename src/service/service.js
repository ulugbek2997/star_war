

export default class SwapiService{
  _apiBase = 'https://swapi.dev/api/';
  
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    return await res.json();
  };

// persons
    async getAllPersons(){
      const res = await this.getResource('people');
      return await res.results.map(this._transformPerson);
    }

    _transformPerson(person){
      return {
        id: person.url.replace(/[^\d]/g, ""),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
      }
    } 

    async getPerson(id){
      const person = await this.getResource(`people/${id}`);
      return await this._transformPerson(person);
    }
// planets
    async getAllPlanets(){
      const res = await this.getResource('planets');
      return await res.results.map(this._transformPlanet);
    }


    _transformPlanet(planet){
      return {
        id: planet.url.replace(/[^\d]/g, ""),
        name:planet.name,
        population:planet.population,
        diameter:planet.diameter,
        gravity:planet.gravity, 
      }
    }

    async getPlanet(id){
      const planet = await this.getResource(`planet/${id}`);
      return await this._transformPlanet(planet);
    }
// starship
    async getAllStarships(){
      const res = await this.getResource('starships');
      return await res.results.map(this._transformStarship);
    }

    _transformStarship(starship){
      return {
        id: starship.url.replace(/[^\d]/g, ""),
        name:starship.name,
        model:starship.model,
        passengers:starship.passengers,
      }
    }

    async getStarship(id){
      const starship = await this.getResource(`starships/${id}`);
      return await this._transformStarship(starship);
    }


    _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }
  

}