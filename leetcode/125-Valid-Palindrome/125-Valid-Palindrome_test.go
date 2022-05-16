package leetcode

import (
	"reflect"
	"testing"
)

type TestCase struct {
	s        string
	expected bool
}

var TestCases = []TestCase{
	{"A man, a plan, a canal: Panama", true},
	{"race a car", false},
	{" ", true},
	{".", true},
}

func Test_isPalindrome(t *testing.T) {

	for _, test := range TestCases {
		if output := isPalindrome(test.s); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
