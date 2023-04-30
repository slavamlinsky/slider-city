/*--------------------
Constants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

const slider = {      

    items: Array.from(document.querySelectorAll('.carousel-item')),
    currentIndex: 0,    
   
    init(){              
        this.items.forEach((item, index) => {    
            item.addEventListener('click', this.clickByItem.bind(this, index))                    
        }, this)
        slider.render()

        const handleWheel = e => {
            
            newIndex = this.currentIndex + e.deltaY*speedWheel*.5
            this.currentIndex = newIndex > 0 ? newIndex < this.items.length ? newIndex : this.items.length-1 : 0             
            this.render()
        }

        document.addEventListener('mousewheel', handleWheel)

    },

    clickByItem(index){           
        this.currentIndex=index        
        this.render()
    },

    render(){        
        this.items.forEach((item, index) => {        
            item.style.setProperty('--progress', index - this.currentIndex);
            item.style.setProperty('--active', +(index === this.currentIndex));

            const opacity = 1 - Math.abs(index - this.currentIndex)/this.items.length
            
            item.style.setProperty('--opacity', index === this.currentIndex ? 1 : opacity - 0.3);
        }, this)

    },
}

slider.init()

