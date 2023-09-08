class Solution:
    def isPalindrome(self, s: str) -> bool:
        # new_str=""
        # for c in s:
        #     if c.isalnum():
        #         new_str+=c.lower()
        # return new_str==new_str[::-1]
        
        i,j=0,len(s)-1
        print(s)

        while i<j :
            while i<j and not (ord('a')<=ord(s[i])<=ord('z') or ord('A')<=ord(s[i])<=ord('Z') or ord('0')<=ord(s[i])<=ord('9')):
                i+=1
            
            while j>i and not (ord('a')<=ord(s[j])<=ord('z') or ord('A')<=ord(s[j])<=ord('Z') or ord('0')<=ord(s[j])<=ord('9')):
                j-=1
            
            # print("i = ",i ," ",s[i])
            # print("j = ",j ," ",s[j])
            if s[i].lower()!=s[j].lower():
                return False
            i+=1
            j-=1

        return True