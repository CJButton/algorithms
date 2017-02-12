class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.empty?

    # pick a pivot (middle is best)
    pivot = array[array.length / 2]
    left = []
    right = []

    # go through each element
    # left if less than pivot, right otherwise
    array.each do |i|
      case prc.call(array[i], pivot)
      when -1
        left << i
      when 0
        next
      when 1
        right << i
      end
    end

    this.class.sort1(left) +
    pivot +
    this.class.sort1(right)

  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    p "initial array is #{array}"
    new_start = QuickSort.partition(array, start, length, &prc)
    p array
    p new_start
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new {|a, b| a <=> b }

    pivot = start
    wall = nil

    (start + 1).upto(array.length - 1) do |idx|
      if array[idx] < array[pivot]
        array[idx], array[pivot] = array[pivot], array[idx]
        pivot = idx

        if wall != nil
          array[wall], array[pivot] = array[pivot], array[wall]
          pivot = wall
          wall += 1
        end
      else
        wall = idx if array[idx] > array[pivot] && wall.nil?
      end
    end
    pivot
  end










end
