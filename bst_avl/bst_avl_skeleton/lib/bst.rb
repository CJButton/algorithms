require 'byebug'


class BSTNode
  attr_accessor :left, :right
  attr_reader :value

  def initialize(value)
    @left = nil
    @right = nil
    @value = value
  end
end

class BinarySearchTree
  def initialize
    @root = nil
  end

  def insert(value)
    @root.nil? ? @root = BSTNode.new(value) :
    self.class.insert!(@root, value)
  end

  def find(value)
    BinarySearchTree.find!(@root, value)
  end

  def inorder

  end

  def postorder

  end

  def preorder

  end

  def height
    BinarySearchTree.height!(@root)
  end

  def min
  end

  def max
  end

  def delete(value)
    @root = BinarySearchTree.delete!(@root, value)
  end

  def self.insert!(node, value)
    return BSTNode.new(value) if node.nil?

    if value <= node.value
      node.left = BinarySearchTree.insert!(node.left, value)
    else
      node.right = BinarySearchTree.insert!(node.right, value)
    end

    node

  end

  def self.find!(node, value)
    return nil if node.nil?
    return node if node.value == value

    value < node.value ?
    BinarySearchTree.find!(node.left, value) :
    BinarySearchTree.find!(node.right, value)

  end

  def self.preorder!(node)

  end

  def self.inorder!(node)
    return [] unless node

    arr = []
    arr += BinarySearchTree.inorder!(node.left) if node.left
    arr << node.value
    arr += BinarySearchTree.inorder!(node.right) if node.right

    arr

  end

  def self.postorder!(node)

  end

  def self.height!(node)
    return -1 if node.nil?
    return 0 if node.left.nil? && node.right.nil?

    min_height = 0
    max_height = 0

    loop_node = node

    unless node.left.nil?
      loop do
        break if loop_node.left.nil?
        min_height += 1
        loop_node = loop_node.left
      end
    end

    unless node.right.nil?
      loop do
        break if loop_node.right.nil?
        max_height += 1
        loop_node = loop_node.right
      end
    end

    [min_height, max_height].max
  end

  def self.max(node)
    return nil if node.nil?
    return node if node.right.nil?

    BinarySearchTree.max(node.right)
  end

  def self.min(node)
    return nil if node.nil?
    return node if node.left.nil?

    BinarySearchTree.min(node.left)
  end

  def self.delete_min!(node)
    return nil unless node
    return node.right unless node.left

    node.left = BinarySearchTree.delete_min!(node.left)
    node
    # return nil if node.nil?


    # parent_node = nil
    # min_node = node
    #
    # unless node.left.nil?
    #   loop do
    #     parent_node = min_node
    #     min_node = node.left
    #     break if min_node.left.nil?
    #   end
    # end
    #
    # unless min_node.right.nil?
    #   parent_node.left = min_node.right
    # end

  end

  def self.find_parent(node, value)

    loop do
      unless node.left.nil?
        return [node, node.left] if node.left.value == value

        if value <= node.value
          node = node.left
        end
      end

      unless node.right.nil?
        return [node, node.right] if node.right.value == value

        if value > node.value
          node = node.right
        end
      end
    end

  end

  def self.delete!(node, value)
    return nil if node.nil?
    return node = nil if node.value == value
    # we need to keep track of the parent node
    parent, child = BinarySearchTree.find_parent(node, value)
    # 3 cases:
    # 1. no children
    if child.right.nil? && child.left.nil?
      return parent.left == child ?
              parent.left = nil : parent.right = nil
    end

    min_el = BinarySearchTree.min(child)
    min_el_parent = BinarySearchTree.find_parent(min_el, min_el.value)

    if parent.left == child
      # 2. one child
      if (child.right.nil? && !child.left.nil?)
        parent.left = child.left
      elsif (!child.right.nil? && child.left.nil?)
        parent.left = child.right
      # 3. two children!
      elsif !child.right.nil? && !child.left.nil?
        min_el.left, min_el.right = child.left, child.right

        parent.left = min_el

        min_el_parent.left == min_el ?
          min_el_parent.left = nil :
          min_el_parent.right = nil
      end

    elsif parent.right == child
      # 2. one child
      if (!child.right.nil? && child.left.nil?)
        parent.right = child.right
      elsif (child.right.nil? && !child.left.nil?)
        parent.right = child.left
      # 3. two children!
      elsif !child.right.nil? && !child.left.nil?
        min_el.left, min_el.right = child.left, child.right

        parent.right = min_el

        min_el_parent.left == min_el ?
          min_el_parent.left = nil :
          min_el_parent.right = nil
      end
    end

  end















end
