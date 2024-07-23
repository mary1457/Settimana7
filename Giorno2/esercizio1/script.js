

const nameForm = document.getElementById('nameForm');
const nameList = document.getElementById('nameList');
const saveButton = document.getElementById('save')
const removeButton = document.getElementById('remove');
const listName = [];

const save = function () {

  const nameValue = document.getElementById('name').value

  localStorage.setItem('form-content' + nameValue, nameValue)
  listName.push(nameValue)


  nameList.innerHTML = ''

  for (let i = 0; i < listName.length; i++) {

    const newLi = document.createElement('li')
    newLi.innerText = listName[i]


    newLi.classList.add('list-group-item')
    newLi.id = 'form-content' + nameValue
    nameList.appendChild(newLi)
  }

  document.getElementById('name').value = ""

}

saveButton.addEventListener('click', save)

const remove = function () {

  const nameValue = document.getElementById('name').value
  const elementi = document.getElementById('form-content' + nameValue)

  localStorage.removeItem('form-content' + nameValue)

  nameList.removeChild(elementi)
  let nameIndex = listName.indexOf(nameValue)
  listName.splice(nameIndex, 1)
  document.getElementById('name').value = ""






}

removeButton.addEventListener('click', remove)