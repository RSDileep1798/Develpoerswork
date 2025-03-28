# class Solution:
#     def isPalindrome(self, x:int) -> bool:
#         # Convert the integer to a string
#         original = str(x)
#         # Reverse the string using slicing
#         reverse = original[::-1]
#         # Compare the original and reversed strings
#         return original == reverse
class Solution(object):
    def isPalindrome(self, x):
        # Step 1: Check if the number is negative
        if x < 0:
            return False
        
        # Step 2: Initialize original and reversed numbers
        original, reversed = x, 0
        # Step 3: Reverse the number mathematically
        while x != 0:
            reversed = reversed * 10 + x % 10
            x //= 10
        
        # Step 4: Compare the original number with the reversed number
        return original == reversed
# testing 
if __name__ == '__main__':
    x = 121
    solution = Solution()
    print(solution.isPalindrome(x))
