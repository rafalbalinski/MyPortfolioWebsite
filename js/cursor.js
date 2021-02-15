// circleCursor - circle which is a cursor
// navItems - navigation buttons
// nav - all navigation

function cursorPosition(event) {
    circleCursor.style.left = event.pageX + 'px';
    circleCursor.style.top = event.pageY + 'px';

};

function setRightMenuType () {
    if(window.innerWidth > 992 && window.scrollY < 50)
        return 'horizontal';
        
    else
        return 'vertical';
}

function cursorShape() {
    if (setRightMenuType() == 'horizontal') {
        navItems.forEach(item => {
            item.addEventListener('mouseover', function () {
                circleCursor.classList.add('cursor-circle--active');
                circleCursor.style['background-color'] = '#ffffff';
                circleCursor.innerText = item.innerHTML;
                item.style.color = '#ffffff00';
            })
            item.addEventListener('mouseout', function () {
                circleCursor.classList.remove('cursor-circle--active');
                circleCursor.style.removeProperty('background-color');
                circleCursor.innerText = '';
                item.style.color = '#ffffff';
            })
        })
    }

    else if (setRightMenuType() == 'vertical') {
        navItems.forEach(item => {
            circleCursor.classList.remove('cursor-circle--active');
            circleCursor.style.removeProperty('background-color');
            circleCursor.innerText = '';
            item.style.color = '#ffffff';
        })
    }
}

document.addEventListener('mousemove', cursorPosition);
document.addEventListener('mousemove', cursorShape);