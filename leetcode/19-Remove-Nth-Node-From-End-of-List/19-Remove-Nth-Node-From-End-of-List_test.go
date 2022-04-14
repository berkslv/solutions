package leetcode

import (
	"reflect"
	"testing"

	s "github.com/berkslv/algorithms/structures"
)

type TestCase struct {
	head     *ListNode
	n        int
	expected *ListNode
}

var TestCases = []TestCase{
	{s.NewListNode(1, s.NewListNode(2, s.NewListNode(3, s.NewListNode(4, s.NewListNode(5, nil))))), 2, s.NewListNode(1, s.NewListNode(2, s.NewListNode(3, s.NewListNode(5, nil))))},
	{s.NewListNode(1, nil), 1, nil},
	{s.NewListNode(1, s.NewListNode(2, nil)), 1, s.NewListNode(1, nil)},
}

func Test_removeNthFromEnd(t *testing.T) {

	for _, test := range TestCases {
		if output := removeNthFromEnd(test.head, test.n); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
