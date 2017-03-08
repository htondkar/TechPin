
const englishAlphabet = [
  "a", "b", "c", "d",
  "e", "f", "g", "h",
  "i", "j", "k", "l",
  "m", "n", "o", "p",
  "q", "r", "s", "t",
  "u", "v", "w", "x",
  "y", "z"
];

export default function alphaSorter(startupList) {

  //sort-> return object with keys: alphabet, value: array of objects
  let sortedList = {};

  for (let i = 0; i < englishAlphabet.length; i++) {
    sortedList[englishAlphabet[i]] = startupList.filter(item => {
      return englishAlphabet[i] === item.name.charAt(0).toLowerCase()
    })
  }
  // for (let charecter in englishAlphabet) {
  //   sortedList[englishAlphabet[charecter]] = startupList.filter(item => {
  //     return englishAlphabet[charecter] === item.name.charAt(0).toLowerCase()
  //   })
  // }
  return sortedList;
}
