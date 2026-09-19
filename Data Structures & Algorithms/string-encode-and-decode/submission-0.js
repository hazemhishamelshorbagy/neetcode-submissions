class Solution {
    encode(strs) {
        let encodedString = "";
        for (let str of strs) {
            encodedString += str.length + "#" + str;
        }
        return encodedString;
    }
    decode(str) {
        let result = [];
        let i = 0; 
        while (i < str.length) {
            let hashIndex = str.indexOf('#', i);
            
            let length = parseInt(str.substring(i, hashIndex));
            
            let word = str.substring(hashIndex + 1, hashIndex + 1 + length);
            result.push(word);
            
            i = hashIndex + 1 + length;
        }

        return result;
    }
}