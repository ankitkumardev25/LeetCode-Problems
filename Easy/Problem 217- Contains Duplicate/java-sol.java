class Solution {
    public boolean containsDuplicate(int[] nums) {
        int number;
        Set<Integer> numset = new HashSet<Integer> (); 
        for(int i =0;i<nums.length;i++){
            numset.add(nums[i]);
        }
        if(nums.length!=numset.size()){
            return true;
        }
        return false;
    }
}