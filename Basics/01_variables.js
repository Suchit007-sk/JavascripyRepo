/*const accountID = 123456;
let  accountEmail = "suchitkawade@gmail.com";
var accountPassword = "123456";
accountCity = "Pune";

//accountID = 2
console.log(accountID);*/

function filterDropdown() {
    const input = document.getElementById('ddlSearch').value.toLowerCase();
    const options = document.getElementById('ddlClasses').options;
    
    for (let i = 0; i < options.length; i++) {
      const text = options[i].text.toLowerCase();
      options[i].style.display = text.includes(input) ? '' : 'none';
    }
  }
