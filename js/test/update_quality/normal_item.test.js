
import {Item, items, update_quality} from '../../src/gilded_rose';

describe('update_quality | normal item', () => {

    afterEach(() => {
        items.length = 0
    });

    test('when an item has not passed its sell_in date it should have its quality reduced by 1', () => {
        const item = new Item('foo', 3, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(9)
    });

    test('when an item has passed its sell_in date it should have its quality reduced by 2', () => {
        const item = new Item('foo', 0, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(8)
    });

    test('it should decrement an item\'s sell_in date by 1', () => {
        const item = new Item('foo', 1, 10);
        items.push(item);
        update_quality();
        expect(item.sell_in).toEqual(0)
    });

});
