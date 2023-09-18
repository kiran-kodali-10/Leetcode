var minEatingSpeed = function (piles, h) {
    let right = Math.max(...piles);

    let left = 0;
    let totalHours = 0;
    let mid  = 0;
    let ans = 0;
    while (left <= right) {
        // console.log(`left: ${left}, right: ${right}, Total hours: ${totalHours}`);
        mid = parseInt((left + right) / 2) + 1;
        totalHours = 0;
        console.log(`Left: ${left}, right: ${right} mid: ${mid}`);
        // if (mid === 0) break;
        piles.forEach((pile) => {

            totalHours += parseInt(pile / mid);
            console.log(`${pile} % ${mid} =  ${parseInt(pile / mid)}`);
        })
        console.log(`Total Hours: ${totalHours}`);
        if (totalHours <= h){
            ans = totalHours;
            right = mid - 1;
        }
        else if (totalHours > h) left = mid + 1;

    }
    return ans;
};

console.log(`Solution: ${minEatingSpeed([3, 6, 7, 11], 8)}`);