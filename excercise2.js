let N = 3;
let M = 400;
let L = 120;
let H = [20, 50, 20];
let A = [20, 70, 90];
let hours = 0;


for (let i = 0; ; i++) {
    let totalSpeed = 0;
    let alarm = false;

    for (let j = 0; j < N; j++) {
        H[j] += A[j];

        if (H[j] >= L) {
            totalSpeed += H[j]; 
        }

        if (totalSpeed >= M) {
            alarm = true;
        }
    }

    if (alarm) {
        hours = i + 1; 
        break; 
    }
}

console.log(hours);