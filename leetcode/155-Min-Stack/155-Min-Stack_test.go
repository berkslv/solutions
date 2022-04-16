package leetcode

import (
	"testing"
)

func Test_evalRPN(t *testing.T) {

	minStack := Constructor()

	if minStack.Push(-2); minStack.elements[0] != -2 {
		t.Errorf("Output %v not equal to expected %v", minStack.elements, -2)
	}

	if minStack.Push(0); minStack.elements[1] != 0 {
		t.Errorf("Output %v not equal to expected %v", minStack.elements, 0)
	}

	if minStack.Push(-3); minStack.elements[2] != -3 {
		t.Errorf("Output %v not equal to expected %v", minStack.elements, -3)
	}

	if output := minStack.GetMin(); output != -3 {
		t.Errorf("Output %v not equal to expected %v", minStack.elements, -3)
	}

	if minStack.Pop(); minStack.elements[1] != 0 {
		t.Errorf("Output %v not equal to expected %v", minStack.elements, 0)
	}

	if output := minStack.Top(); output != 0 {
		t.Errorf("Output %v not equal to expected %v", minStack.elements, 0)
	}

	if output := minStack.GetMin(); output != -2 {
		t.Errorf("Output %v not equal to expected %v", minStack.elements, -2)
	}

}
