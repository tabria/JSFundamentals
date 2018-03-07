function manufactureCrystal(input){

    const CUTTING_MATERIAL = 4;
    const LAP_MATERIAL = 0.8;
    const GRIND_MATERIAL = 20;
    const ETCH_MATERIAL = 2;
    const XRAY_MATERIAL = 1;

    let desireThickness = Number(input[0]);

    for(let i=1; i<input.length; i++ ){
        let oreThickness = Number(input[i]);
        let processResult = `Processing chunk ${oreThickness} microns\r\n`;
        let afterProcess = processOre(desireThickness, oreThickness);
        processResult += `${afterProcess[0]}`;
        processResult += `Finished crystal ${Number(afterProcess[1])} microns\r\n`;
        printResult(processResult);
    }

    function processOre(desireThickness, oreThickness ){
        let result ="";
        while(true){
            let isTransportable = true;
            if (oreThickness === desireThickness){
                break;
            }
            let operationResult = [];
            if (oreThickness / CUTTING_MATERIAL >= desireThickness){
                operationResult = cutOre(desireThickness, oreThickness);
            } else if (oreThickness * LAP_MATERIAL >= desireThickness){
                operationResult = lapOre(desireThickness, oreThickness);
            } else if (oreThickness - GRIND_MATERIAL >= desireThickness){
                operationResult = grindOre(desireThickness, oreThickness);
            } else if (oreThickness - ETCH_MATERIAL >= desireThickness -1){
                operationResult = etchOre(desireThickness, oreThickness);
            } else if (oreThickness <= desireThickness - XRAY_MATERIAL ){
                operationResult = xRayOre(oreThickness);
                isTransportable = false;
            }

            oreThickness = Number( operationResult[2]);
            result += `${ operationResult[0]} x${ operationResult[1]}\r\n`;
            if (isTransportable){
                operationResult = transport(oreThickness);
                oreThickness = Number( operationResult[2]);
                result += `${operationResult[0]}\r\n`;
            }
        }
        return [result, oreThickness];
    }

    function transport(oreThickness){
        let counter = 1;
        oreThickness = Math.floor(Number(oreThickness));
        return ["Transporting and washing", counter, oreThickness];
    }

    function xRayOre(oreThickness){
        let counter = 1;
        oreThickness = oreThickness + XRAY_MATERIAL;
        return ["X-ray", counter, oreThickness];
    }

    function etchOre(desireThickness, oreThickness){
        let counter = 0;
        while(true){
            let etch = oreThickness - ETCH_MATERIAL;
            if (desireThickness - (ETCH_MATERIAL - 1) > etch || desireThickness - ETCH_MATERIAL === etch){
                break;
            }
            oreThickness = etch;
            counter++;
        }
        return ["Etch", counter, oreThickness];
    }

    function grindOre(desireThickness, oreThickness){
        let counter = 0;
        while(true){
            let grind = oreThickness - GRIND_MATERIAL;
            if (desireThickness > grind){
                break;
            }
            oreThickness = grind;
            counter++;
        }
        return ["Grind", counter, oreThickness];
    }

    function lapOre(desireThickness, oreThickness){
        let counter = 0;
        while(true){
            let lap = oreThickness * LAP_MATERIAL;
            if (desireThickness > lap){
                break;
            }
            oreThickness = lap;
            counter++;
        }
        return ["Lap", counter, oreThickness];
    }

    function cutOre(desireThickness, oreThickness){
        let counter = 0;
        while(true){
            let cut = oreThickness / CUTTING_MATERIAL;
            if (desireThickness > cut){
                break;
            }
            oreThickness = cut;
            counter++;
        }
        return ["Cut", counter, oreThickness];
    }

    function printResult(str){
        console.log(str.trim());
    }
}

manufactureCrystal([1375, 50000]);