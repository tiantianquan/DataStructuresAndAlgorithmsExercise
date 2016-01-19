def selectSort(arr):
    arrlength = len(arr)
    for startIndex in range(0, arrlength):
        for i in range(startIndex, arrlength):
            if i == startIndex:
                minItem = arr[i]
                minItemIndex = i
            elif arr[i] < minItem:
                minItem = arr[i]
                minItemIndex = i
        arr[minItemIndex] = arr[startIndex]
        arr[startIndex] = minItem
    return arr
