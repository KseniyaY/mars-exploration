import { MarsPlateau } from "../components/mars-plateau";

describe(`Given the initial plateau dimansions to be explored by rovers`, () => {
    it('the grid should be created', () => {
        let plateau = new MarsPlateau(5, 5);
        expect(plateau.dimensions).toEqual([0, 0, 5, 5]);
    });
})