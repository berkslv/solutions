package algorithms

import (
	"reflect"
)

func isAnagram(s string, t string) bool {

	sMap := make(map[rune]int)

	for _, x := range s {
		sMap[x] += int(x)
	}

	tMap := make(map[rune]int)

	for _, x := range t {
		tMap[x] += int(x)
	}

	return reflect.DeepEqual(sMap, tMap)
}
