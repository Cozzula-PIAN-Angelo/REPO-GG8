//FOR OF
const colorList = [`rosso`, `verde`, `blue`, `giallo`];

for (const colori of colorList) {
    console.log(colori);
}

//FOR IN  

const persona = {
    nome: `mario`,
    cognome: `rossi`,
    eta: 25,
    attivo: true,
};

for (const key in persona) {
    console.log(key);
    console.log(`${key}: ${persona[key]}`);
};

//while - do while
let x = 11
while (x <= 10) {
    console.log(x);
    x++
}
let y = 11
while (x <= 10) {
    console.log(y);
    y++;
} while (y <= 10);


//condizione di blocco non numerica

const names = [`mario`, `maria`, `giovanna`, `luca`, `marco`];

let stop = false;
let i = 0;
while (stop === false) {
    console.log(names[i]);
    if (names[i] === `marco`) {
        stop = true;
    }
    i++
}

let alt = 'Maria';
let z = 0;

while (names[z] !== 'maria') {
    console.log(names[z]);
    z++;
}

console.log('************************************');

for (let i = 0; i <= 2; i++) {
    console.log(`CICLO NUMERO ${i}`);

    let b = 0;

    while (b < names.length) {
        console.log(names[b]);
        b++;
    }
}


//BREAK / CONTINUE

const numbers = [1, 25, 38, 42, 55, 67, 76];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] > 30) {
        console.log(`Trovato ${numbers[i]} che è maggiore di 30`);
        break;
    }
}

const students = [
    {
        name: `mario rossi`,
        iscritto: true,
    },
    {
        name: `luca rossi`,
        iscritto: false,
    },
    {
        name: `silvio rossi`,
        iscritto: true,
    },
    {
        name: `marco rossi`,
        iscritto: false,
    },
    {
        name: `giova rossi`,
        iscritto: true,
    },
    {
        name: `carlo rossi`,
        iscritto: false,
    },
    {
        name: `mario rossi`,
        iscritto: true,
    },

]
for (let i = 0; i < students.length; i++) {
    if (students[i].iscritto === true) continue;

    console.log(`Lo studente ${students[i].name} non risulta ancora iscritto`);
}

//ciclo annidato 

console.log('************************************');

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let today = 'Thursday';

switch (today) {
    case 'Monday':
        console.log('Oggi è lunedì');
        break;
    case 'Tuesday':
        console.log('Oggi è martedì');
        break;
    case 'Wednesday':
        console.log('Oggi è mercoledì');
        break;
    case 'Thurday':
        console.log('Oggi è giovedì');
        break;
    case 'Friday':
        console.log('Oggi è venerdì');
        break;
    case 'Saturday':
        console.log('Oggi è sabato');
        break;
    case 'Sunday':
        console.log('Oggi è domenica');
        break;
};


let price = 57;

switch (true) {
    case price <= 20:
        console.log(`Il prezzo dell'articolo è ${price}`);
        break;

    case price > 20 && price <= 50:
        console.log(
            `Il prezzo dell'articolo scontato è ${price - price * 0.1}`,
        );
        break;

    case price > 50 && price <= 80:
        console.log(
            `Il prezzo dell'articolo scontato è ${price - price * 0.15}`,
        );
        break;

    default:
        console.log(
            `Il prezzo dell'articolo scontato è ${price - price * 0.2}`,
        );
        break;
}


//introduzzione alla manipolazione del DOM (document object model)
//querySelector

const colorsList = document.querySelector('.container main section:last-child ul');

for (let i = 0; i < listaColori.length; i++) {
    colorsList.innerHTML += `<li class="listElement">${listaColori[i]}</li>`;
}

console.log(colorsList.innerHTML);

const pageTitle = document.querySelector('#pageTitle');
console.log(pageTitle.textContent);
pageTitle.textContent += ' - Cicli, iterazioni e introduzione alla manipolazione del DOM';

const firstSection = document.querySelector('.container main section:first-of-type h2');
console.log(firstSection.textContent);
firstSection.textContent += ' - Prima lista di elementi';
firstSection.style.color = 'red';
firstSection.style.backgroundColor = 'yellow';