// const sliderItems = Array.from(document.querySelectorAll('.carousel-item'));

// let shownItemIndex = 5;

// console.log(sliderItems);

// sliderItems.forEach((sliderItem, index) => {    
//     sliderItem.style.setProperty('--progress', index - shownItemIndex);
//     sliderItem.style.setProperty('--active', +(index === shownItemIndex));
// })


//sliderItems[shownItemIndex].style.setProperty('z-index', 20);

// sliderItems[shownItemIndex].addEventListener('click', (event) => {
//     shownItemIndex=shownItemIndex+1;
//     }
// );

/*--------------------
Constants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

const slider = {

      

    items: Array.from(document.querySelectorAll('.carousel-item')),
    currentIndex: 0,

    
   
    init(){

        

        //this.items.addEventListener('click', () => clickByItem())        
        this.items.forEach((item, index) => {    
            item.addEventListener('click', this.clickByItem.bind(this, index))                    
        }, this)
        slider.render()

        const handleWheel = e => {
            //const wheelProgress = e.deltaY * speedWheel
            //alert("Current" + this.currentIndex)
            //alert(e.deltaY*speedWheel*.5)
            newIndex = this.currentIndex + e.deltaY*speedWheel*.5
            this.currentIndex = newIndex > 0 ? newIndex < this.items.length ? newIndex : this.items.length-1 : 0 
            
            //alert("Current" + this.currentIndex)
            //progress = progress + wheelProgress
            this.render()
        }

        document.addEventListener('mousewheel', handleWheel)

    },

    clickByItem(index){   
        //alert("Current" + this.currentIndex)     
        this.currentIndex=index        
        this.render()
    },

    

    

    render(){
        //console.log(this);

        this.items.forEach((item, index) => {        
            item.style.setProperty('--progress', index - this.currentIndex);
            item.style.setProperty('--active', +(index === this.currentIndex));

            //--opacity: calc(var(--zIndex) / var(--items) * 3 - 2);

            //const opacity = 3 * Math.abs(index - this.currentIndex) / (this.items.length -1);
            //const opacity = (1 - Math.abs(index - this.currentIndex)/this.items.length)
            const opacity = 1 - Math.abs(index - this.currentIndex)/this.items.length

            //console.log(opacity);
            item.style.setProperty('--opacity', index === this.currentIndex ? 1 : opacity - 0.3);
        }, this)

    },

    

    

}



slider.init()

