package algorithms

import (
	"reflect"
	"testing"

	s "github.com/berkslv/algorithms/structures"
)

type TestCase struct {
	root      *TreeNode
	targetSum int
	expected  bool
}

var TestCases = []TestCase{
	{s.NewTreeNode(5, s.NewTreeNode(4, s.NewTreeNode(11, s.NewTreeNode(7, nil, nil), s.NewTreeNode(2, nil, nil)), nil), s.NewTreeNode(8, s.NewTreeNode(13, nil, nil), s.NewTreeNode(4, nil, s.NewTreeNode(1, nil, nil)))), 22, true},
	{s.NewTreeNode(1, s.NewTreeNode(4, nil, nil), nil), 1, false},
}

func Test_hasPathSum(t *testing.T) {

	for _, test := range TestCases {
		if output := hasPathSum(test.root, test.targetSum); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
