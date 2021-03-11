function coneTask(a, b) {
    let s = Math.sqrt(a * a + b * b);
    let vol = Math.PI * a * a * b / 3;
    console.log("Volume = " + vol);

    let area = Math.PI * a * (a + s);
    console.log("Area = " + area);
}
coneTask(3, 7);