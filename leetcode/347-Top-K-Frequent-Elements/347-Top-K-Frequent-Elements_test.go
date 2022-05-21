package leetcode

import (
	"reflect"
	"testing"
)

type TestCase struct {
	nums     []int
	k        int
	expected []int
}

var TestCases = []TestCase{
	{[]int{1, 1, 1, 2, 2, 3}, 2, []int{1, 2}},
	{[]int{1}, 1, []int{1}},
	{[]int{1, 2}, 2, []int{1, 2}},
	{[]int{3, 0, 1, 0}, 1, []int{0}},
	{[]int{4, 1, -1, 2, -1, 2, 3}, 2, []int{-1, 2}},
}

func Test_topKFrequent(t *testing.T) {

	for _, test := range TestCases {
		if output := topKFrequent(test.nums, test.k); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v, orders is not important!", output, test.expected)
		}
	}

}
