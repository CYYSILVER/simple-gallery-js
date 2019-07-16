const allImage = document.querySelectorAll('.photo-album__container img')
const ul = document.querySelector('.photo-album__container')
const modal = document.querySelector('.modal')
const modal__display = document.querySelector('.modal__display')
const modal__img = document.querySelector('.modal__img')

const left = document.querySelector('.modal__arrow--left')
const right = document.querySelector('.modal__arrow--right')

let imgLength = allImage.length
let index = -1

ul.addEventListener('click', function(event) {
  let target = event.target
  if (target.tagName == 'IMG') {
    requestAnimationFrame(() => {
      modal.classList.remove('hidden')
      requestAnimationFrame(() => {
        modal__display.classList.add('scale-1')
        left.classList.add('scale-1')
        right.classList.add('scale-1')
      })
    })

    index = [...allImage].indexOf(target)
    if (index != -1) {
      loadImg(index)
    }
  }
})
modal.addEventListener('click', function(event) {
  if (event.target == modal) {
    this.classList.add('hidden')

    modal__display.classList.remove('scale-1')
    left.classList.remove('scale-1')
    right.classList.remove('scale-1')
  }
})

left.addEventListener('click', event => {
  prePicture()
})

right.addEventListener('click', event => {
  nextPicture()
})

function nextPicture() {
  index++
  if (index >= imgLength) {
    index = 0
  }
  loadImg(index)
}

function prePicture() {
  index--
  if (index < 0) {
    index = imgLength - 1
  }
  loadImg(index)
}

function loadImg(index) {
  modal__img.src = allImage[index].src
}
