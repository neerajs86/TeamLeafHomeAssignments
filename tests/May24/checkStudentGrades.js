evaluateGrade = function (score) {
    switch(true) {
        case(score >= 80 && score < 100):
        console.log("Grade A");
        break;
        case(score >=60 && score < 80):
        console.log("Grade B");
        break;
        case(score >=40 && score < 60):
        console.log("Grade C");
        break;
        default:
        console.log("Grade D");
    }
}
const myScore = 10;
evaluateGrade(myScore);