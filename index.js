const toggle = (event, isKeyDown) => {
    event.preventDefault()
    console.log(event.code)
    const element = document.querySelector(`#${event.code}`)
    isKeyDown?element.classList.add('key-down'):element.classList.remove('key-down')
    isKeyDown?element.classList.remove('key-up'):element.classList.add('key-up')
}
document.addEventListener('keydown', e => toggle(e, true))
document.addEventListener('keyup', e => toggle(e, false))