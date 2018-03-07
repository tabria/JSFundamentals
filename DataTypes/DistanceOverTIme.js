
function calcDistance(inputInfo){
    const meters = 1000;
    const seconds = 3600;

    let speedAMetersPerSecond = (Number(inputInfo[0]) * meters) / seconds;
    let speedBMetersPerSecond = (Number(inputInfo[1]) * meters) / seconds;
    let distanceA = speedAMetersPerSecond * inputInfo[2];
    let distanceB = speedBMetersPerSecond * inputInfo[2];
    console.log(Math.abs(distanceA - distanceB));
}

calcDistance([0, 60 , 3600]);
