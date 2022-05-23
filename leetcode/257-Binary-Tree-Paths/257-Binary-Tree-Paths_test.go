package leetcode

import (
	"reflect"
	"testing"

	s "github.com/berkslv/algorithms/structures"
)

type TestCase struct {
	root     *TreeNode
	expected []string
}

var TestCases = []TestCase{
	{s.NewTreeNode(1, s.NewTreeNode(2, nil, s.NewTreeNode(5, nil, nil)), s.NewTreeNode(3, nil, nil)), []string{"1->2->5", "1->3"}},
}

func Test_binaryTreePaths(t *testing.T) {

	for _, test := range TestCases {
		if output := binaryTreePaths(test.root); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
