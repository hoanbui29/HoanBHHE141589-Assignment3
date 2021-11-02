// const elements = document.querySelectorAll(".keyboard__row > *")
// elements.forEach(item => item.setAttribute('id',`key-${item.innerHTML.trim().slice(6,-7)}`))

document.addEventListener('keydown',e => {
    e.preventDefault()
    console.log(`Key pressed: ${e.code}`)
    document.querySelector(`#${e.code}`).classList.remove('released')
    document.querySelector(`#${e.code}`).classList.add('pressed')
})
document.addEventListener('keyup', e => {
    e.preventDefault()
    console.log(`Key released: ${e.code}`)
    document.querySelector(`#${e.code}`).classList.remove('pressed')
    document.querySelector(`#${e.code}`).classList.add('released')

})