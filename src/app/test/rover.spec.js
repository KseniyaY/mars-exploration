import { Rover } from "../components/rover";

describe(`Given the initial instructions on the rover deployment coordinates, 
    direction and further navigation`, () => {
    it('should be deployed at the starting position', () => {
        let rover = new Rover(1, 2, "N");
        expect(rover.position).toEqual([1, 2]);
    });

    it('should be deployed at the starting position of [0,0] if there is no instructions', () => {
        let rover = new Rover(undefined, undefined, undefined);
        expect(rover.position).toEqual([0, 0]);
    });
    it('should be facing the right direction', () => {
        let rover = new Rover(1, 2, "N");
        expect(rover.direction).toEqual("N");
    });

    it('should be facing North if there is no initial direction command', () => {
        let rover = new Rover(undefined, undefined, undefined);
        expect(rover.direction).toEqual("N");
    });
});

describe("Given the navigation instructions for the current rover, the rover", () => {
    it("facing North should turn right to East", () => {
        let rover = new Rover(5, 5, "N")
        rover.turn("R");
        expect(rover.direction).toEqual("E");
    })

    it("facing South should turn right to West", () => {
        let rover = new Rover(5, 5, "S")
        rover.turn("R");
        expect(rover.direction).toEqual("W");
    })

    it("facing North should turn left to West", () => {
        let rover = new Rover(5, 5, "N")
        rover.turn("L");
        expect(rover.direction).toEqual("W");
    })

    it("facing South should turn left to East", () => {
        let rover = new Rover(5, 5, "S")
        rover.turn("L");
        expect(rover.direction).toEqual("E");
    })

    it("facing East should turn right to South", () => {
        let rover = new Rover(5, 5, "E")
        rover.turn("R");
        expect(rover.direction).toEqual("S");
    })

    it("facing West should turn left to South", () => {
        let rover = new Rover(5, 5, "W")
        rover.turn("R");
        expect(rover.direction).toEqual("N");
    })

    it("facing West should turn right 2 times to face East", () => {
        let rover = new Rover(3, 2, "W")
        rover.turn("R");
        rover.turn("R");
        expect(rover.direction).toEqual("E");
    })

    it("should move forward", () => {
        let rover = new Rover(2, 2, "N");
        let dimensions = [0, 0, 5, 5];
        rover.move("M", dimensions);
        expect(rover.position).toEqual([2, 3]);
    })
})

describe(`Given the initial instructions on the rover deployment coordinates,
 and further navigation, the rover`, () => {
    it(`should launch at 12N and successfully finish its mission,
         informing about his final coordinates at 13N`, () => {
        let rover = new Rover(1, 2, "N");
        let dimensions = [0, 0, 5, 5];
        rover.setNavigation("LMLMLMLMM");
        rover.launch(dimensions);
        expect(rover.finalDestination).toEqual("13N");
    })

    it(`should launch at 33E and successfully finish its mission,
         informing about his final coordinates at 51E`, () => {
        let rover = new Rover(3, 3, "E");
        let dimensions = [0, 0, 5, 5];
        rover.setNavigation("MMRMMRMRRM");
        rover.launch(dimensions);
        expect(rover.finalDestination).toEqual("51E");
    })

    it(`should stay at 55N if there is no way to go further because of
         the limited grid`, () => {
        let rover = new Rover(5, 5, "N");
        let dimensions = [0, 0, 5, 5];
        rover.setNavigation("M");
        rover.launch(dimensions);
        expect(rover.finalDestination).toEqual("55N");
    })

})