
import {Item, items, update_quality} from '../../src/gilded_rose';

describe('update_quality | special item | sulfuras, hand of ragnaros', () => {

    afterEach(() => {
        items.length = 0
    });

    test('it should set an item of \`Sulfuras, Hand of Ragnaros\`\'s quality to 80 when it has not passed its sell_in date', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 3, 8);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(80)
    });

    test('it should set an item of \`Sulfuras, Hand of Ragnaros\`\'s quality to 80 even if it has passed its sell_in date', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 0, 70);
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
