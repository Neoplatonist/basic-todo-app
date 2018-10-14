window.onload = function() {
  const form = document.querySelector('form')
  const list = document.querySelector('#list')

  form.onsubmit = e => {
    e.preventDefault()
    const input = document.querySelector('#item-input')

    list.innerHTML += '<li>' + input.value + ' <button class="delete">delete</button></li>'
    input.value = ''
  }

  list.onclick = e => {
    if (e.target !== e.currentTarget && e.target.nodeName === "BUTTON") {
      e.target.parentElement.remove()
    }

    if (e.target !== e.currentTarget && e.target.nodeName === "LI") {
      e.target.classList.toggle('done')
    }
  }
}