bubbleSort = (arr) => {
  var swapped;
  console.log("unsorted array", arr)
  do{
    swapped = false;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > arr[i + 1]){
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true
      }
    }
  }while(swapped)
}

var arr = [47, 4, 8, 1, 89, 45, 21, 68, 753, 658, 145, 12, 259, 5]

bubbleSort(arr);
console.log("sorted array", arr)