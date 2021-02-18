class Bubble {
    constructor(bubble, dx, dy) {
        this.dx = dx;
        this.dy = dy;
        this.bubble = bubble;
        this.XPosition = titlePage.offsetWidth/2 - this.bubble.offsetWidth/2;   //starting X position is the middle
        this.YPosition = titlePage.offsetHeight/2 - this.bubble.offsetHeight/2; //starting Y position is the middle
        this.bubble.style.left = this.XPosition + 'px';
        this.bubble.style.top = this.YPosition  + 'px';
    }

    position() {
        this.bubble.style.left = this.XPosition + 'px';
        this.bubble.style.top = this.YPosition + 'px';
    }

    collision() {
        if (titlePage.offsetHeight <= window.scrollY) {
            return 'stop'
        }
     
        else if (this.bubble.offsetTop <= titlePage.offsetTop) {    // <-- top collision
            this.dy = -this.dy;
            return 'top'
        }
        
        else if (this.bubble.offsetLeft + this.bubble.offsetWidth >= titlePage.offsetWidth) { // <-- right collision
            this.dx = -this.dx;
            return 'right'
        }
       
        else if (this.bubble.offsetTop + this.bubble.offsetHeight >= titlePage.offsetHeight) {  // <-- bottom collision
            this.dy = -this.dy;
            return 'bottom'
        }
       
        else if (this.bubble.offsetLeft <= titlePage.offsetLeft) {  // <-- left collision
            this.dx = -this.dx;
            return 'left'
        }
    }

    collisionDebuger() {
        if (this.bubble.offsetTop+5 <= titlePage.offsetTop ||
            this.bubble.offsetLeft + this.bubble.offsetWidth-5 >= titlePage.offsetWidth ||
            this.bubble.offsetTop + this.bubble.offsetHeight-5 >= titlePage.offsetHeight ||
            this.bubble.offsetLeft +5 <= titlePage.offsetLeft) {
            this.XPosition = titlePage.offsetWidth/2 - this.bubble.offsetWidth/2;
            this.YPosition = titlePage.offsetHeight/2 - this.bubble.offsetHeight/2;
        }
    }

    move() {
        setInterval(() => {
            if(titlePage.offsetHeight >= window.scrollY){
                this.collision();
                this.collisionDebuger();
                this.XPosition += this.dx;
                this.YPosition += this.dy;
                this.position();
            }
        }, 10);
    }
}

const bubble1 = new Bubble(bubbles[0], 1, 2);
const bubble2= new Bubble(bubbles[1], -3, 2);
const bubble3 = new Bubble(bubbles[2], 2, 1);
bubble1.move();
bubble2.move();
bubble3.move();
