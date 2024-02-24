const wallet = {
    balance: 0,
    operations: [],
    getBalance: function(reason, sum) {
        if (sum > 0) {
            this.balance = this.balance + sum;
            this.operations.push({reason, sum});
            return true
        } else {
            return false
        }
    },
    decreasBalance: function(reason, sum) {
        if (this.balance > sum) {
            this.balance -= sum;
            this.operations.push({reason, sum: -sum});
            return true
        } else {
            return false
        }
    },
    numOperation: function() {
        return this.operations.length        
    }
}


console.log(wallet.getBalance('Пополнение',  1000));
console.log(wallet.decreasBalance('покупка', 100));
console.log(wallet.numOperation());
console.log(wallet);