export class MarsPlateau {

    constructor(X, Y) {
        this.dimensions = [0, 0, X, Y];
        this.rovers = [];
    }

    deployRover(rover) {
        this.rovers.push(rover);
    }

    explore() {
        this.rovers.forEach((rover) => {
            rover.launch(this.dimensions);
        })
    }
}