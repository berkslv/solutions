package leetcode

import (
	"reflect"
	"testing"
)

type TestCase struct {
	matrix   [][]int
	target   int
	expected bool
}

var TestCases = []TestCase{
	{[][]int{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}}, 3, true},
	{[][]int{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}}, 13, false},
}

func Test_searchMatrix(t *testing.T) {

	for _, test := range TestCases {
		if output := searchMatrix(test.matrix, test.target); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
