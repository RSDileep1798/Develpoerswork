# import array as arr
#definig the array 
# a = arr.array('d',[1,1,1.2,1,3.2])
#adding the element 
# a.append(2.5)
# print(a)
# a.extend([2.2,3.2])
# print(a)
#deleting the element from Array 
# print(a.pop()) 

#########
#Find Second largest Number in Array 
#Python program to find the second largest element in the array
# using two traversals
def getSecondLargest(arr):
    n = len(arr)

    largest = -1
    secondLargest = -1

    for i in range(n):
        if arr[i] > largest:
            largest = arr[i]

        #find second largest ele
    for i in range(n):

        if arr[i] > secondLargest and arr[i] != largest:
            secondLargest = arr[i]

    return secondLargest
if __name__ == "__main__":
    arr = [12, 37, 1, 10, 34, 40]
    print(getSecondLargest(arr))



