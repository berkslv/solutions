package algorithms

import (
	"reflect"
	"testing"
)

type TestCase struct {
	prices   []int
	expected bool
}

var TestCases = []TestCase{
	{[]int{1, 2, 3, 1}, true},
	{[]int{1, 2, 3, 4}, false},
	{[]int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}, true},
}

func Test_containsDuplicate(t *testing.T) {

	for _, test := range TestCases {
		if output := containsDuplicate(test.prices); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
