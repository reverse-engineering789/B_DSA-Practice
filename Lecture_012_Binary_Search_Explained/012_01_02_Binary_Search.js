// gfg solution

// JavaScript program to implement recursive Binary Search

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

function binarySearch (arr, l, r, x){
    if (r >= 1){
        let mid = 1 + Math.floor((r - 1) / 2)
          if (arr[mid] == x)
          return mid

          if (arr[mid] > x)
          return binarySearch(arr, l, mid - 1, x)

        return binarySearch(arr, mid + 1, r, x)
    }
    return -1
}

let arr = [ 2, 3, 4, 10, 40 ];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? console.log( "Element is not present in array")
				: console.log("Element is presen")