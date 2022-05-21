package leetcode

import (
	"reflect"
	"testing"

	"github.com/berkslv/algorithms/structures"
)

type TestCase struct {
	p        *TreeNode
	q        *TreeNode
	expected bool
}

var TestCases = []TestCase{
	// p = [1,2,3], q = [1,2,3], true
	{structures.NewTreeNode(1, structures.NewTreeNode(2, nil, nil), structures.NewTreeNode(3, nil, nil)), structures.NewTreeNode(1, structures.NewTreeNode(2, nil, nil), structures.NewTreeNode(3, nil, nil)), true},
	// p = [1,2,1], q = [1,1,2], false
	{structures.NewTreeNode(1, structures.NewTreeNode(2, nil, nil), structures.NewTreeNode(1, nil, nil)), structures.NewTreeNode(1, structures.NewTreeNode(1, nil, nil), structures.NewTreeNode(2, nil, nil)), false},
}

func Test_isSameTree(t *testing.T) {

	for _, test := range TestCases {
		if output := isSameTree(test.p, test.q); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
