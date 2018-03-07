function distanceTreeD(inputInfo){
    let offsetX = Number(inputInfo[0]) - Number(inputInfo[3]);
    let offsetY = Number(inputInfo[1]) - Number(inputInfo[4]);
    let offsetZ = Number(inputInfo[2]) - Number(inputInfo[5]);

    console.log(Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2) + Math.pow(offsetZ, 2)));

}

distanceTreeD([3.5, 0, 1, 0, 2, -1]);