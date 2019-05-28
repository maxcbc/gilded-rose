export function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
};

export const items = [];

export function update_quality() {
    for (const item of items) {

        switch(item.name) {
            case 'Sulfuras, Hand of Ragnaros':
                item.quality = 80;
                break;
            case 'Backstage passes to a TAFKAL80ETC concert':
                if (item.sell_in > 0 && item.sell_in <= 5) {
                    item.quality = item.quality + 3;
                } else if (item.sell_in > 5 && item.sell_in <= 10) {
                    item.quality = item.quality + 2;
                } else if (item.sell_in > 10) {
                    item.quality = item.quality + 1;
                } else {
                    item.quality = 0;
                }
                break;
            case 'Aged Brie':
                if (item.sell_in > 0) {
                    item.quality = item.quality + 1;
                } else {
                    item.quality = item.quality + 2;
                }
                break;
            case 'Conjured':
                if (item.sell_in > 0) {
                    item.quality = Math.max(0, item.quality - 2);
                } else {
                    item.quality = Math.max(0, item.quality - 4);
                }
                break;
            default:
                if (item.sell_in > 0) {
                    item.quality = Math.max(0, item.quality - 1);
                } else {
                    item.quality = Math.max(0, item.quality - 2);
                }
        }

        if (item.name !== 'Sulfuras, Hand of Ragnaros') item.sell_in--;

    }
}
