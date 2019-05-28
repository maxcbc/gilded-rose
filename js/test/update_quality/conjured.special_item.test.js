
import {Item, items, update_quality} from '../../src/gilded_rose';

describe('update_quality | special item | conjured', () => {

    afterEach(() => {
        items.length = 0
    });

    test('when an item of \'Conjured\' has not passed its sell_in date it should have its quality reduced by 2', () => {
        const item = new Item('Conjured', 3, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(8)
    });

    test('when an item of \'Conjured\' has passed its sell_in date it should have its quality reduced by 4', () => {
        const item = new Item('Conjured', 0, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(6)
    });

    test('it should decrement an item of \`Conjured\`\'s sell_in date by 1', () => {
        const item = new Item('Conjured', 1, 10);
        items.push(item);
        update_quality();
        expect(item.sell_in).toEqual(0)
    });

    test('it should not reduce an item of \`Conjured\`\'s quality below 0', () => {
        const item = new Item('Conjured', 0, 0);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(0)
    });
});
