// #1

// const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7]
// let controlObj = {}
// let count,
// 	max = 0
// let output = ''
// for (let i = 0; i < arr.length; i++) {
// 	if (controlObj[arr[i]] != true) {
// 		for (let j = i; j < arr.length; j++) {
// 			if (arr[i] == arr[j]) {
// 				count++
// 			}
// 		}
// 		if (count > max) {
// 			max = count
// 			output = arr[i] + ' повторяется ' + count + ' раз'
// 		}
// 		count = 0
// 	}
// 	controlObj[arr[i]] = true
// }
// console.log(output)

// #2

// const arr = [1, 4, 7, 5, 2, 3, 6, 7, 12, 2, 1, 7, 2]
// const removeItem = callback => {
// 	callback(3, arr)
// }

// const deleteNumber = (elem, arr) => {
// 	const num = arr.indexOf(elem)
// 	return arr.splice(num, 1)
// }
// removeItem(deleteNumber)
// console.log(arr)

// #3
// const arr = ['Капуста', 'Репа', 'Редиска', 'Морковка']
// const arr2 = arr.map(item => item.length)
// console.log(arr2)
