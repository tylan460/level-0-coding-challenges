function findvowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  (vowels.forEach (k => {console.log(k);} ));
}
findvowels("Umuzi")