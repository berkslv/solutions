package algorithms

import (
	"reflect"
	"testing"
)

type TestCase struct {
	x        string
	expected int
}

var TestCases = []TestCase{
	{"III", 3},
	{"LVIII", 58},
}

func Test_romanToInt(t *testing.T) {

	for _, test := range TestCases {
		if output := romanToInt(test.x); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
