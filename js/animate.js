(function(){

    function animated(selector, animationName){
        let elems = document.querySelectorAll(selector);
        [...elems].forEach(elem=>{
            var waypoint = new Waypoint({
                element: elem,
                handler: function(){
                    animateCSS(elem, animationName)
                    //this.destroy();
                },
                offset: '100%',
              })
        })
    }
      

    function animateCSS(element, animationName, callback) {

        element.classList.add('animated', animationName);
        element.addEventListener('animationend', handleAnimationEnd);

    
        function handleAnimationEnd() {
            element.classList.remove('animated', animationName)
            element.removeEventListener('animationend', handleAnimationEnd)
    
            if (typeof callback === 'function') callback()
        }
    
    }


    animated('.profi-item', 'fadeInRight');
    animated('.header-tab', 'flipInX');

})()
