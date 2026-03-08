let res = "";
let maxAvg = 0;

for (const [key, arr] of Object.entries({ A:[80,90], B:[70,75,85] })) {
    const sum = arr.reduce((acc, prev) => acc + prev, 0);
    const avg = sum / arr.length;

    if (avg > maxAvg) {
        maxAvg = avg;
        res = key;
    }
}

console.log(res);