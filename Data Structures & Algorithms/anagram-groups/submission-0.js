class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
     groupAnagrams(strs) {
    if(strs.length === 0) return [];
    let map = new Map();
    for(let str of strs) {
        // Sort the string to use as a key
        let sortedStr = str.split('').sort().join('');
        if(!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
return Array.from(map.values());
 
 }
}
