package leetcode

import (
	"log"
	"regexp"
	"strings"
)

func isPalindrome(x string) bool {

	reg, err := regexp.Compile("[^a-zA-Z0-9]")
	if err != nil {
		log.Fatal(err)
	}

	text := reg.ReplaceAllString(strings.ToLower(x), "")

	length := len(text)

	if length <= 0 {
		return true
	}

	for i := 0; i <= length/2; i++ {
		if text[i] != text[length-1-i] {
			return false
		}
	}

	return true
}
