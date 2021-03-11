function distanceOverTime([speed1, speed2, timeInSeconds]) {
    let distance1 = (speed1 / 3.6) * timeInSeconds;
    let distance2 = (speed2 / 3.6) * timeInSeconds;
	let delta = Math.abs(distance1 - distance2);
    console.log(delta);
}
distanceOverTime([5, 10, 1600]); // 2222.222222222222
distanceOverTime([50, 20, 20]); // 166.66666666666666
distanceOverTime([45, -5, 360]); // 5000