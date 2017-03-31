

# Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.
# [0, 1, 1, 2, 3, 5, 8]
def fibs(num)
  return [0] if num == 1
  return [0, 1] if num == 2

  prev = fibs(num - 1)
  prev.push(prev[-2] + prev[-1])


end

p fibs(7)
