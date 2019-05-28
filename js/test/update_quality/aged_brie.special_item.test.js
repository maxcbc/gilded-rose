
import {Item, items, update_quality} from '../../src/gilded_rose';

describe('update_quality | special item | aged brie', () => {

    afterEach(() => {
        items.length = 0
    });

    test('when an item of \'Aged Brie\' has not passed its sell_in date it should have its quality increased by 1', () => {
        const item = new Item('Aged Brie', 3, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(11)
    });

    test('when an item of \'Aged Brie\' has passed its sell_in date it should have its quality increased by 2', () => {
        const item = new Item('Aged Brie', 0, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(12)
    });

    test('it should decrement an item of \`Aged Brie\`\'s sell_in date by 1', () => {
        const item = new Item('Aged Brie', 1, 10);
        items.push(item);
        update_quality();
        expect(item.sell_in).toEqual(0)
    });

});
