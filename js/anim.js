
const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  };

  function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }

function scatterText () {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    let placeholderElement = document.getElementById('text-placeholder');
    document.body.style.overflowX = "hidden"
    let arrayOfElements = placeholderElement.childNodes
    let scatterElement = document.getElementById("scatterElement")
    scatterElement.remove()
    arrayOfElements.forEach(element => {
        let randomWidth = Math.round(getRandomNumber(0,windowWidth))
        let randomHeight = Math.round(getRandomNumber(0,windowWidth))
        element.style.position="absolute"
        element.style.overflowX = "hidden"
        element.animate(
            [
                {
                    top:element.offsetTop+"px",
                    left:element.offsetLeft+"px",
                    opacity:1
                },
                {
                    top:randomWidth+"px",
                    left:randomHeight+"px",
                    opacity:0.3
                }
            ],
            {
                duration: 1000,
                iterations: 1,
            }
        )
        element.style.top = randomWidth+ "px"
        element.style.left = randomHeight+ "px"
        element.style.opacity= 0.3
        element.style.overflow = "hidden"
        
        
    })
}

function generateIntroText(){
    let stringName = "Sriram Manoharan";
    let words = stringName.split('')
    let placeholderElement = document.getElementById('text-placeholder');
    words.forEach(char => {
        let charElement = document.createElement('span');
        charElement.innerText = char
        charElement.classList.add('intro-text')
        placeholderElement.appendChild(charElement)
    })
}


document.addEventListener('DOMContentLoaded', function() {
    generateIntroText()
 }, false);