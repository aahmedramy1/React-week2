function findLongestSubstring(input, k) {
    let maxSubstring = "";
    let maxSubstringLength = 0;

    // loop through all possible substrings
    for (let i = 0; i < input.length; i++) {
        let charCount = new Map();
        let substring = "";

        for (let j = i; j < input.length; j++) {
            // add current character to charCount map
            let char = input[j];
            if(charCount[char])
            {
                charCount[char]++
            } else {
                charCount[char] = 1;
            }
            // charCount.set(char, (charCount.get(char) || 0) + 1);

            // if charCount map has more than k keys, break out of loop
            if (charCount.size > k) {
                break;
            }

            // update substring if longer
            substring += char;
            if (substring.length > maxSubstringLength) {
                maxSubstring = substring;
                maxSubstringLength = substring.length;
            }
        }
    }

    if (maxSubstring.length === 0) {
        return "Not enough unique character is present in the input string";
    }

    return `Longest substring with ${k} most unique characters is: ${maxSubstring} with length ${maxSubstringLength}`;
}

console.log(findLongestSubstring("aabbaacdeeeeddded", 3));
console.log(findLongestSubstring("abcddefabc", 4));
console.log(findLongestSubstring("aaaabbbb", 4));