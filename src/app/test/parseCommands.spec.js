import { processPlateauSize, processRoverCoordinates } from "../handlers/processCommands";

describe(`Given the string instructions on the plateau size to be explored 
        and rover's coordinates for deployment`, () => {

    it('parsePlateauSize helper returns an array of dimensions', () => {
        expect(processPlateauSize("5 5")).toEqual([5, 5]);
    });

    it('parseRoverCoordinates returns array of position', () => {
        expect(processRoverCoordinates("1 2 N")).toEqual([1, 2, "N"]);
    });

});