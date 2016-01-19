def quickSort(arr, random=False):
    def merge(left, right, mid):
        # left.extend(mid)
        # left.extend(right)
        left[len(left):] = mid
        left[len(left):] = right
        return left

    length = len(arr)

    if length < 2:
        return arr

    if random:
        start = arr[0]
        mid = arr[int(length / 2)]
        end = arr[length - 1]
        if start > mid:
            if start > end:
                pivot = mid if mid > end else end
            else:
                pivot = start
        elif start <= mid:
            if start < end:
                pivot = end if mid > end else mid
            else:
                pivot = start
    else:
        pivot = arr[0]

    leftArr = []
    rightArr = []
    midArr = []
    for i in range(0, length):
        if arr[i] < pivot:
            leftArr.append(arr[i])
        if arr[i] > pivot:
            rightArr.append(arr[i])
        elif arr[i] == pivot:
            midArr.append(arr[i])

    return merge(quickSort(leftArr), quickSort(rightArr), midArr)
