package main

import (
	"fmt"
	"math/rand"
)

type numbers struct {
	data []int
}

func newNumbers(min int, max int) *numbers {
	data := make([]int, 100)
	for i := range data {
		data[i] = randomData(min, max)
	}
	return &numbers{data: data}
}

func randomData(min int, max int) int {
	return rand.Intn(max-min) + min
}

func main() {
	randomNumbers := newNumbers(25, 125)
	randomStr := fmt.Sprintf("Random data %d", randomNumbers.data)
	fmt.Println(randomStr)
}
