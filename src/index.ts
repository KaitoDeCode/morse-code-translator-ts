
const dataMorseCode:string[] = [
    ".-",    // A
    "-...",  // B
    "-.-.",  // C
    "-..",   // D
    ".",     // E
    "..-.",  // F
    "--.",   // G
    "....",  // H
    "..",    // I
    ".---",  // J
    "-.-",   // K
    ".-..",  // L
    "--",    // M
    "-.",    // N
    "---",   // O
    ".--.",  // P
    "--.-",  // Q
    ".-.",   // R
    "...",   // S
    "-",     // T
    "..-",   // U
    "...-",  // V
    ".--",   // W
    "-..-",  // X
    "-.--",  // Y
    "--.."   // Z
];

const dataLetters: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];


export{
    dataMorseCode,
    dataLetters
}

export function convertMorseCodeToLetters(morse:string): string[]{
    const morseCode:string[] = morse.split(" ");
    return prosesConvertingMorseToLetter(morseCode);
}

export function convertSentenceToMorseCode(sentece: string){
    const words = sentece.toLowerCase().split(" ");
    return prosesConvertingSentenceToMorse(words);
}

function prosesConvertingMorseToLetter(morseCodes: string[]){
    let result: string[] = []
    morseCodes.forEach(morse=>{
       const index = dataMorseCode.findIndex(data=> morse === data)
       result.push(dataLetters[index]);
    })
    return result
}
function prosesConvertingSentenceToMorse(words: string[]){
    let result: string[] = []

    words.forEach(word=>{
        let result2: string[] = []
      word.split('').forEach(letter=>{     
        const index = dataLetters.findIndex(data=> letter === data)
       result2.push(dataMorseCode[index]+" ");
      })
      result.push(result2.join('')+" ")
    })

    return result
}


