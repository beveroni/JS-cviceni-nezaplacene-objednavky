console.log('Funguju!');

const nezaplaceneObjednavky = [
  {
    id: 159753246,
    polozky: [
      { nazev: 'knihy', mnozstvi: 5, cena: 200 },
      { nazev: 'pero', mnozstvi: 1, cena: 50 },
      { nazev: 'sešity', mnozstvi: 3, cena: 100 },
    ],
    datum: '2023-04-07',
    uzivatel: {
      jmeno: 'Tomáš',
      email: 'tomas@volny.cz',
    },
  },
  {
    id: 456123789,
    polozky: [
      { nazev: 'notebook', mnozstvi: 1, cena: 12000 },
      { nazev: 'myš', mnozstvi: 1, cena: 400 },
      { nazev: 'klávesnice', mnozstvi: 1, cena: 800 },
      { nazev: 'sluchátka', mnozstvi: 1, cena: 1500 },
    ],
    datum: '2023-04-08',
    uzivatel: {
      jmeno: 'Markéta',
      email: 'marketa@seznam.cz',
    },
  },
  {
    id: 987654321,
    polozky: [
      { nazev: 'plavky', mnozstvi: 1, cena: 400 },
      { nazev: 'papuče', mnozstvi: 1, cena: 100 },
      { nazev: 'ručník', mnozstvi: 2, cena: 150 },
    ],
    datum: '2023-04-09',
    uzivatel: {
      jmeno: 'Johanka',
      email: 'johanka@gmail.com',
    },
  },
  {
    id: 123456789,
    polozky: [
      { nazev: 'tričko', mnozstvi: 2, cena: 250 },
      { nazev: 'džíny', mnozstvi: 1, cena: 600 },
      { nazev: 'boty', mnozstvi: 1, cena: 800 },
      { nazev: 'pásek', mnozstvi: 1, cena: 100 },
    ],
    datum: '2023-04-10',
    uzivatel: {
      jmeno: 'Jane',
      email: 'jane@outlook.com',
    },
  },
  {
    id: 852963741,
    polozky: [
      { nazev: 'míč', mnozstvi: 1, cena: 300 },
      { nazev: 'brankářské rukavice', mnozstvi: 1, cena: 800 },
      { nazev: 'tréninkové dresy', mnozstvi: 10, cena: 500 },
      { nazev: 'plíškový medvídek', mnozstvi: 1, cena: 150 },
    ],
    datum: '2023-04-04',
    uzivatel: {
      jmeno: 'Ruda',
      email: 'ruda@email.cz',
    },
  },
  {
    id: 753951824,
    polozky: [
      { nazev: 'matrace', mnozstvi: 1, cena: 5000 },
      { nazev: 'polštář', mnozstvi: 2, cena: 300 },
      { nazev: 'povlečení', mnozstvi: 1, cena: 800 },
    ],
    datum: '2023-04-06',
    uzivatel: {
      jmeno: 'Novákovi',
      email: 'novakovi@seznam.cz',
    },
  },
];

const processEmails = (emails) => {
  document.querySelector('#emaily').textContent = emails.join(', ');
};

const processIdentifiers = (identifiers) => {
  document.querySelector('#identifikatory').textContent =
    identifiers.join(', ');
};

// Tyto dva řádky uprav podle zadání
const emaily = nezaplaceneObjednavky.map((objednavka) => {
  return `${objednavka.uzivatel.jmeno} <${objednavka.uzivatel.email}`;
});
const identifikatory = nezaplaceneObjednavky.map((objednavka) => {
  return objednavka.id;
});

processEmails(emaily);
processIdentifiers(identifikatory);

// Upravte soubor app.js tak, aby nachystal dvě nová pole identifikatory a emaily.

// Pole const identifikatory = []a const emaily = [] jsou již předpřipravené. Upravte části za rovnítky. Využijte metodu map na poli nezaplaceneObjednavky.

// Zařiďte, aby v prvním poli identifikatory byly pouze čísla, jednotlivá id z původního pole nezaplaceneObjednavky. Představte si, že čísla bude zpracovávat skladový systém, který je potřebuje přesně v této podobě.

// V druhém poli by měly být pouze řetězce, jména s e-maily zákazníků ve formátu Jméno <jmeno@server.cz>, aby se daly snadno zpracovat e-mailovým serverem.

// Poslední dva předchystané řádky nijak neupravujte. Představte si, že místo nich bude jednou kód, který předá vámi vytvořená pole dalším systémům.
