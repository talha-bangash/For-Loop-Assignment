let arr = [5,76,1,56,180,80];

let high = arr[0];
let low = arr[0];


for(let i = 0; i < arr.length; i++){
    if(arr[i] > high){
        high = arr[i]; 
    }
    if(arr[i] < low){
        low = arr[i];
    }
}

console.log(high);
console.log(low);