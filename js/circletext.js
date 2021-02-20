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

let fontSize = parseInt(window.getComputedStyle(circleTextButtons[0], null).getPropertyValue('font-size'),10);
let circleHeight = 350;
let angle = -90;
const deltaAngle = 360/(charnumbers(buttonsTextSplit));
let letterNumber = 0;

function createRadialText(circleTextButtons, button){
    circleTextButtons.forEach((char) => {
        const charelement = document.createElement('span');
        charelement.classList.add('about-me__circle__text__letter');
        charelement.innerText = char;
        const xpos = (circleHeight + 30) * Math.cos(angleToRadian(angle));
        const ypos = (circleHeight + 30) * Math.sin(angleToRadian(angle));
        const transform = `translate(${xpos + circleHeight - fontSize / 2}px, ${ypos + circleHeight - fontSize / 2}px)`;
        const rotate = `rotate(${letterNumber * deltaAngle}deg)`;
        charelement.style.transform = `${transform} ${rotate}`;
        angle += deltaAngle;
        button.appendChild(charelement);
        letterNumber++;
    })
}

for(let i = 0; i < buttonsText.length; i++)
    createRadialText(buttonsTextSplit[i], circleTextButtons[i]);

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

colorToSelectRoundText = () => {
    circleTextButtons.forEach( (selected, selectedIndex) => { 
        selected.addEventListener('click', function(){
            selected.classList.add('about-me__circle__text--active');
            aboutMeDescriptions[selectedIndex].classList.add('about-me__description--active');
            // aboutMeDescriptions[selectedIndex].style.opacity = "1";
            circleTextButtons.forEach( (unselected, unselectedIndex) => { 
                if(unselected !=selected){
                    unselected.classList.remove('about-me__circle__text--active');
                    aboutMeDescriptions[unselectedIndex].classList.remove('about-me__description--active');
                    // aboutMeDescriptions[unselectedIndex].style.opacity = "0";
                }
            });
        });
    });
}

colorToSelectRoundText();

