package algorithms

import (
	"reflect"
	"testing"
)

type TestCase struct {
	matrix   []string
	expected int
}

var TestCases = []TestCase{
	{[]string{"2", "1", "+", "3", "*"}, 9},
	{[]string{"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"}, 22},
}

func Test_evalRPN(t *testing.T) {

	for _, test := range TestCases {
		if output := evalRPN(test.matrix); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
