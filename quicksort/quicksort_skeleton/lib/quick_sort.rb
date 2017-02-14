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
    return array if length < 2
    # better solution is...
    pivot = partition(array, start, length, &prc)
    # we need to know the smaller, partitioned lengths
    left = pivot - start
    right =  length - (left + 1)
    sort2!(array, start, left, &prc)
    sort2!(array, pivot + 1, right, &prc)
    array
    # return array if length < 2
    #
    # pivot_idx = partition(array, start, length, &prc)
    #
    # left_length = pivot_idx - start
    # right_length = length - (left_length + 1)
    # sort2!(array, start, left_length, &prc)
    # sort2!(array, pivot_idx + 1, right_length, &prc)

  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

   # To reduce probability of pathalogically bad data set, shuffle pivot.
   # new_pivot = start + rand(length)
   # array[start], array[new_pivot] = array[new_pivot], array[start]
   #
  #  pivot_idx = start
  #  pivot = array[start]
   #
  #  ((start + 1)...(start + length)).each do |idx|
  #    if prc.call(pivot, array[idx]) > 0
  #      array[idx], array[pivot_idx + 1] = array[pivot_idx + 1], array[idx]
  #      pivot_idx += 1
  #    end
  #  end
  #  array[start], array[pivot_idx] = array[pivot_idx], array[start]
  #  pivot_idx


    p "initial #{array}"
    prc ||= Proc.new { |a, b| a <=> b }

    pivot = start
    wall = nil

    (start + 1).upto(length + start - 1) do |idx|
      if prc.call(array[idx], array[pivot]) < 1
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
    p "swapped #{array}"
    puts
    pivot
  end










end
