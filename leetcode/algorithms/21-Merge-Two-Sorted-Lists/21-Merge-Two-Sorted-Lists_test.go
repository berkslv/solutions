package algorithms

import (
	"reflect"
	"testing"

	s "github.com/berkslv/solutions/structures"
)

type TestCase struct {
	list1    *ListNode
	list2    *ListNode
	expected *ListNode
}

var TestCases = []TestCase{
	{s.NewListNode(1, s.NewListNode(2, s.NewListNode(4, nil))), s.NewListNode(1, s.NewListNode(3, s.NewListNode(4, nil))), s.NewListNode(1, s.NewListNode(1, s.NewListNode(2, s.NewListNode(3, s.NewListNode(4, s.NewListNode(4, nil))))))},
}

func Test_mergeTwoLists(t *testing.T) {

	for _, test := range TestCases {
		if output := mergeTwoLists(test.list1, test.list2); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
