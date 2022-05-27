package algorithms

import (
	"reflect"
	"testing"

	"github.com/berkslv/solutions/structures"
)

type TestCase struct {
	root     *TreeNode
	expected bool
}

var TestCases = []TestCase{
	{structures.NewTreeNode(1, structures.NewTreeNode(2, structures.NewTreeNode(3, nil, nil), structures.NewTreeNode(4, nil, nil)), structures.NewTreeNode(2, structures.NewTreeNode(4, nil, nil), structures.NewTreeNode(3, nil, nil))), true},
}

func Test_isSymmetric(t *testing.T) {

	for _, test := range TestCases {
		if output := isSymmetric(test.root); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
