


# Digital Root
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

# successful
# digital_root(12345)

#-----------
# Caesar Shift



def encode_word(word, shift)
  # we create an array of all 26 letters in the alphabet
  alphabet = ("a".."z").to_a

  # the entire alphabet is now shifted over properly, with the earlier
  # letters, now appearing at the back
  shifted_alphabet = (alphabet[shift]..alphabet[-1]).to_a +
                                  (alphabet[0]...alphabet[shift]).to_a
  encoded = [] # and an empty array to place each letter into later

  word.each_char do |letter|
    if alphabet.include?(letter.downcase)
      # find where the orignal letter's index should be
      letter_idx = alphabet.find_index(letter.downcase)

      # if the original letter was lower case, the shifted letter straight
      # in; otherwise, we capitalize the shifted letter and place it in

      letter == letter.downcase ? encoded.push(shifted_alphabet[letter_idx]) :
                  encoded.push(shifted_alphabet[letter_idx].upcase)
      else
        encoded.push(letter)
    end
  end

  encoded.join("")
end

def caesar_shift(phrase, shift)

  encoded = []

  words = phrase.split(" ")
  words.each_with_index do |word, idx|
    encoded.push(encode_word(word, shift))
  end

  encoded.join(" ")



end
# all successful
# p caesar_shift("abcd", 1) # => "bcde"
# p caesar_shift("abc def", 1) # => "bcd efg"
# p caesar_shift("z", 1) # => "a"
# p caesar_shift("hyphenated-woRd! and SpaCEs", 1)
