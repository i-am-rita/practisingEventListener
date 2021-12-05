const brightFace = document.querySelector('.closed')
const darkFace = document.querySelector('.open')

// add event listener
brightFace.addEventListener('click', () => {
  if (darkFace.classList.contains('open')) {
    darkFace.classList.add('active')
    brightFace.classList.remove('active')
  }
})

darkFace.addEventListener('click', () => {
  if (brightFace.classList.contains('closed')) {
    darkFace.classList.remove('active')
    brightFace.classList.add('active')
  }
})
