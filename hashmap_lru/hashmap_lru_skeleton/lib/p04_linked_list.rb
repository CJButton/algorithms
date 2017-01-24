class Link
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end
end

class LinkedList
  include Enumerable

  def initialize
    @head = Link.new
    @tail = Link.new
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
  end

  def last
  end

  def empty?
  end

  def get(key)
    node = @head
    loop do
      if node.key == key
        return node.val
      elsif node.next.nil?
        return nil
      else
        node = node.next
      end
    end
  end

  def include?(key)
    node = @head

    loop do
      if node.key == key
        return true
      end

      return false if node.next.nil?
      node = node.next

    end

  end

  # we will insert at the end of the list
  def insert(key, val)
    if @head.key.nil?
       head_node = Link.new(key, val)
       @head = head_node
    elsif @tail.key.nil?
      tail_node = Link.new(key,val)
      @head.next = tail_node
      tail_node.prev = @head
      @tail = tail_node
    else
      new_node = Link.new(key, val)
      @tail.next = new_node
      new_node.prev = @tail
      @tail = new_node
    end
  end

  # similar to #get; if object is head/tail, we'll need to reassign
  # messy; refactor later
  def remove(key)
    node = @head

    loop do
      if node.nil?
        return nil
      elsif @head.next.nil?
        return @head.key = nil, @head.val = nil
      elsif node.key == key && node != @head
        node.next.prev = node.prev
      elsif node.key == key && node == @head
        node.next.prev = nil
        @head = node.next
      elsif node.key == key && node == @tail
        node.prev.next = nil
        @tail = node.prev
      end
      node = node.next
    end
  end

  def each
    node = @head
    loop do
      yield node
      node = node.next
      break if node.nil?
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
