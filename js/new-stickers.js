const slides = document.querySelectorAll('.new-stickers-slideshow-slide')
const buttons = document.querySelectorAll('.new-stickers-slideshow-button')

for(const button of buttons){
button.addEventListener('click', event => {
  let filterClass = event.target.dataset['slide']
  slides.forEach( elem =>{
    elem.classList.remove('slide-hide')
    if(!elem.classList.contains(filterClass))
    elem.classList.add('slide-hide')
  });
})
}