function biggestNum([num1, num2, num3]) {
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    console.log(Math.max(num1, num2, num3));
}
biggestNum(['123', '24', '81']); // 123
biggestNum(['12.5', '12', '12.05']); // 12.5
biggestNum(['-5', '-6', '-5.1']); // -5