package leetcode

import (
	"reflect"
	"testing"

	"github.com/berkslv/algorithms/structures"
)

type TestCase struct {
	l1       *ListNode
	l2       *ListNode
	expected *ListNode
}

var TestCases = []TestCase{
	{structures.NewListNode(2, structures.NewListNode(4, structures.NewListNode(3, nil))), structures.NewListNode(5, structures.NewListNode(6, structures.NewListNode(4, nil))), structures.NewListNode(7, structures.NewListNode(0, structures.NewListNode(8, nil)))},
}

func Test_addTwoNumbers(t *testing.T) {

	for _, test := range TestCases {
		if output := addTwoNumbers(test.l1, test.l2); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Output %v not equal to expected %v", output, test.expected)
		}
	}

}
