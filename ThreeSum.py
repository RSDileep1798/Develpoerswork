from typing import List
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i, a in enumerate(nums):
            if a > 0:
                break
            if i > 0 and a == nums[i - 1]:
                continue
            l, r = i + 1, len(nums) -1

            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    r -= 1
                while nums[l] == nums[l - 1] and l < r:
                    l += 1
        return res

# test case 
if __name__ == '__main__':
    nums = [-1,0,1,2,-1,-4]
    nums = [0,1,1]
    nums = [0,0,0]
    sol = Solution()
    print("Triplets summing to zero:", sol.threeSum(nums))
