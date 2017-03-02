


class AVLTreeNode
  attr_accessor :subtrees, :value

  def initialize(value)
    @value = value
    @subtrees = [nil, nil]
  end
end

class AVLTree
  def initialize
    @root = nil
  end

  def insert(value)
    @root = AVLTree.insert!(@root, value)
  end

  def self.insert!(node, value)
    return AVLTreeNode.new(value) unless node

    dir = value < node.value ? 0 : 1

    node.subtrees[dir] = AVLTree.insert!(node.subtrees[dir], value)
    # Fifty lines of dir balancing code

    node
  end

  # root = 3
  # dir = 0
  def self.single_rotation!(root, dir)
    other_dir = dir == 0 ? 1 : 0 # 1
    new_root = root.subtrees[other_dir] # 4

    root.subtrees[other_dir] = new_root.subtrees[dir]
    # assign new_root's (4's) left subtree to root's (3's) right subtree

    new_root.subtrees[dir] = root
    # assign 3 as 4's left subtree

    new_root
  end










  
end
