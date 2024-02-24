const card = '2342834503458353';

function maskCard(card) {
     const mask = card.slice(-4).padStart(card.length, '*')
     return mask
}

console.log(maskCard(card))