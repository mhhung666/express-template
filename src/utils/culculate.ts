export function calculateExact(ground: number, top: number, revise: number): number{
    //The 'revise' range is set in 0 - 15
    const piece = (Number(top) - Number(ground))/16;
    const exact = Math.round(ground + revise * piece);
    return exact;
}