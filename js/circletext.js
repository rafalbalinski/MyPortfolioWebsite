function  angleToRadian (angle) { 
    return angle * (Math.PI / 180); 
}

function charnumbers (buttons) {
    let quantity = 0;
    buttons.forEach( item => quantity += item.length);
    return quantity;
}

const buttonsText = new Array ();
const buttonsTextSplit = new Array ();

circleTextButtons.forEach( (item, index) => buttonsText[index] = item.innerText);
buttonsText.forEach( (item, index) => { buttonsTextSplit[index] = item.split('') });
circleTextButtons.forEach( item => item.innerText = "");

let angle = -90;
const deltaAngle = 360/(charnumbers(buttonsTextSplit));
let letterNumber = 0;

function createRadianButton(circleTextButtons, button){
    circleTextButtons.forEach((char) => {
        const charelement = document.createElement('span');
        charelement.innerText = char;
        const xpos = (circleBorder.offsetHeight/2+30) * Math.cos(angleToRadian(angle));
        const ypos = (circleBorder.offsetHeight/2+30) * Math.sin(angleToRadian(angle));
        const transform = `translate(${xpos+circleBorder.offsetHeight/2-12}px, ${ypos+circleBorder.offsetHeight/2-12}px)`;
        const rotate = `rotate(${letterNumber * deltaAngle}deg)`;
        charelement.style.transform = `${transform} ${rotate}`;
        angle += deltaAngle;
        button.appendChild(charelement);
        letterNumber++;
    })
}

createRadianButton(buttonsTextSplit[0], circleTextButtons[0]);
createRadianButton(buttonsTextSplit[1], circleTextButtons[1]);
createRadianButton(buttonsTextSplit[2], circleTextButtons[2]);
createRadianButton(buttonsTextSplit[3], circleTextButtons[3]);


// let i =0;
// while (i <= buttonsTextSplit[0].length) {
//     buttonsTextSplit[0].splice(i, 0, '\xa0');
//     i += 2;
// }
// i =0;
// while (i <= buttonsTextSplit[1].length) {
//     buttonsTextSplit[1].splice(i, 0, '\xa0');
//     i += 2;
// }
// i =0;
// while (i <= buttonsTextSplit[2].length) {
//     buttonsTextSplit[2].splice(i, 0, '\xa0');
//     i += 2;
// }
// i =0;
// while (i <= buttonsTextSplit[3].length) {
//     buttonsTextSplit[3].splice(i, 0, '\xa0');
//     i += 2;
// }
