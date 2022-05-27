package algorithms

import (
	"reflect"
	"testing"
)

type TestCase struct {
	prices   []int
	expected int
}

var TestCases = []TestCase{
	{[]int{7, 1, 5, 3, 6, 4}, 5},
}

func Test_maxProfit(t *testing.T) {

	for _, test := range TestCases {
		if output := maxProfit(test.prices); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
