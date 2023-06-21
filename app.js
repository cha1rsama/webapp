let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
tg.expand(); //расширяем на все окно 
let username= document.getElementById('email')
let password= document.getElementById('password')
const mainButton = window.Telegram.WebApp.MainButton;
  mainButton.text = "Save Preferences";
  mainButton.enable();
  mainButton.show();
  // and make it send the "foods" object (as JSON string) back to the backend
  mainButton.onClick(submitFunction)
function submitFunction() {
   fetch("https://api.oneapp.ly/auth/login", {method: "POST",
   body: JSON.stringify({
        "login": username,
        "password": password  
   }),
   headers: {
     "Content-type": "application/json; charset=UTF-8"
   }
 })
  .then((response) => response.json())
  .then((json) => console.log(json));
}
