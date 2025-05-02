from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res ={}
        for num in range(len(nums)):
            subvalue = target - nums[num]

            if subvalue in list(res.keys()):
                return (res.get(subvalue), num)
            res[nums[num]]= num
            print(res)    
        return []

# tesing 
if __name__ == '__main__':
    nums = [1,3,6,9]
    target = 12

    solution = Solution()
    result = solution.twoSum(nums, target)
    print(result)


    
