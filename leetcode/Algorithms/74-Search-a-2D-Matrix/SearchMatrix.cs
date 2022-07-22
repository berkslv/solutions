
/*
    Source: https://leetcode.com/problems/search-a-2d-matrix
    Runtime: 139 ms, faster than 40.88% of C# online submissions for Search a 2D Matrix.
    Memory Usage: 39.6 MB, less than 35.08% of C# online submissions for Search a 2D Matrix.
    Author: berkslv
    Date: 15/06/2022
*/

namespace Algorithms
{
    public class Solution074
    {
        public bool SearchMatrix(int[][] matrix, int target)
        {
            if (matrix.Length == 0) {
                return false;
            }

            int rows = matrix.Length;
            int columns = matrix[0].Length;
            int left = 0;
            int right = rows * columns - 1;

            while (left <= right)
            {
                int middle = left + (right - left) / 2;
                int middlePoint = matrix[middle / columns][middle % columns];

                if (target == middlePoint)
                {
                    return true;
                }
                else if (target < middlePoint)
                {
                    right = middle - 1;
                }
                else if (target > middlePoint)
                {
                    left = middle + 1;
                }
            }

            return false;
        }
    }
}
