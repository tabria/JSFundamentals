
function rounding(inputInfo){
    let precision = Number(inputInfo[1]) > 15 ? 15 : Number(inputInfo[1]);
    console.log( parseFloat( Number(inputInfo[0]).toFixed(precision) ) );
}

rounding([10.5, 16]);