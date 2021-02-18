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

circleBorder.style.width = aboutMeSection.offsetHeight - 200 + "px";
circleBorder.style.height = aboutMeSection.offsetHeight - 200 + "px";

addSpacesBetwenLetters(3);

const fontSize = parseInt(window.getComputedStyle(circleTextButtons[0], null).getPropertyValue('font-size'),10);
let angle = -90;
const deltaAngle = 360/(charnumbers(buttonsTextSplit));
let letterNumber = 0;

function createRadianButton(circleTextButtons, button){
    circleTextButtons.forEach((char) => {
        const charelement = document.createElement('span');
        charelement.innerText = char;
        const xpos = (circleBorder.offsetHeight/2+30) * Math.cos(angleToRadian(angle));
        const ypos = (circleBorder.offsetHeight/2+30) * Math.sin(angleToRadian(angle));
        const transform = `translate(${xpos+circleBorder.offsetHeight/2-fontSize/2}px, ${ypos+circleBorder.offsetHeight/2-fontSize/2}px)`;
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

colorToSelectRoundText = () => {
    circleTextButtons.forEach( (selected, selectedIndex) => { 
        selected.addEventListener('click', function(){
            selected.classList.add('about-me__circle__text--active');
            aboutMeDescriptions[selectedIndex].style.opacity = "1";
            circleTextButtons.forEach( (unselected, unselectedIndex) => { 
                if(unselected !=selected){
                    unselected.classList.remove('about-me__circle__text--active');
                    aboutMeDescriptions[unselectedIndex].style.opacity = "0";
                }
            });
        });
    });
}

aboutMeSection.addEventListener('mousemove', colorToSelectRoundText );
