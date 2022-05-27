package algorithms

import (
	"reflect"
	"testing"
)

type TestCase struct {
	s        string
	expected bool
}

var TestCases = []TestCase{
	{"()", true},
	{"(]", false},
	{"()[]{}", true},
	{"))", false},
	{"[(])", false},
}

func Test_isValid(t *testing.T) {

	for _, test := range TestCases {
		if output := isValid(test.s); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v for %v", output, test.expected, test.s)
		}
	}

}
