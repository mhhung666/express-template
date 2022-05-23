export default function(probabilityList: {[key: string]: number}): string{
    //item => probability
    //choose one in list
    const drawList: {[key: string]: {top: number, bottom: number}} = {}
    let countNumber = 0;

    for (const key in probabilityList) {
        if (Object.prototype.hasOwnProperty.call(probabilityList, key)) {
            const itemNumber = probabilityList[key];
            const itemRange = {
                top: 0,
                bottom: 0
            }
            itemRange.bottom = countNumber;
            countNumber += itemNumber;
            itemRange.top = countNumber;
            drawList[key] = itemRange;
        }
    }

    const randomNumber = countNumber * Math.random();

    for (const key in drawList) {
        if (Object.prototype.hasOwnProperty.call(drawList, key)) {
            const itemRange = drawList[key];
            if(itemRange.top > randomNumber 
                && randomNumber >= itemRange.bottom
            ){
                return key;
            }
        }
    }

    throw new Error("Got a weird error");
}