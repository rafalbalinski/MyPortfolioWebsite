'use strict'

function cursorPosition(event) {
    circleCursor.style.left = event.pageX + 'px';
    circleCursor.style.top = event.pageY + 'px';

};

function cursorOnNavigation() {
    navHorizontalItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            circleCursor.classList.add('cursor-circle--active-nav');
            circleCursor.innerText = item.innerHTML;
            item.style.color = '#ffffff00';
        })
        item.addEventListener('mouseout', function () {
            circleCursor.classList.remove('cursor-circle--active-nav');
            circleCursor.innerText = '';
            item.style.color = '#ffffff';
        })
    })

    burgerBtn.addEventListener('mouseover', function () {
        circleCursor.classList.add('cursor-circle--active-burgerbtn');
    });
    
    burgerBtn.addEventListener('mouseout', function () {
        circleCursor.classList.remove('cursor-circle--active-burgerbtn');
    });
}

document.addEventListener('mousemove', cursorPosition);
document.addEventListener('mousemove', cursorOnNavigation);