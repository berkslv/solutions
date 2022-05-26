package algorithms

import (
	"reflect"
	"testing"
)

type TestCase struct {
	x        int
	expected bool
}

var TestCases = []TestCase{
	{121, true},
	{-121, false},
	{10, false},
	{1000001, true},
}

func Test_isPalindrome(t *testing.T) {

	for _, test := range TestCases {
		if output := isPalindrome(test.x); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
