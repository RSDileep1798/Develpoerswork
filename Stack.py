# from collections import deque 

# stack = deque()

# stack.append('g')
# stack.append('f')
# stack.append('g')

# print('Initial stack:')
# print(stack)

# print('\nElement popped from stack:')
# print(stack.pop())
# print(stack.pop())
# print(stack.pop())

# print('\nStack after element are popped:')
# print(stack)

class Stack(object):
    #constructor
    def __init__(self):
        self.stack=[]
        self.numofitems=0
    #checking empty
    def isEmpty(self):
        return self.stack==[]
    #pushing element
    def push(self,data):
        self.stack.insert(self.numofitems,data)
        self.numofitems+=1 #increment index
        return '{} pushed to stack', format(data)
    #deleting the element 
    def pop(self):
        self.numofitems-=1
        data=self.stack.pop(self.numofitems)
        return '{} pop to stack', format(data)
    def stacksize(self):
        return len(self.stack)
    
#testing
if __name__ =='__main__':
    s=Stack()
    print(s.push(2))
    print(s.push(8))
    print(s.push(3))
    print(s.push(9))
    print(s.push(5))

    print(s.pop())
    print(s.pop())
    print(s.stacksize())
    print('size of stack',s.stacksize())

# Implement stack using Queues (LIFO using two Queues)
# class MyStack:

#     def __init__(self):
#         self.q = deque()

#     def push(self, x: int) -> None:
#         self.q.append(x)
        
#     def pop(self) -> int:
#         for i in range(len(self.q)-1):
#             self.push(self.q.popleft())
#         return self.q.popleft()

#     def top(self) -> int:
#         return self.q[-1]

#     def empty(self) -> bool:
#         return len(self.q) == 0