// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.querySelector("#missionTarget");

   // Here is the HTML formatting for our mission target div.
    missionTarget.innerHTML =   `<h2>Mission Destination</h2>
                                <ol>
                                    <li>Name: ${name}</li>
                                    <li>Diameter: ${diameter}</li>
                                    <li>Star: ${star}</li>
                                    <li>Distance from Earth: ${distance}</li>
                                    <li>Number of Moons: ${moons}</li>
                                </ol>
                                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    if (testInput.value === "" || testInput.value === null) { return "Empty"; };
    if (isNaN(testInput.value)) { return "Not a Number"; };
    if (!isNaN(testInput.value)) { return "Is a Number"; };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.querySelector('[data-testid="testForm"]');
    form.addEventListener("submit", event => {

        let validatePilot = validateInput(pilot);
        let validateCopilot = validateInput(copilot);
        let validateFuel = validateInput(fuelLevel);
        let validateCargo = validateInput(cargoLevel);

        if (validatePilot === "Empty" || validateCopilot === "Empty" || validateFuel === "Empty" || validateCargo === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
        }
        if (validatePilot === "Is a Number" || validateCopilot === "Is a Number" || validateFuel === "Not a Number" || validateCargo === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
        }
        
        let launchStatus = document.getElementById("launchStatus");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        
        if (validatePilot === "Not a Number" && validateCopilot === "Not a Number" && validateFuel === "Is a Number" && validateCargo === "Is a Number") {
            if (fuelLevel.value < 10000 || cargoLevel.value > 10000) {
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "#C7254E";
               
                if (fuelLevel.value < 10000) {
                    fuelStatus.innerHTML = "Fuel level too low for launch";
                    event.preventDefault();
                }
                if (cargoLevel.value > 10000) {
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                }
            } else {
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "#419F6A";
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
            }
            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
            list.style.visibility = "visible";
            event.preventDefault();

        }
       
    });
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        
    });
    
    return planetsReturned;
}


function pickPlanet(planets) {

    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
