class Queue(object):
    def __init__(self):
        self.queue=[]
    def isEmpty(self):
        return self.queue==[]
    def enqueue(self,data):
        self.queue.insert(0,data)
        return '{} added of queue'.format(data)
    def dequeue(self):
        return self.queue.pop()
    def sizequeue(self):
        return'{} size of queue'.format(len(self.queue)) 
    
#testing 
if __name__ == '__main__':
    q=Queue()
    print(q.enqueue(1))
    print(q.enqueue(5))
    print(q.enqueue(2))
    print(q.enqueue(7))

    print(q.dequeue())
    print(q.dequeue())

    print(q.sizequeue())
    print(q.isEmpty())


# Number of students Unable to eat Lunch Leet code problem 
# class Solution:
#     def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
#         res = len(students)
#         cnt = Counter(students)

#         for s in sandwiches:
#             if cnt[s] > 0:
#                 res -= 1
#                 cnt[s] -= 1
#             else:
#                 break
        
#         return res