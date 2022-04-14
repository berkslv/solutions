package leetcode

import (
	"reflect"
	"testing"
)

type TestCase struct {
	x        int
	expected int
}

var TestCases = []TestCase{
	{123, 321},
	{-123, -321},
	{120, 21},
	{1534236469, 0},
}

func Test_reverse(t *testing.T) {

	for _, test := range TestCases {
		if output := reverse(test.x); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
