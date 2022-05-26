package algorithms

import (
	"reflect"
	"testing"
)

type TestCase struct {
	nums     []int
	target   int
	expected []int
}

var TestCases = []TestCase{
	{[]int{2, 7, 11, 15}, 9, []int{0, 1}},
	{[]int{2, 7, 11, 15}, 18, []int{1, 2}},
	{[]int{1, 2}, 3, []int{0, 1}},
}

func Test_twoSum(t *testing.T) {

	for _, test := range TestCases {
		if output := twoSum(test.nums, test.target); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
