// burgerBtn - burger button
// nav - all navigation
// navItems - navigation buttons
'use strict'
class Navigation {
    constructor(burgerBtn, nav, navItems){
        this.burgerBtn=burgerBtn;
        this.nav=nav;
        this.navItems=navItems;
    }

    showHorizontalMenu(){
        this.nav.classList.add('nav--horizontal');
        this.navItems.forEach(item => {
            item.classList.add('nav__item--horizontal');
        });
        navItems[0].style.animation = 'slideInDown .8s forwards ';
        navItems[1].style.animation = 'slideInDown .8s .3s forwards ';
        navItems[2].style.animation = 'slideInDown .8s .6s forwards ';
        navItems[3].style.animation = 'slideInDown .8s .9s forwards ';        
    }
    
    closeHorizontalMenu(){
        navItems[0].style.animation = 'slideInUp .8s forwards ';
        navItems[1].style.animation = 'slideInUp 1.2s forwards ';
        navItems[3].style.animation = 'slideInUp 1.9s forwards ';
        navItems[2].style.animation = 'slideInUp 1.5s forwards ';
        setTimeout(this.nav.classList.remove('nav--horizontal'),1500);
        setTimeout(this.navItems.forEach(item => {item.classList.remove('nav__item--horizontal');}),1500);
        
        
    }
    
    showVerticalMenu(){
        this.nav.classList.add('nav--vertical');
        this.navItems.forEach(item => {
            item.classList.add('nav__item--vertical');
        });
        burgerBtn.style.display = 'inline';
    }
    
    closeVerticalMenu(){
        this.nav.classList.remove('nav--vertical');
        this.navItems.forEach(item => {
            item.classList.remove('nav__item--vertical');
        });
        burgerBtn.style.display = 'none';
    }

    setRightMenuType = () => {
        if(window.innerWidth > 992 && window.scrollY < 50){
            this.showHorizontalMenu();
            // this.closeVerticalMenu();
        }
            
        else{
            // this.showVerticalMenu();
            this.closeHorizontalMenu();
        }
    }
}

const navigation = new Navigation (burgerBtn, nav, navItems);

navigation.setRightMenuType();
window.addEventListener('mousemove', navigation.setRightMenuType);










// function enableAppropirateMenu () {
//     if (setRightMenuType() == 'vertical'){
//         burgerBtn.style.display = 'inline';
//         nav.classList.add('nav--vertical');
//         nav.classList.remove('nav--horizontal');
//         navItems.forEach(item => {
//             item.classList.add('nav__item--vertical');
//             item.classList.remove('nav__item--horizontal');
//         })
//     }
    
//     else if (setRightMenuType() == 'horizontal'){
//         burgerBtn.style.display = 'none';
//         nav.classList.add('nav--horizontal');
//         nav.classList.remove('nav--vertical');
//         navItems.forEach(item => {
//             item.classList.add('nav__item--horizontal');
//             item.classList.remove('nav__item--vertical');
//         })
//     }
// }
// // use the function only once after loading the page
// enableAppropirateMenu ();

// Use function when window os resizing
// window.addEventListener('mousemove', enableAppropirateMenu)





















// burgerBtn = document.querySelector('.burger-btn');

// BurgerTopBar = document.querySelector('.burger-btn__top');
// BurgerMiddleBar = document.querySelector('.burger-btn__middle');
// BurgerBottomBar = document.querySelector('.burger-btn__bottom');

// navPanel = document.querySelector('.nav');
// navAllItems = document.querySelectorAll('.nav__item');

// const showMenu = () => {
//     navPanel.classList.toggle('nav--active');
//     BurgerTopBar.classList.toggle('burger-btn__top--active');
//     BurgerMiddleBar.classList.toggle('burger-btn__middle--active');
//     BurgerBottomBar.classList.toggle('burger-btn__bottom--active');

//     navAllItems.forEach(element => {
//         element.addEventListener('click', function(){
//             navPanel.classList.remove('nav--active');
//             BurgerTopBar.classList.remove('burger-btn__top--active');
//             BurgerMiddleBar.classList.remove('burger-btn__middle--active');
//             BurgerBottomBar.classList.remove('burger-btn__bottom--active');
//         });
//     });
// }

// burgerBtn.addEventListener('click', showMenu);