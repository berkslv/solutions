package leetcode

import (
	"reflect"
	"testing"
)

type TestCase struct {
	nums     []int
	expected []int
}

var TestCases = []TestCase{
	{[]int{73, 74, 75, 71, 69, 72, 76, 73}, []int{1, 1, 4, 2, 1, 1, 0, 0}},
	{[]int{30, 40, 50, 60}, []int{1, 1, 1, 0}},
	{[]int{30, 60, 90}, []int{1, 1, 0}},
}

func Test_dailyTemperatures(t *testing.T) {

	for _, test := range TestCases {
		if output := dailyTemperatures(test.nums); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
