class Solution:

    def twoSumcheck(self, nums, target):

        res = {}

        for num in range(len(nums)):
            
            subValue = target - nums[num]

            if subValue in list(res.keys()):
                return [res.get(subValue), num]
            
            res[nums[num]] = num

        return []

solution = Solution()
print(solution.twoSumcheck([3,2,4], 6))