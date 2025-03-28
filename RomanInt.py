class Solution(object):
    def romanToInt(self, s: str) ->int:
        res = 0
        roman = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,     
        } 
        #Iterative
        for a, b in zip(s, s[1:]):
            if roman[a] < roman[b]:
                res -= roman[b]
            else:
                res += roman[a]
        return res + roman[s[-1]]
    
if __name__ == '__main__':
    s = "III"
    solution = Solution()
    print(solution.romanToInt(s))