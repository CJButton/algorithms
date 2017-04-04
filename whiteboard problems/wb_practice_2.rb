

# Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.
# [0, 1, 1, 2, 3, 5, 8]
def fibs(num)
  return [0] if num == 1
  return [0, 1] if num == 2

  prev = fibs(num - 1)
  prev.push(prev[-2] + prev[-1])


end

# p fibs(7)

def palindrome(string)

  i = 0
  j = string.length - 1
  while i < string.length
    if string[i] != string[j]
      return false
    end
    i += 1
    j -= 1

  end
  true

end

# p palindrome("dog")
# p palindrome("abba")
# p palindrome("aaaaaabbaaaaaa")

def valid_ip?(ip)

  split_ip = ip.split(".")
  return false if split_ip.length != 4

  split_ip.each do |el|
    return false if el.to_i.class != Fixnum

    if el.to_i < 0 || el.to_i > 255
      return false
    end
  end
  true

end
# EDGECASE: what if an element isn't an integer!?
# valid IPv4 address
# anything between 0.0.0.0 and 255.255.255.255 is valid
# 
# p valid_ip?("255.255.255.255")
# p valid_ip?("255.255.255")
# p valid_ip?("256.255.255.255")
