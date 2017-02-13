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
    left = pivot - start
    right =  pivot + 1


    # return array if length < 2
    #
    # pivot_idx = partition(array, start, length, &prc)
    #
    # left_length = pivot_idx - start
    # right_length = length - (left_length + 1)
    # sort2!(array, start, left_length, &prc)
    # sort2!(array, pivot_idx + 1, right_length, &prc)


    # I sense this is really not an ideal solution
    # too many comparisons are getting made, although
    # it does work

    # swap = true
    # until swap == false
    #   swap = false
    #
    #   (start).upto(array.length - 2) do |i|
    #     if array[i] > array[i + 1]
    #       swap = true
    #       QuickSort.partition(array, i, length, &prc)
    #     end
    #   end
    # end
    # array

  end

  def self.partition(array, start, length, &prc)
    p "initial #{array}"
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
    p "swapped #{array}"
    puts
    pivot
  end










end
