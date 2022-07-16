// const fn = (a, b) => a + b;

// function fn(t) {
//     return new Promise((res, rej) => {
//         setTimeout(() => res(`done after ${t}ms`), t);
//     });
// }


// function fn(t) {
//     return new Promise((res, rej) => {
//         setTimeout(() => res(`done after ${t}ms`), t);
//     });
// }

async function timeit(fn) {
    const start = Date.now();
    fn(Date.now() - start);
    // setTimeout(() => res(`done after ${t}ms`), t);
}

// timeit(fn).then(ans => {
//     ans === {value: "done after 25ms", time: 25}
//     console.log(ans);
// });


// timeit(fn)(5, 10).then(ans => {
//     ans === {value: 15, time: 500} // true
// })
