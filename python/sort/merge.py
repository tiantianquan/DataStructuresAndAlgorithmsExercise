def mergeSort(arr):
    def merge(left, right):
        result = []
        while(len(left) != 0 and len(right) != 0):
            if left[0] > right[0]:
                result.append(right[0])
                right.pop(0)
            else:
                result.append(left[0])
                left.pop(0)
        if len(left) != 0:
            result[len(result):] = left
        if len(right) != 0:
            result[len(result):] = right
        return result

    length = len(arr)
    if length < 2:
        return arr

    midIndex = int(length / 2)
    leftArr = arr[0:midIndex]
    rightArr = arr[midIndex:]

    return merge(mergeSort(leftArr), mergeSort(rightArr))
