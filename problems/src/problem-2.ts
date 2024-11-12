const removeDuplicates = (numbers: number[]):number[] => {
    const result: number[] = [];

    numbers.map((num) => {
        if (!result.includes(num)) {
            result.push(num);
        }
    })

    return result;
}


const output = removeDuplicates([1,1,1, 2,5,5, 3, 4, 4, 5])


console.log(output)
