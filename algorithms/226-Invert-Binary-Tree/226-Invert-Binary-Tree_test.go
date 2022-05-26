package algorithms

import (
	"reflect"
	"testing"

	"github.com/berkslv/algorithms/structures"
)

type TestCase struct {
	prices   *TreeNode
	expected *TreeNode
}

var TestCases = []TestCase{
	{structures.NewTreeNode(2, structures.NewTreeNode(1, nil, nil), structures.NewTreeNode(3, nil, nil)), structures.NewTreeNode(2, structures.NewTreeNode(3, nil, nil), structures.NewTreeNode(1, nil, nil))},
}

func Test_invertTree(t *testing.T) {

	for _, test := range TestCases {
		if output := invertTree(test.prices); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
