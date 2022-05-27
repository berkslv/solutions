package algorithms

import (
	"reflect"
	"testing"

	s "github.com/berkslv/solutions/structures"
)

type TestCase struct {
	root     *TreeNode
	expected bool
}

var TestCases = []TestCase{
	{s.NewTreeNode(1, s.NewTreeNode(9, nil, nil), s.NewTreeNode(20, s.NewTreeNode(15, nil, nil), s.NewTreeNode(7, nil, nil))), true},
	{nil, true},
}

func Test_isBalanced(t *testing.T) {

	for _, test := range TestCases {
		if output := isBalanced(test.root); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
