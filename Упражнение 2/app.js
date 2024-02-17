const money = 12000;
const procent = 0.07;
const priceHouse = 13500;
const itog = 12000 * (1 + 0.07 / 12)**24;

if (itog > priceHouse) {
    console.log(`Вася может купить дом и у него останеться ${itog - priceHouse}`)
}
