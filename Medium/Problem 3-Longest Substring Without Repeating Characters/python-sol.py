class Solution:
    def longestSubstring(self,s:str)->int:
        charSet=set()
        res,l=0,0
        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[r])
                l+=1
            charSet.add(s[r])
            res=max(res,r-l+1)
        return res
