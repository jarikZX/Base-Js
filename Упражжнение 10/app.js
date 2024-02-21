const operations = [1000, -700, 300, -500, 10000];
let balance = 100;

function avgBalance (balance, operations) {
    let avgMax = 0;
    let avgMin = 0;
    let avgMaxSum = 0;
    let avgMinSum = 0;
    for (element of operations) {
        balance += element
        if (balance < 0 ){
            console.log(false);
            break;
        }
        if (element > 0) {
            avgMax += element;
            avgMaxSum++
        } 
        if (element < 0) {
            avgMin += element;
            avgMinSum++
        }
    }
    console.log(`Итоговый баланс: ${balance}
Средний доход: ${avgMax / avgMaxSum}
Средний расход: ${avgMin / avgMinSum}`);
}

avgBalance(balance, operations);