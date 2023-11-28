//Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
// const formUser = document.querySelector("#user_form")
// const userNameInput = document.querySelector(".username")
// const userLastnameInput = document.querySelector(".user_lastname")
// const userAgeInput = document.querySelector(".user_age")

// formUser.addEventListener("submit", function (e) {
//     e.preventDefault()
//     console.log(userNameInput.value);
//     console.log(userLastnameInput.value);
//     console.log(userAgeInput.value);
//     formUser.reset()
// })

//Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
const formUser = document.querySelector("#user_form")
const userNameInput = document.querySelector(".username")
const userLastnameInput = document.querySelector(".user_lastname")
const userAgeInput = document.querySelector(".user_age")
let users = []
formUser.addEventListener("submit", function (e) {
    e.preventDefault()
    let user = {
       username: userNameInput.value,
       user_lastname: userLastnameInput.value,
       user_age: userAgeInput.value
    }
    users.push(user)
    console.log(users)
    rerender()
    formUser.reset()
})



function createUserCard({username, user_lastname, user_age}) { // let {name, lastname, age} = user
    const pName = document.createElement('p')
    pName.innerText = username
    const pLastname = document.createElement('p')
    pLastname.innerText = user_lastname
    const pAge = document.createElement('p')
    pAge.innerText = user_age
    const userCard = document.createElement('div')
    userCard.classList.add("user_card")
  
    userCard.append(pName, pLastname, pAge)
  
    return userCard
}
//Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.

const usersListDiv = document.querySelector(".users_list_container")
function rerender() {
    usersListDiv.innerHTML=""
    for (let i = 0; i < users.length; i++) {
     const usersCardElem = createUserCard(users[i]) 
    //Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender. 
     usersCardElem.addEventListener("dblclick", function() {
        users.splice(i, 1)
        rerender()
         })
     usersListDiv.append(usersCardElem)
    }
    
}



