function groupAnagrams(strs) {
  const groupedWords = {};

  for (const word of strs) {
    const sortedWord = word.split("").sort().join("");
    if (!groupedWords[sortedWord]) {
      groupedWords[sortedWord] = [word];
    } else {
      groupedWords[sortedWord].push(word);
    }
  }
  return Object.values(groupedWords);
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
