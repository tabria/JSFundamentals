function compound(inputInfo){

    const monthsInYear = 12;
    let interestAsFraction = Number(inputInfo[1])/100;
    let compoundFrequency = monthsInYear/Number(inputInfo[2]);

    console.log((Number(inputInfo[0] * Math.pow((1 + (interestAsFraction / compoundFrequency)), compoundFrequency * Number(inputInfo[3])))).toFixed(2));
}

compound([100000, 5, 12, 25]);