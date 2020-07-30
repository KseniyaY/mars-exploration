export class Rover {

    constructor(coordX = 0, coordY = 0, direction = "N") {
        this.position = [coordX, coordY];
        this.direction = direction;
        this.directions = ["N", "E", "S", "W"];
        this.navigation = null;
        this.finalDestination = null;
    }

    setNavigation(instructions) {
        this.navigation = instructions;
    }

    launch(dimensions) {
        for (let i = 0; i < this.navigation.length; i++) {
            let instruction = this.navigation[i];
            if (instruction === "M") {
                this.move(instruction, dimensions);
            } else if (instruction === "L" || instruction === "R") {
                this.turn(instruction);
            } else {
                console.log("Staying where I am. There is no way further");
            }
        }
        //log the rover's final destination based on fulfilled instructions
        this.finalDestination = `${this.position[0]}${this.position[1]}${this.direction}`;
        console.log(this.finalDestination);

    }

    move(instruction, dimensions) {
        if (instruction !== "M") {
            console.log("Unknown instruction");
            return;
        }
        let coordX = this.position[0];
        let coordY = this.position[1];

        //change rover coordinates depending on the cardinal compass point it is curently facing
        //prevent move if the rover next step is beyond the boundaries
        switch (this.direction) {
            case "N":
                this.isWithinGrid(coordX, coordY + 1, dimensions) && coordY++;
                break;
            case "S":
                this.isWithinGrid(coordX, coordY - 1, dimensions) && coordY--;
                break;
            case "E":
                this.isWithinGrid(coordX + 1, coordY, dimensions) && coordX++;
                break;
            case "W":
                this.isWithinGrid(coordX - 1, coordY, dimensions) && coordX--;
                break;
        }

        let currentPos = [coordX, coordY];
        this.position = currentPos;
    }

    turn(instruction) {
        let compassPointer = this.directions.indexOf(this.direction);
        if (instruction === "L") {
            compassPointer = (compassPointer + 4 - 1) % 4;
        } else if (instruction === "R") {
            compassPointer = (compassPointer + 1) % 4;
        }
        this.direction = this.directions[compassPointer];
    }

    isWithinGrid(coordX, coordY, dimensions) {
        return coordX <= dimensions[2] &&
            coordX >= dimensions[0] &&
            coordY <= dimensions[3] &&
            coordY >= dimensions[1];

    }
}