#include <stdio.h>
#include <assert.h>
#include <stdbool.h>

bool isPalindrome(int n)
{
    if (n < 0)
    {
        return false;
    }

    unsigned int reversed = 0, remainder, original;
    original = n;

    // reversed integer is stored in reversed variable
    while (n != 0)
    {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n /= 10;
    }

    // palindrome if orignal and reversed are equal
    if (original == reversed)
        return true;
    else
        return false;
}

int main()
{
    assert(isPalindrome(121) == true);
    assert(isPalindrome(-121) == false);
    assert(isPalindrome(120000021) == true);
    assert(isPalindrome(10) == false);

    return 0;
}