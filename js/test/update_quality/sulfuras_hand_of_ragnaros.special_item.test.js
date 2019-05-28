
import {Item, items, update_quality} from '../../src/gilded_rose';

describe('update_quality | special item | sulfuras, hand of ragnaros', () => {

    afterEach(() => {
        items.length = 0
    });

    test('it should not alter the quality of an item of \'Sulfuras, Hand of Ragnaros\' when it has not passed its sell_in date', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 3, 80);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(80)
    });

    test('it should not alter the quality of an item of \'Sulfuras, Hand of Ragnaros\' even if it has passed its sell_in date', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(80)
    });

    test('it should not alter an item of \`Sulfuras, Hand of Ragnaros\`\'s sell_in date', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 1, 10);
        items.push(item);
        update_quality();
        expect(item.sell_in).toEqual(1)
    });

});
