// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector('[data-testid="testForm"]');
    let list = document.querySelector("#faultyItems");
    let pilot = this.document.getElementById("pilotName");
    let copilot = document.querySelector('input[name=copilotName]');
    let fuelLevel = document.querySelector('input[name=fuelLevel]');
    let cargoLevel = document.querySelector('input[name=cargoMass]');
    console.log(pilot, copilot, fuelLevel, cargoLevel)
    return formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
   
});