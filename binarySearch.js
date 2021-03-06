function binary_Search(arr, num){
    var firstIndex  = 0,
        lastIndex   = arr.length - 1,
        middIndex = Math.floor((lastIndex + firstIndex)/2);

    while(arr[middIndex] != num && firstIndex < lastIndex){
       if (num < arr[middIndex])
        {
            lastIndex = middIndex - 1;
        } 
      else if (num > arr[middIndex])
        {
            firstIndex = middIndex + 1;
        }
        middIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (arr[middIndex] != num) ? -1 : middIndex;
}
var arr = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(arr, 1));   
console.log(binary_Search(arr, 5));
