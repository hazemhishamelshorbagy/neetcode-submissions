class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
  isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  // Split into arrays, sort them, and join back into strings to compare
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  
  return sortedS === sortedT;

}

}
