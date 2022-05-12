"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const deniro_quotes = __importStar(require("./deniro_quotes.json"));
function log(message) {
    console.log(message);
    return message;
}
function getQuote(id) {
    const quote = deniro_quotes.quotes.find((element) => element.id === 1);
    console.log(quote === null || quote === void 0 ? void 0 : quote.quote);
    return quote;
}
function getParagraph() {
    return `${getQuote(findDeniroRanID())}\n${getQuote(findDeniroRanID())}\n${getQuote(findDeniroRanID())}\n${getQuote(findDeniroRanID())}\n${getQuote(findDeniroRanID())}\n`;
}
function findDeniroRanID() {
    return Math.floor(Math.random() * deniro_quotes.quotes.length - 1);
}
function NSFWFilter(message) {
    var _a;
    const Sassquachie = "Sassquachie";
    const NSFWMap = {
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
    console.log(NSFWMap[message.toLowerCase().trim()]);
    return (_a = NSFWMap[message.toLowerCase().trim()]) !== null && _a !== void 0 ? _a : message;
}
module.exports = {
    log,
    getQuote,
    NSFWFilter,
    getParagraph,
    findDeniroRanID,
};
//# sourceMappingURL=index.js.map