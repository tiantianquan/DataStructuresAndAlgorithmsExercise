import unittest
import time
import random
from sort import *

# testData = [3, 44, 38, 5, 47, 15,
#             36, 26, 27, 2, 46, 4, 19, 50, 48]
testData = []
for i in range(10000):
    testData.append(random.random() * 10000)
exceptData = testData[:]
exceptData.sort()


class SortTest(unittest.TestCase):

    def setUp(self):
        self.startTime = time.time()

    def tearDown(self):
        t = time.time() - self.startTime
        print "%s: %.3f" % (self.id(), t)

    def test_bubble(self):
        self.assertEqual(exceptData, bubbleSort(testData[:]))

    def test_select(self):
        self.assertEqual(exceptData, selectSort(testData[:]))

    def test_insert(self):
        self.assertEqual(exceptData, insertSort(testData[:]))

    def test_merge(self):
        self.assertEqual(exceptData, mergeSort(testData[:]))

    def test_quick(self):
        self.assertEqual(exceptData, quickSort(testData[:]))


if __name__ == '__main__':
    unittest.main()
