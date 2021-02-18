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

addSpacesBetwenLetters(3);

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

for(let i = 0; i < buttonsText.length; i++)
    createRadianButton(buttonsTextSplit[i], circleTextButtons[i]);

function addSpacesBetwenLetters(quantity){
    let index=0;
    for(let interval = 0; interval < quantity; interval++)
        for(let i = 0; i < buttonsText.length; i++){
            while (index <= buttonsTextSplit[i].length) {
                buttonsTextSplit[i].splice(index, 0, '\xa0');
                index += 2;
            }
            index = 0;
        }
}
