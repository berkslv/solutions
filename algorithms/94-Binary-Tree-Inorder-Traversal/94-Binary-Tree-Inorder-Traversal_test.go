package algorithms

import (
	"reflect"
	"testing"

	"github.com/berkslv/algorithms/structures"
)

type TestCase struct {
	root     *TreeNode
	expected []int
}

var TestCases = []TestCase{
	// p = [1,2,3], q = [1,2,3], true
	{structures.NewTreeNode(1, nil, structures.NewTreeNode(2, structures.NewTreeNode(3, nil, nil), nil)), []int{1, 3, 2}},
}

func Test_inorderTraversal(t *testing.T) {

	for _, test := range TestCases {
		if output := inorderTraversal(test.root); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
