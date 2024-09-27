let randomNumber = Math.floor(Math.random() * 100) +1
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')


btn.addEventListener('click' , () => {
   const userGuess = Number(input.value)

   if(!userGuess || userGuess < 1 || userGuess > 100){
      result.innerText = 'Введите число от 1 до 100!❌'
      input.value = ''
   }else if( userGuess === randomNumber ){
      result.innerText = 'Поздравляю! ты угадал число!✅'
      setTimeout(() => {
         randomNumber = Math.floor(Math.random() * 100) +1
         result.innerText = 'Загаданое число обновленно!Угадывй снова👌'
      }, 3000);
      input.value = ''

   }else if(userGuess < randomNumber){
  result.innerText = `Число ${userGuess} больше ⬆️`
  input.value = ''

   }else{
      result.innerText = `Число ${userGuess} меньше ⬇️`
      input.value = ''

   }
})
