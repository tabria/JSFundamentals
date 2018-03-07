function countEqualNeighbors(input){
    let count = 0;

    for(let i=0; i<input.length; i++){
        for(let k=0; k<input[i].length; k++){
         if (input[i][k+1] && input[i][k] == input[i][k+1]){
             count++;
         }
         if ( input[i+1] && input[i][k] == input[i+1][k]){
             count++;
         }
        }
    }
    console.log(count);
}

countEqualNeighbors([[2,3,4,7,0],[4,0,5,3,4],[2,3,5,4,2],[9,8,7,5,4]]);
//countEqualNeighbors([[2,2,5,7,4],[4,0,5,3,4],[2,5,5,4,2]]);