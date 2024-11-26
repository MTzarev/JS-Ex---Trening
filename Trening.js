function examTrening(input) {

    let studentNum = Number(input[0]);

    let fail = 0;
    let Between3and399 = 0;
    let Between4and499 = 0;
    let TopStudents = 0;
    let sum = 0;

    for (let i = 1; i <= input.length; i++) {
        let grade = Number(input[i])
        if (grade >= 2 && grade <= 2.99) {
            fail++
            sum += Number(input[i])
        } else if (grade > 2.99 && grade <= 3.99) {
            Between3and399++
            sum += Number(input[i])
        } else if (grade > 3.99 && grade <= 4.99) {
            Between4and499++
            sum += Number(input[i])
        } else if (grade > 4.99 && grade <= 6) {
            TopStudents++
            sum += Number(input[i])
        }

    }
    console.log(`Top students: ${((TopStudents / studentNum) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((Between4and499 / studentNum) * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${((Between3and399 / studentNum) * 100).toFixed(2)}%`)
    console.log(`Fail: ${((fail / studentNum) * 100).toFixed(2)}%`)
    console.log(`Average: ${(sum / studentNum).toFixed(2)}`)
console.log(sum);
}
examTrening(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])
