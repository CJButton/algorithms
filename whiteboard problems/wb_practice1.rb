


def split_integer(num)
  # first, we need to split the digits, but WITHOUT turning them into
  # strings! Instead, we can use good old modulo!
  all_digits = []
  while num > 0
    digit = num % 10
    all_digits.push(digit)
    num /= 10
  end

  all_digits

end

def digital_root(num)

  digits = split_integer(num) # an array
  added = digits.inject {|x, y| x + y}
  added < 10 ? added : digital_root(added)

end

p digital_root(12345)
