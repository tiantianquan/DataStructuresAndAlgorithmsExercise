def insertSort(arr):
    startIndex = 1
    arrlength = len(arr)
    for startIndex in range(0, arrlength):
        for j in reversed(range(0, startIndex)):
            if arr[startIndex] > arr[j]:
                delItem = arr.pop(startIndex)
                arr.insert(j + 1, delItem)
                break
            elif j == 0:
                delItem = arr.pop(startIndex)
                arr.insert(0, delItem)

    return arr
