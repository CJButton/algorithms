class BinaryMinHeap

  # default proc if one is not supplied
  def initialize(&prc)
    @store = []
    @prc = prc
  end

  def count
    @store.length
  end

  def extract
    raise "no element to extract" if count == 0

    @store[0], @store[count - 1] = @store[count - 1], @store[0]
    extracted = @store.pop
    BinaryMinHeap.heapify_down(@store, 0, &prc)

  end

  def peek

  end

  def push(val)
    @store << val

    self.class.heapify_up(@store,
    @store.length - 1, @store.length, &prc)
  end

  protected
  attr_accessor :prc, :store

  public
  def self.child_indices(len, parent_index)
    left = (parent_index * 2) + 1
    right = (parent_index * 2) + 2
    [left, right].select {|idx| idx < len}
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |a, b| a <=> b }

    left, right = child_indices(len, parent_idx)
    children = []
    children.push(array[left]) if left
    children.push(array[right]) if right

    # if all of the child nodes are less than the parent, then we
    # are in the right spot, and should return the array
    if children.all? {|node| prc.call(array[parent_idx], node) <= 0}
      return array
    end

    # we want to swap with the smaller child node (if it exists)
    # but leave the option for a proc if supplied
    swap_idx = nil
    if children.length == 1
      swap_idx = left
    else
      swap_idx = prc.call(children[0], children[1]) == -1 ? left : right
    end

    array[parent_idx], array[swap_idx] = array[swap_idx], array[parent_idx]

    heapify_down(array, swap_idx, len, &prc)
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new { |a, b| a <=> b }

    return array if child_idx == 0

    parent_idx = parent_index(child_idx)

    if prc.call(array[parent_idx], array[child_idx]) == 1
      array[parent_idx], array[child_idx] = array[child_idx], array[parent_idx]
      heapify_up(array, parent_idx, len, &prc)
    else
      array
    end

  end
end
