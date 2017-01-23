class MaxIntSet
  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    validate!(num)
    @store.push(num)
  end

  def remove(num)
    @store.delete(num)
    validate!(num)
  end

  def include?(num)
    validate!(num)
    @store.include?(num) ? true : false
  end

  private

  def is_valid?(num)
    return true if num < 50 && num > 0
  end

  def validate!(num)
    raise "Out of bounds" unless is_valid?(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store[num] = num
  end

  def remove(num)
    @store[num] = []
  end

  def include?(num)
    @store[num] == num ? true : false
  end

  private

  def [](num)
    @store[num]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    return false if include?(num)
    self[num].push(num)
    @count += 1
    resize! if @count == num_buckets
    num
  end

  def remove(num)
    @store[num].delete(num)
    @count -= 1
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(num_buckets * 2) {Array.new}

    @store.each do |bucket|
      bucket.each do |el|
        new_store[el % new_store.length].push(el)
      end
    end
    @store = new_store
  end
end
