# my_string = 'My age is'
# my_age = 666

# added_string = my_string + my_age
# print(added_string)

# list_a = [1,2,3,4,5]
# list_b = [a,2,3,4,5]
# list_c = list_a

# print('List Check:')


# console.log('Hello from homework.js!');

# //==================Exercise #1 ==========//
# /*
#     Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
#     It should log out 3 because the array at index 3 is 5 which is not consecutive.
# */


# let exerciseOneArr = [1, 2, 3, 5, 6, 7]

def exerciseOneArr(nums):
    for x in range(0, len(nums)):
        if nums[x] - nums[x-1] > 1:
            return x
    return -1
    
    
# exerciseOneArr(nums)

exerciseOneArr([1, 2, 3, 4, 6, 7])

# //============Exercise #2 ============//
# /*
# Given the two array of numbers below, loop through them both 
# individually and the sum all of the positives elements.

def sum_pos(arr):
    # a = []
    # for x in arr:
    #     if x > -1:
    #         a.append(x)
    # print(sum(a))
    
    positive = list(filter(lambda x: x>0, arr))
    print (sum(positive))
    
sum_pos([10, 12, -9, 3, -1, 0, 15])

# Example 1:
# Input: [10, 12, -9, 3, -1, 0, 15] 
# Output: 40
# Explain: 10 + 12 + 3 + 15 = 40

# Example 2:
# Input: [3, 5, 7, 9, -10, 2, -22, -1] 
# Output: 26

# Note: if there is nothing to sum, the sum is default to 0.
# */