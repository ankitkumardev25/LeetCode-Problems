class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        #solution 1 (Sorting)
        return sorted(s)==sorted(t)
        
        #solution 2 (Couter Hashmap)
        return Counter(s)==Counter(t)

        #Solution 3 (Hashmap)
        if len(s)!=len(t):
            return False
        mapS,mapT = {},{}
        for i in range(len(s)):
            mapS[s[i]]=1+mapS.get(s[i],0)
            mapT[t[i]]=1+mapT.get(t[i],0)
        
        for c in mapS:
            if mapS[c]!=mapT.get(c,0):
                return False
        return True