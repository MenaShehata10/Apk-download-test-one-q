
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

//



/*darkmode*/

// انشاء متغير لتخزين حالة الوضع المظلم
var darkMode = false;

// انشاء دالة لتغيير الوضع المظلم
function toggleDarkMode() {
  // تبديل قيمة المتغير
  darkMode = !darkMode;
  // التحقق من قيمة المتغير
  if (darkMode) {
    // إذا كان الوضع المظلم مفعل، تغيير الأنماط
    document.body.style.backgroundColor = "#092635";
    document.body.style.color = "white";
    document.getElementById("button80").innerText = "الوضع المضيء";
  } else {
    // إذا كان الوضع المظلم معطل، تغيير الأنماط
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("button80").innerText = "الوضع المظلم";
  }
}


/*loader*/

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
