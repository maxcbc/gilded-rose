
import {Item, items, update_quality} from '../../src/gilded_rose';

describe('update_quality | special item | backstage passes', () => {

    afterEach(() => {
        items.length = 0
    });

    test('when an item of \'Backstage passes\' has more than 10 days to go until its sell_in date it should have its quality increased by 1', () => {
        const item = new Item('Backstage passes', 11, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(11)
    });

    test('when an item of \'Backstage passes\' has 10 or less but more than 5 days to go until its sell_in date it should have its quality increased by 2', () => {
        const item = new Item('Backstage passes', 10, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(12)
    });

    test('when an item of \'Backstage passes\' has 5 or less days until its sell_in date it should have its quality increased by 3', () => {
        const item = new Item('Backstage passes', 5, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(13)
    });

    test('when an item of \'Backstage passes\' has passed its sell_in date it should have its quality is set to 0', () => {
        const item = new Item('Backstage passes', 0, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(0)
    });

    test('it should decrement an item of \`Backstage passes\`\'s sell_in date by 1', () => {
        const item = new Item('Backstage passes', 1, 10);
        items.push(item);
        update_quality();
        expect(item.sell_in).toEqual(0)
    });

});
