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

    launch() {
        for (let i = 0; i < this.navigation.length; i++) {
            let instruction = this.navigation[i];
            if (instruction === "M") {
                this.move(instruction);
            } else if (instruction === "L" || instruction === "R") {
                this.turn(instruction);
            }
        }
        //log the rover's final destination based on fulfilled instructions
        this.finalDestination = `${this.position[0]}${this.position[1]}${this.direction}`;
        console.log(this.finalDestination);

    }

    move(instruction) {
        //TODO: check and prevent moves beyond the plateau bondaries
        if (instruction !== "M") {
            console.log("Unknown instruction");
            return;
        }
        let coordX = this.position[0];
        let coordY = this.position[1];

        //change rover coordinates depending on the cardinal compass point it is curently facing
        switch (this.direction) {
            case "N":
                coordY++;
                break;
            case "S":
                coordY--;
                break;
            case "E":
                coordX++;
                break;
            case "W":
                coordX--;
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
}