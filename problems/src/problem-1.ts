const sumArray=(numbers:number[]):number=>{
    let  sum=0;
    numbers.map(num=>sum=sum+num);

    return sum;


}

console.log(sumArray([1,2,3,4,5]))