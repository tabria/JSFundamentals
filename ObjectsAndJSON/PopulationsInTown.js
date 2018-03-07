function countPopulation(input){
    let result = new Map();
    for(let entry of input){
        let [town, population]= entry.split(/\s*<->\s*/).filter(e=>e!==0);
        if (!result.has(town)){
            result.set(town, 0)
        }
        let count = result.get(town);
        result.set(town, Number(count) + Number(population));
    }
    for( let [k, v] of result){
        console.log(`${k} : ${v}`);
    }
}

countPopulation(["Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000"]);