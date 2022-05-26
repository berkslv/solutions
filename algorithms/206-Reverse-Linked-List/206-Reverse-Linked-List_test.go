package algorithms

import (
	"reflect"
	"testing"

	"github.com/berkslv/algorithms/structures"
)

type TestCase struct {
	head     *ListNode
	expected *ListNode
}

var TestCases = []TestCase{
	{structures.NewListNode(1, structures.NewListNode(2, structures.NewListNode(3, structures.NewListNode(4, nil)))), structures.NewListNode(4, structures.NewListNode(3, structures.NewListNode(2, structures.NewListNode(1, nil))))},
}

func Test_reverseList(t *testing.T) {

	for _, test := range TestCases {
		if output := reverseList(test.head); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", test.head, test.expected)
		}
	}

}
