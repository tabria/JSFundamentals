function inchConverter(inches){
    const inchesInFeet = 12;
    let feet = Math.floor(Number(inches)/inchesInFeet);
    let inchesRemaining = Number(inches) % inchesInFeet;

    console.log(feet + "\'-" + inchesRemaining + "\"");
}

inchConverter(36);