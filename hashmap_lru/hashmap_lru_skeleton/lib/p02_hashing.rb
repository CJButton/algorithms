class Fixnum
  # Fixnum#hash already implemented for you
end

class Array

  def hash
    total = 0
    self.each_with_index do |el, i|
      total += el.hash ^ i.hash
    end
    total
  end


  # def hash
  #   self.each_with_index.inject(0) do |intermediate_hash, (el, i)|
  #     (el.hash + i.hash) ^ intermediate_hash
  #   end
  # end
end

class String
  def hash
    arrayed_hash = []
    self.each_char.with_index do |el, i|
      arrayed_hash.push(el.ord.hash ^ i.hash)
    end
    arrayed_hash.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    self.to_a.sort.hash
  end
end
