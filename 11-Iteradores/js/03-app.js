//FIZZ BUZZ
for(let i=1; i <= 100; i++){
    if(i % 15 === 0){
        console.log(`${i} FIZZ BUZZ`);
        continue;
    }
    if(i % 5 === 0){
        console.log(`${i} BUZZ`);
        continue;
    }
    if(i % 3 === 0){
        console.log(`${i} FIZZ`);
        continue;
    }
}