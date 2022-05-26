package algorithms

import (
	"reflect"
	"testing"
)

type TestCase struct {
	strs     []string
	expected [][]string
}

var TestCases = []TestCase{
	{[]string{"eat", "tea", "tan", "ate", "nat", "bat"}, [][]string{{"bat"}, {"nat", "tan"}, {"ate", "eat", "tea"}}},
	{[]string{""}, [][]string{{""}}},
	{[]string{"a"}, [][]string{{"a"}}},
}

// Test is useless because expected sort is vary and that's ok, but our expected array is static
func Test_groupAnagrams(t *testing.T) {

	for _, test := range TestCases {
		if output := groupAnagrams(test.strs); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v for %v", output, test.expected, test.strs)
		}
	}

}
