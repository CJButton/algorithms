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
  end

  def peek
  end

  def push(val)
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
    prc ||= Proc.new {|a, b| (a <=> b) }

    children = BinaryMinHeap.child_indices(len, idx)

    # array.each_with_index do |parent, idx1|
    #   children = BinaryMinHeap.child_indices(len, idx1)
    #
    #   return array if children.empty?
    #   children.each do |idx2|
    #     if array[idx1] > array[idx2]
    #       array[idx1], array[idx2] = array[idx2], array[idx1]
    #       break
    #     end
    #   end
    # end

  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new {|a, b| -1 * (a <=> b) }

    array.each_with_index do |parent, idx1|
      children = BinaryMinHeap.child_indices(len, idx1)

      return array if children.empty?
      children.each do |idx2|
        if array[idx1] > array[idx2]
          array[idx1], array[idx2] = array[idx2], array[idx1]
          break
        end
      end
    end

  end
end
