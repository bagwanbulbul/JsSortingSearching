function linearsearch(arr, num){
    for(var i=0; i<arr.length; i++){
        if(arr[i] == num){
            return i
        }
    }return null
}
console.log(linearsearch([1,2,3,4,5],4))
