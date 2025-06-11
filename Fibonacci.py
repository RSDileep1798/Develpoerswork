class solution:
    def fib(self, n: int) -> int:
        
        if n == 0:
            return 0
        elif n == 1:
            return 1
        a, b = 0, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b
    # Test case
    # n = 5
    # res = fib(n)
    # print(f"The {n}th fibonacci number is {"res"}")
    print(fib(9))