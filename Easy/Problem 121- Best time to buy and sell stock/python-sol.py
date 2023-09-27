class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit=0
        minPrice=9999
        
        for p in prices:
            if p<minPrice:
                minPrice=p
            else:
                maxProfit=max(p-minPrice,maxProfit)
        return maxProfit