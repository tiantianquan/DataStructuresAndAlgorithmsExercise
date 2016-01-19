import unittest
from sort import *


class SortTest(unittest.TestCase):
    def test_bubble(self):
        testData = [3, 44, 38, 5, 47, 15,
                    36, 26, 27, 2, 46, 4, 19, 50, 48]
        exceptData = testData[:]
        exceptData.sort()
        self.assertEqual(exceptData, bubbleSort(testData[:]))

if __name__ == '__main__':
    unittest.main()
