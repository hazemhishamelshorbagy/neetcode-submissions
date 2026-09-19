class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
         let arrIndex=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                arrIndex.push(i);
                arrIndex.push(j);
                return arrIndex;
            }
        }
    }
    }
}
