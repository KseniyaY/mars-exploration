//parse plateau size assigned for exploration
export const processPlateauSize = (command) => {
    const PCoordinates = command.split(" ");
    return [parseInt(PCoordinates[0], 10), parseInt(PCoordinates[1], 10)]
}

//parse a current rover coordinates
export const processRoverCoordinates = (command) => {
    const RDeployment = command.split(" ");
    return [parseInt(RDeployment[0], 10), parseInt(RDeployment[1], 10), RDeployment[2]];
}