class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0, minPrice = 9999;
        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) minPrice = prices[i];
            else maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
        return maxProfit;
        
    }
}