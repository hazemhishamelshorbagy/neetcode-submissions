class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    
        topKFrequent(nums, k) {
        let countMap = new Map();
        for (let num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

      
        let pairs = Array.from(countMap.entries());

        pairs.sort((a, b) => b[1] - a[1]);

        let result = [];
        for (let i = 0; i < k; i++) {
            result.push(pairs[i][0]); 
        }

        return result;
    }
    
}
