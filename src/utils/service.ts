import { dataLetters,dataMorseCode } from "./data";
export function convertMorseCodeToLetters(morse:string): string[]{
    const morseCode:string[] = morse.split(" ");
    return prosesConvertingMorseToLetter(morseCode);
}

function prosesConvertingMorseToLetter(morseCodes: string[]){
    let result: string[] = []
    morseCodes.forEach(morse=>{
       const index = dataMorseCode.findIndex(data=> morse === data)
       result.push(dataLetters[index]);
    })
    return result
}