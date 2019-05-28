
import {Item, items, update_quality} from '../../src/gilded_rose';
/*
"Backstage passes", like Backstage passes to a TAFKAL80ETC concert, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert
*/
describe('update_quality | special item | backstage passes to a tafkal80etc concert', () => {

    afterEach(() => {
        items.length = 0
    });

    test('when an item of \'Backstage passes to a TAFKAL80ETC concert\' has more than 10 days to go until its sell_in date it should have its quality increased by 1', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(11)
    });

    test('when an item of \'Backstage passes to a TAFKAL80ETC concert\' has 10 or less but more than 5 days to go until its sell_in date it should have its quality increased by 2', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(12)
    });

    test('when an item of \'Backstage passes to a TAFKAL80ETC concert\' has 5 or less days until its sell_in date it should have its quality increased by 3', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(13)
    });

    test('when an item of \'Backstage passes to a TAFKAL80ETC concert\' has passed its sell_in date it should have its quality is set to 0', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10);
        items.push(item);
        update_quality();
        expect(item.quality).toEqual(0)
    });

    test('it should decrement an item of \`Backstage passes to a TAFKAL80ETC concert\`\'s sell_in date by 1', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10);
        items.push(item);
        update_quality();
        expect(item.sell_in).toEqual(0)
    });

});
