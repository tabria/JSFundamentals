function radar(input){
    let speed = Number(input[0]);
    let area = input[1].toLowerCase();
    let speedRadar = {motorway:130, interstate:90, city:50, residential:20};

    console.log(speedAlert(speed, speedRadar[area]));


    function speedAlert(speed, speedLimit){
        let overSpeed = speed - speedLimit;
        if (overSpeed <=0){
            return "";
        }else if (overSpeed <= 20) {
            return "speeding"
        } else if (overSpeed <=40 ){
            return "excessive speeding";
        } else {
            return  "reckless driving";
        }
    }
}


radar([151, "motorway"]);