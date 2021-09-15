"use strict";
function calculate(lines,arr){
    let PM = arr[0]*Math.pow(lines,arr[1]);
    let TM = arr[2]*Math.pow(PM,arr[3]);
    let SS = PM/TM;
    let P = lines/PM;
    let textElement = document.querySelector('.efforts_result');
    textElement.innerHTML = PM.toFixed(2);
    textElement = document.querySelector('.timeToDevelop_result');
    textElement.innerHTML = TM.toFixed(2);
    textElement = document.querySelector('.personsToDevelop_result');
    textElement.innerHTML = Math.ceil(SS);
}
function start(){
    let organic = [2.4, 1.05, 2.5, 0.38];
    let semidetached = [3, 1.12, 2.5, 0.35];
    let embedded = [3.6, 1.2, 2.5, 0.32];
    let size = document.getElementById('linesOfCode').value;
    let projectType = document.querySelector('input[name="project"]:checked').value;
    switch(projectType){
        case "Organic":
            calculate(size,organic);
            break;
        case "Semidetached":
            calculate(size,semidetached);
            break;
        case "Embedded":
            calculate(size,embedded);
            break;
        default:
            break;
    }
}
