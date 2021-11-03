document.addEventListener('keydown',e => {
    e.preventDefault()
    document.querySelector(`#${e.code}`).classList.remove('released')
    document.querySelector(`#${e.code}`).classList.add('pressed')
})
document.addEventListener('keyup', e => {
    e.preventDefault()
    document.querySelector(`#${e.code}`).classList.remove('pressed')
    document.querySelector(`#${e.code}`).classList.add('released')

})