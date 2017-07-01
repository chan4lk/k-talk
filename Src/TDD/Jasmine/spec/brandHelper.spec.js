/// <reference path="../lib/jasmine-2.6.4/jasmine.js" />
/// <reference path="../src/brandHelper.js" />

describe('brandHelper', () => {

    it('should be defined', () => {
        expect(getCommonBrands).toBeDefined();
    });

    it('should throw when user brands are null', () => {
        expect(() => getCommonBrands(null, null)).toThrow(new Error('user brands cannot be null'));
    });

    it('should throw when current brands are null', () => {
        expect(() => getCommonBrands([], null)).toThrow(new Error('current brands cannot be null'));
    });

    it('should return empty when no common brands', () => {
        expect(getCommonBrands(['toyota'], 'honda')).toEqual([]);
    });

    it('should return common when common brands available', () => {
        expect(getCommonBrands(['toyota'], 'toyota, honda')).toEqual(['toyota']);
    });

    describe('getCurrentBrandsAsList', () => {
        it('should be defined', () => {
            expect(getCurrentBrandsAsList).toBeDefined();
        });

        it('should return empty list when current brands are empty', () => {
            expect(getCurrentBrandsAsList('')).toEqual([]);
        });

        it('should return brands list when sigle current brand is passed', () => {
            expect(getCurrentBrandsAsList('toyota')).toEqual(['toyota']);
        });

        it('should return brands list when multiple current brands are passed', () => {
            expect(getCurrentBrandsAsList('toyota, honda, suzuki')).toEqual(['toyota', 'honda', 'suzuki']);
        });
    })
});