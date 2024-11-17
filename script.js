function ilya() {
  window.open("https://starscream001.github.io/vsew_iwco/", "_blank");
}

function roza() {
  window.open("https://t.me/Rozalia_Manik", "_blank");
}

function sofia() {
  window.open("https://t.me/sofidances", "_blank");
}

function julia() {
  window.open("https://t.me/Juliya_Drako", "_blank");
}

function natalia() {
  window.open("https://vk.com/yoga_vsevolojsk", "_blank");
}

function ira() {
  window.open("tel:+79312101923", "_blank");
}

function nadia() {
  window.open("https://t.me/nadejda_lubov", "_blank");
}

function pcfr() {
  window.open("#", "_blank");
}

const drop = document.querySelector(".dp_dwn");
const mon = document.querySelector("#mon");
const tue = document.querySelector("#tue");
const wed = document.querySelector("#wed");
const thu = document.querySelector("#thu");
const fri = document.querySelector("#fri");
const sat = document.querySelector("#sat");
const sun = document.querySelector("#sun");

function monday() {
  mon.classList.remove("d-none");
  tue.classList.add("d-none");
  wed.classList.add("d-none");
  thu.classList.add("d-none");
  fri.classList.add("d-none");
  sat.classList.add("d-none");
  sun.classList.add("d-none");
  drop.innerHTML = "Понедельник ";
}

function tuesday() {
  mon.classList.add("d-none");
  tue.classList.remove("d-none");
  wed.classList.add("d-none");
  thu.classList.add("d-none");
  fri.classList.add("d-none");
  sat.classList.add("d-none");
  sun.classList.add("d-none");
  drop.innerHTML = "Вторник ";
}

function wednesday() {
  mon.classList.add("d-none");
  tue.classList.add("d-none");
  wed.classList.remove("d-none");
  thu.classList.add("d-none");
  fri.classList.add("d-none");
  sat.classList.add("d-none");
  sun.classList.add("d-none");
  drop.innerHTML = "Среда ";
}

function thursday() {
  mon.classList.add("d-none");
  tue.classList.add("d-none");
  wed.classList.add("d-none");
  thu.classList.remove("d-none");
  fri.classList.add("d-none");
  sat.classList.add("d-none");
  sun.classList.add("d-none");
  drop.innerHTML = "Четверг ";
}

function friday() {
  mon.classList.add("d-none");
  tue.classList.add("d-none");
  wed.classList.add("d-none");
  thu.classList.add("d-none");
  fri.classList.remove("d-none");
  sat.classList.add("d-none");
  sun.classList.add("d-none");
  drop.innerHTML = "Пятница ";
}

function saturday() {
  mon.classList.add("d-none");
  tue.classList.add("d-none");
  wed.classList.add("d-none");
  thu.classList.add("d-none");
  fri.classList.add("d-none");
  sat.classList.remove("d-none");
  sun.classList.add("d-none");
  drop.innerHTML = "Суббота ";
}

function sunday() {
  mon.classList.add("d-none");
  tue.classList.add("d-none");
  wed.classList.add("d-none");
  thu.classList.add("d-none");
  fri.classList.add("d-none");
  sat.classList.add("d-none");
  sun.classList.remove("d-none");
  drop.innerHTML = "Воскресенье ";
}

function auto() {
  const d = new Date();
  if (d.getDay() == 1) {
      monday();
      drop.innerHTML = "Сегодня ";
  }
  else if (d.getDay() == 2) {
      tuesday();
      drop.innerHTML = "Сегодня ";
  }
  else if (d.getDay() == 3) {
      wednesday();
      drop.innerHTML = "Сегодня ";
  } 
  else if (d.getDay() == 4) {
      thursday();
      drop.innerHTML = "Сегодня ";
  }
  else if (d.getDay() == 5) {
      friday();
      drop.innerHTML = "Сегодня ";
  }
  if (d.getDay() == 6) {
      saturday();
      drop.innerHTML = "Сегодня ";
  }
    if (d.getDay() == 7) {
        sunday();
        drop.innerHTML = "Сегодня ";
    }
}

const deviceWidth = window.matchMedia("(max-width:767px)");
if(deviceWidth.matches) {
    auto();
}
