/*
    Source: https://leetcode.com/problems/evaluate-reverse-polish-notation
    Runtime: 138 ms, faster than 32.89% of C# online submissions for Evaluate Reverse Polish Notation.
    Memory Usage: 38.6 MB, less than 59.09% of C# online submissions for Evaluate Reverse Polish Notation.
    Author: berkslv
    Date: 15/06/2022
*/
namespace Algorithms
{
    public class Solution150
    {
        public int EvalRPN(string[] tokens)
        {
            Stack<int> stack = new Stack<int>();

            for (int i = 0; i < tokens.Length; i++)
            {
                string s = tokens[i];
                int num = 0;
                if (!int.TryParse(s, out num))
                {
                    int secondOperand = stack.Pop();
                    int firstOperand = stack.Pop();
                    int result = 0;

                    if (tokens[i] == "+")
                    {
                        result = firstOperand + secondOperand;
                    }
                    else if (tokens[i] == "-")
                    {
                        result = firstOperand - secondOperand;
                    }
                    else if (tokens[i] == "*")
                    {
                        result = firstOperand * secondOperand;
                    }
                    else
                    {
                        result = firstOperand / secondOperand;
                    }
                    stack.Push (result);
                }
                else
                {
                    stack.Push (num);
                }
            }
            return stack.Pop();
        }
    }
}
