export function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
};

export const items = [];

export function update_quality() {
  for (const item of items) {

    switch(item.name) {
      case 'Aged Brie':
      case 'Backstage passes to a TAFKAL80ETC concert':
      case 'Sulfuras, Hand of Ragnaros':
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
              item.quality = item.quality - 1
            }
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.sell_in < 11) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1
                }
              }
              if (item.sell_in < 6) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1
                }
              }
            }
          }
        }
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.sell_in = item.sell_in - 1;
        }
        if (item.sell_in < 0) {
          if (item.name != 'Aged Brie') {
            if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.quality > 0) {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                  item.quality = item.quality - 1
                }
              }
            } else {
              item.quality = item.quality - item.quality
            }
          } else {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
        }
        break;
      default:
        if (item.sell_in > 0) {
          item.quality = item.quality - 1
        } else {
          item.quality = item.quality - 2
        }
        item.sell_in--
    }



  }
}
