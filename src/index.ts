import { convertMorseCodeToLetters, convertSentenceToMorseCode } from "./utils";



const data = convertMorseCodeToLetters(". .- -..");
const data2 = convertSentenceToMorseCode("Halo Aku Adi Kurniawan");

console.log(data,data2);