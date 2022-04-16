package leetcode

import (
	"reflect"
	"testing"
)

type TestCase struct {
	numbers  []int
	target   int
	expected []int
}

var TestCases = []TestCase{
	{[]int{2, 7, 11, 15}, 9, []int{1, 2}},
}

func Test_twoSum(t *testing.T) {

	for _, test := range TestCases {
		if output := twoSum(test.numbers, test.target); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
