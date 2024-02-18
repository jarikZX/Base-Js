function credit(age, job = false) {
    if (age >= 24 && job === true) {
        return 500;
    } else if (age >= 24) {
        return 100;
    }
    return 'кредит не одобрен'
}

function byMac (age, job = false, money) {
    const res = credit(age, job);
    const mon = money + res;
    if (mon >= 2000) {
        return true;
    }
    return false;
}
console.log(byMac(24, true, 1500));