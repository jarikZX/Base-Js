const money = 100;
const canBay = money > 50;


if (canBay) {
    console.log('Может купить наш продукт');
} else if (money > 55) {
    console.log('куплено');
} else {
    console.log('Не может');
}