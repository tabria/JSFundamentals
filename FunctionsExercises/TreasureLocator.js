function treasureLocator(input){
    let tokelau = {minX:8, maxX:9, minY:0, maxY:1, title:"Tokelau"};
    let tuvalu = {minX:1, maxX:3, minY:1, maxY:3, title:"Tuvalu"};
    let samoa = {minX:5, maxX:7, minY:3, maxY:6, title:"Samoa"};
    let tonga = {minX:0, maxX:2, minY:6, maxY:8, title:"Tonga"};
    let cook = {minX:4, maxX:9, minY:7, maxY:8, title:"Cook"};
    let islands = [tokelau, tuvalu, samoa, tonga, cook];

    for(let i=0; i<input.length; i+=2){
        let location = "On the bottom of the ocean";
        for (let k=0; k<islands.length; k++) {
            let island = islands[k];
            if (isInside(Number(input[i]), island.minX, island.maxX) &&
                isInside(Number(input[i+1]), island.minY, island.maxY)) {
                location = `${island.title}`;
                break;
            }
        }
        console.log(location);
    }

    function isInside(value, minBorder, maxBorder){
         return value >= minBorder && value<=maxBorder;
    }
}

treasureLocator([6, 4]);