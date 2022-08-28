function tema(){
const setTheme = theme => document.documentElement.className = theme;
var checkBox = document.getElementById("switch");
if (checkBox.checked == true){
    setTheme('light');
  } else {
    setTheme('dark');

  }
}