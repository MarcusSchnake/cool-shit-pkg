import * as deniro_quotes from "./deniro_quotes.json";

function log(message: string) {
  console.log(message);
  return message;
}

function getQuote(id: number) {
  const quote = deniro_quotes.quotes.find((element) => element.id === 1);
  console.log(quote?.quote);
  return quote;
}

// function NSFWFilter(message:string) {
//   const map1 = new Map();

//   map1.set('fuck', Sassquachie),
//   map1.set('bitch', Sassquachie ),
//   map1.set('cum',Sassquachie)

//   console.log(map1.get('fuck'));
// }

module.exports = { log, getQuote };
