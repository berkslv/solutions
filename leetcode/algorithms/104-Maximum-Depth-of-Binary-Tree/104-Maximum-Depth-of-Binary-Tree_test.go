package algorithms

import (
	"reflect"
	"testing"

	"github.com/berkslv/solutions/structures"
)

type TestCase struct {
	root     *TreeNode
	expected int
}

var TestCases = []TestCase{
	{structures.NewTreeNode(3, structures.NewTreeNode(9, nil, nil), structures.NewTreeNode(20, structures.NewTreeNode(15, nil, nil), structures.NewTreeNode(7, nil, nil))), 3},
	{structures.NewTreeNode(1, nil, structures.NewTreeNode(2, nil, nil)), 2},
}

func Test_maxDepth(t *testing.T) {

	for _, test := range TestCases {
		if output := maxDepth(test.root); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v for %v", output, test.expected, test.root)
		}
	}

}
