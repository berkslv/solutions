/*
    Source: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
    Runtime: 471 ms, faster than 6.08% of C# online submissions for Best Time to Buy and Sell Stock.
    Memory Usage: 46.9 MB, less than 69.48% of C# online submissions for Best Time to Buy and Sell Stock.
    Author: berkslv
    Date: 15/06/2022
*/
namespace Algorithms
{
    public class Solution121
    {
        public int MaxProfit(int[] prices)
        {
            var minumumPrice = prices[0];
            var maximumPrice = prices[0];
            var indexAfterMinimum = 0;
            var profit = 0;
            for (var i = 1; i < prices.Length; i++)
            {
                if (prices[i] < minumumPrice)
                {
                    minumumPrice = prices[i];
                    indexAfterMinimum = i;
                    maximumPrice = minumumPrice;
                }
                if (i > indexAfterMinimum && maximumPrice < prices[i])
                {
                    maximumPrice = prices[i];
                }
                profit = Math.Max(profit, maximumPrice - minumumPrice);
            }

            return profit;
        }
    }
}
