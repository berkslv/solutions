package algorithms

import (
	"reflect"
	"testing"
)

type TestCase struct {
	nums     []int
	target   int
	expected int
}

var TestCases = []TestCase{
	{[]int{-1, 0, 3, 5, 9, 12}, 9, 4},
	{[]int{-1, 0, 3, 5, 9, 12}, 2, -1},
}

func Test_search(t *testing.T) {

	for _, test := range TestCases {
		if output := search(test.nums, test.target); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
