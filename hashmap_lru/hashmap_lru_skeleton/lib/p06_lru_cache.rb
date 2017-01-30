require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  attr_reader :count

  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  # @map[key] is an alias for #get in hash_map
  def get(key)
    if @map[key]
      link = @map[key]
      update_link!(link)
      link.val
    else
      calc!(key)
    end

  end

  def to_s
    "Map: " + @map.to_s + "\n" + "Store: " + @store.to_s
  end

  private

  def calc!(key)
    val = @prc.call(key)
    link = @store.insert(key, val)
    @map[key] = link
    # suggested helper method; insert an (un-cached) key
    eject! if count > @max

    val
  end

  def update_link!(link)
    # suggested helper method; move a link to the end of the list
  end

  def eject!
    @store[0].next.prev = nil
    @map.delete(@store[0].key)
    nil
  end
end
