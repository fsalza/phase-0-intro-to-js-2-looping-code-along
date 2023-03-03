// Code your solutions in this file
for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event ) {
    const messages = [];
    for (let x = 0; x < names.length; x++) {
        messages.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return messages;
}

writeCards(names, "surprise");

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
}

countDown(10);
