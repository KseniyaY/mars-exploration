import { MarsPlateau } from "./components/mars-plateau.js";
import { Rover } from "./components/rover.js";
import { processPlateauSize, processRoverCoordinates } from "./handlers/processCommands.js";

const app = (nasaFile) => {
    //while launching the app script via the command line: 
    //get the name of the input file (3rd element), - "node start.js nasa-command.txt"
    const commandsArray = nasaFile.split("\n");
    let plateau;

    if (commandsArray.length >= 3) {
        //set plateau dimensions
        const setPDimension = processPlateauSize(commandsArray[0]);
        plateau = new MarsPlateau(setPDimension[0], setPDimension[1]);

        //extract instructions for launched rovers and loop through each pair of instructions 
        //(initial coordinates and further navigation)
        const roversCommands = commandsArray.slice(1);
        let i = 0;

        do {
            //process current rover's coordinates, deploy the rover and set navigation params
            const roverPos = processRoverCoordinates(roversCommands[i]);
            let rover = new Rover(roverPos[0], roverPos[1], roverPos[2]);
            rover.setNavigation(roversCommands[i + 1]);

            plateau.deployRover(rover);
            i += 2;
        }
        while (i < roversCommands.length);
    } else {
        console.log(`Please provide exaustive information on plateau dimensions, rover's starting coordinates, 
    direction and further navigation instructions`);
    }
    plateau.explore();
}

//TODO: to sort out with requireJS, es6 imports and exports through the entire app
//so that they look similar and work completely ok with @babel/node
module.exports = app;