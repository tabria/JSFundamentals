function JSONConverter(input){
    let [town, latitude, longitude] = input[0].split(/\s*\|\s*/).filter(e=>e!=="");
    let result = [];
    for(let i=1; i<input.length; i++){
        let [city, latitudeCity, longitudeCity] = input[i].split(/\s*\|\s*/).filter(e=> e!=="");
        let cityObj = {};
        cityObj[town] = city;
        cityObj[latitude] = Number(latitudeCity);
        cityObj[longitude] = Number(longitudeCity);
        result.push(cityObj);
    }
    console.log(JSON.stringify(result));
}

JSONConverter(["| Town | Latitude | Longitude |",
"| Sofia | 42.696552 | 23.32601 |",
"| Beijing | 39.913818 | 116.363625 |"]);