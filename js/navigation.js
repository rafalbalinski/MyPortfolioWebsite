'use strict'
class Navigation {
    constructor(burgerBtn, navHorizontalItems, navVerticalItems, navVertical){
        this.burgerBtn=burgerBtn;
        this.navHorizontalItems=navHorizontalItems;
        this.navVerticalItems=navVerticalItems;
        this.navVertical=navVertical;
    }

    showHorizontalMenu(){
        navHorizontalItems[0].style.animation = 'slideInDown .8s forwards ';
        navHorizontalItems[1].style.animation = 'slideInDown .8s .3s forwards ';
        navHorizontalItems[2].style.animation = 'slideInDown .8s .6s forwards ';
        navHorizontalItems[3].style.animation = 'slideInDown .8s .9s forwards ';        
    }
    
    closeHorizontalMenu(){
        navHorizontalItems[0].style.animation = 'slideInUp .8s forwards ';
        navHorizontalItems[1].style.animation = 'slideInUp 1.2s forwards ';
        navHorizontalItems[3].style.animation = 'slideInUp 1.9s forwards ';
        navHorizontalItems[2].style.animation = 'slideInUp 1.5s forwards ';  
    }

    showVerticalMenu(){
        navVertical.classList.toggle('nav__vertical--active');
        navVerticalItems.forEach(item => {
            item.addEventListener('click', () => {
                navVertical.classList.remove('nav__vertical--active');
            })
        })
    }
    
    setRightMenuType = () => {
        if(window.innerWidth > 992 && window.scrollY < 50){
            this.showHorizontalMenu();
            burgerBtn.classList.remove('burger-btn--active')
        }
        
        else{
            burgerBtn.classList.add('burger-btn--active')
            this.closeHorizontalMenu();
        }
    }
}

const navigation = new Navigation (burgerBtn, navHorizontalItems, navVerticalItems, navVerticalItems);
navigation.setRightMenuType();
window.addEventListener('resize', navigation.setRightMenuType);
window.addEventListener('scroll', navigation.setRightMenuType);

burgerBtn.addEventListener('click', navigation.showVerticalMenu);
