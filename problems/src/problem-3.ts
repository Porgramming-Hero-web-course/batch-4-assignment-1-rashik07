const countWordOccurrences=(sentence: string, word: string): number =>{  
    const lowerCaseSentence = sentence.toLowerCase();  
    const lowerCaseWord = word.toLowerCase();  

    const words = lowerCaseSentence.split(' ');  

    let count = 0;  
    for (const w of words) {  
        if (w === lowerCaseWord) {  
            count++;  
        }  
    }  

    return count;  
}  

const result = countWordOccurrences("I love typescript", "typescript");  
console.log(result); 
