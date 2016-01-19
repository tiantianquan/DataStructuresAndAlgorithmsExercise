def bubbleSort(arr):
    global swapFlag
    swapFlag = True
    lastIndex = len(arr)
    while swapFlag:
        swapFlag = False
        for i in range(0, lastIndex-1):
            if arr[i + 1] < arr[i]:
                tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
                swapFlag = True
        lastIndex = lastIndex - 1
    return arr
