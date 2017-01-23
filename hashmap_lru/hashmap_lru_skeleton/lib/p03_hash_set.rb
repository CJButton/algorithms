require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  # return false incase the element already exists in the hashset
  def insert(key)
    return false if include?(key)
    self[key].push(key)
    @count += 1
    resize! if @count == num_buckets
  end

  def include?(key)
    self[key].include?(key) ? true : false
  end

  def remove(key)
    self[key].delete(key)
    @count -= 1
  end

  private

  def [](num)
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(num_buckets * 2) {Array.new}
    @store.each do |bucket|
      bucket.each do |el|
        new_store[el.hash % (num_buckets * 2)].push(el)
      end
    end
    @store = new_store
  end
end
