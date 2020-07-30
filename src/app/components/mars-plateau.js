export class MarsPlateau {

    constructor(X, Y) {
        this.dimensions = [X, Y];
        this.rovers = [];
    }

    deployRover(rover) {
        this.rovers.push(rover);
    }

    explore() {
        this.rovers.forEach((rover) => {
            rover.launch();
        })
    }
}