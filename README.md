# translator sandi morse ts by kaito
mengubah bentuk string kalimat menjadi pecahan kata sandi morse begitu juga sebaliknya

## usage
```typescript

const KalimatKeMorseCode = convertSentenceToMorseCode("Adi Baik Banget");
console.log(KalimatKeMorseCode);

//result
[ '.- -.. ..  ', '-... .- .. -.-  ', '-... .- -. --. . -  ' ]


const KalimatKeMorseCode = convertMorseCodeToLetters(".- -.. ..");
console.log(KalimatKeMorseCode);
//result
[ 'a', 'd', 'i' ]

```
