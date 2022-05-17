package leetcode

import (
	"reflect"
	"testing"
)

type TestCase struct {
	s        string
	t        string
	expected bool
}

var TestCases = []TestCase{
	{"anagram", "nagaram", true},
	{"car", "rat", false},
	{"ac", "bb", false},
	{"fe", "ja", false},
}

func Test_isAnagram(t *testing.T) {

	for _, test := range TestCases {
		if output := isAnagram(test.s, test.t); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
