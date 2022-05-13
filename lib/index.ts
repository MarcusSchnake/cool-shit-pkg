import * as deniro_quotes from "./deniro_quotes.json";

function log(message: string) {
  console.log(message);
  return message;
}

function getQuoteById(id: number) {
  const quote = deniro_quotes.quotes.find((element) => element.id === id);
  return quote;
}

function getParagraph() {
  return `${getQuoteById(findDeniroRanID())}\n${getQuoteById(
    findDeniroRanID()
  )}\n${getQuoteById(findDeniroRanID())}\n${getQuoteById(
    findDeniroRanID()
  )}\n${getQuoteById(findDeniroRanID())}\n`;
}

function findDeniroRanID() {
  return Math.floor(Math.random() * deniro_quotes.quotes.length - 1);
}

type myMapType = Record<string, string>;

function NSFWFilter(message: string) {
  const Sassquachie = "Sassquachie";
  const NSFWMap: myMapType = {
    fuck: Sassquachie,
    fuckin: Sassquachie,
    bitch: Sassquachie,
    cum: Sassquachie,
    damn: Sassquachie,
    shit: Sassquachie,
    cunt: Sassquachie,
    pussy: Sassquachie,
    motherfucker: Sassquachie,
    dick: Sassquachie,
    fucker: Sassquachie,
    bitchass: Sassquachie,
    ass: Sassquachie,
    nigger: Sassquachie,
    nigga: Sassquachie,
    cracker: Sassquachie,
    chink: Sassquachie,
    spick: Sassquachie,
    dyke: Sassquachie,
    kike: Sassquachie,
    cumdumpster: Sassquachie,
    twat: Sassquachie,
  };

  return NSFWMap[message.toLowerCase().trim()] ?? message;
}

module.exports = {
  log,
  getQuoteById,
  NSFWFilter,
  getParagraph,
  findDeniroRanID,
};
