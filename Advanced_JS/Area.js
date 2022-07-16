function getAreaFunctions(shapes) {
    const pi = Math.PI;
    var arr = [];
    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i] === "square") {
            arr.push(x => x * x);
        } else if (shapes[i] === "circle") {
            arr.push(x => x * x * pi);
        } else if (shapes[i] === "rectangle") {
            arr.push((x, y) => x * y)
        } else if (shapes[i] === "triangle") {
            arr.push((x, y) => x * y /2);
        }
    }

    return arr;
}

export default getAreaFunctions;
