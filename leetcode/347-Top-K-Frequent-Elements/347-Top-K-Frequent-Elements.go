package leetcode

import (
	"sort"
)

func topKFrequent(nums []int, k int) []int {

	// count frequency
	firstMap := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		firstMap[nums[i]] += 1
	}

	// add repetitions to a map data structure that uses a key as the repetition count
	hashMap := make(map[int][]int)

	for key, value := range firstMap {
		hashMap[value] = append(hashMap[value], key)
	}

	// get keys for sorting
	var keys []int
	for key := range hashMap {
		keys = append(keys, key)
	}

	// sort keys in desceding order
	sort.Sort(sort.Reverse(sort.IntSlice(keys)))

	// create result with capacity of k and length of 0
	result := make([]int, 0, k)

	// get results from hashmap with k count
	for _, key := range keys {
		if len(result) < k {
			for _, v := range hashMap[key] {
				result = append(result, v)
			}
		}
	}

	return result
}
