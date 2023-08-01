// Write your JavaScript code here!
window.addEventListener("load", function() {
    let document = window.document;
    let list = document.querySelector("#faultyItems");
    let pilot = document.querySelector('input[name=pilotName]');
    let copilot = document.querySelector('input[name=copilotName]');
    let fuelLevel = document.querySelector('input[name=fuelLevel]');
    let cargoLevel = document.querySelector('input[name=cargoMass]');
    
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        return pickPlanet(listedPlanets)
    }).then(planet => {
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);    
    })
   
});