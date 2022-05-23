export function randomInt(low: number, top: number): number{
    //Not including top
    if(low >= top){
        throw new Error('top must be over than low')
    }
    const randomSeed = Math.random()
    const result = (Number(top) - Number(low)) * randomSeed + Number(low)
    
    return Math.floor(result);
}