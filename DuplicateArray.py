class Solution:
    def Duplicate(self, nums):

        res = set()

        for n in nums:
            if n in res:
                return True
            res.add(n)
        return False

# tesing 
if __name__ == '__main__':
    nums = [4, 5, 6, 4]
    solution = Solution()
    print(solution.Duplicate(nums))



