//تحديد المستويات وعدد ثوانى كل مستوى

let levels = {
  Easy: 5,
  Medim: 3,
  Herd: 2,
};

//تحديد المستويات وعدد ثوانى كل مستوى
let select1 = document.querySelector(".select1");
let select2 = document.querySelector(".leng");
// select.removeAttribute;
// select.onchange = function (e) {
//   for (let i = 0; i < select.options.length; i++) {
//     select.options[i].removeAttribute("selected");
//   }
// };
let lev = "Medim";
let defultLevel = levels[lev];
select1.addEventListener("change", (ch) => {
  if (ch.target.value != "select Level") {
    hendleChenge(ch.target.value);
  } else {
    hendleChenge("Medim");
  }
});

function hendleChenge(val) {
  lev = val;
  defultLevel = levels[lev];
  levelSpan.innerHTML = lev;
  secendSpan.innerHTML = defultLevel;
  secenddown.innerHTML = defultLevel;
}

// console.log(lev);

// تحديد السمتوى الذى يتم اختيارة

// console.log(defultLevel);
// تحديد السمتوى الذى يتم اختيارة

// الارى التى بها الكلمات

let allWords = [
  "الاسلام",
  "الاخلاص",
  "محمد",
  "ابراهيم",
  "الاعراب",
  "المسلمين",
  "الاعياد",
  "المواسم",
  "الصدق",
  "الجنة",
  "النار",
  "الحساب",
  "عيسى",
  "ايوب",
  "يونس",
  "اسماعيل",
  "اسحاق",
  "الجن",
  "الملائكة",
  "الرسل",
];

// الارى التى بها الكلمات
// جلب العناصر من الصفحة

let levelSpan = document.querySelector(".title .level");
let secendSpan = document.querySelector(".title .secendLevel");
let btn = document.querySelector(".btn");
let wordShow = document.querySelector(".wordsWrithe");
let input = document.querySelector("input");
let allWordsDiv = document.querySelector(".allwords");
let secenddown = document.querySelector(".leftsecend");
let scrore = document.querySelector(".secend-level");
let allWordNumber = document.querySelector(".numberAllWords");
let fen = document.querySelector(".finesh");
// جلب العناصر من الصفحة
select2.addEventListener("change", (ch) => {
  if (ch.target.value == "select language" || ch.target.value == "Arbic") {
    allWords = allWords;
  } else if (ch.target.value == "English") {
    allWords = [
      "hello",
      "yahoo",
      "google",
      "elzero Web School",
      "translation",
      "instagram",
      "twitter",
      "betcoin",
      "bootstrap",
      "front end",
      "background",
      "back end",
      "developer",
      "salary",
      "Company",
      "youtube",
      "gmail",
      "sass",
      "pugjs",
      "stack overflow",
    ];
  }
});

// ملئ عناصر الصفحة الغير متغيرة
levelSpan.innerHTML = lev;
secendSpan.innerHTML = defultLevel;
secenddown.innerHTML = defultLevel;
allWordNumber.innerHTML = allWords.length;

// ملئ عناصر الصفحة الغير متغيرة

// ايقاف البيست
input.onpaste = function (e) {
  e.preventDefault();
};

// ايقاف البيست
// اول ما نضغط على الزرار
btn.onclick = function () {
  this.remove();
  input.focus();
  select1.remove();
  select2.remove();
  hendle();
  secenddown.innerHTML = secenddown.innerHTML * 2;
  document.querySelector(".keep").remove();
};

function hendle() {
  let rendomWords = allWords[Math.floor(Math.random() * allWords.length)];
  allWords.splice(allWords.indexOf(rendomWords), 1);
  wordShow.innerHTML = rendomWords;
  allWordsDiv.innerHTML = ``;
  for (let x = 0; x < allWords.length; x++) {
    let divitem = document.createElement("div");
    divitem.className = "item";
    divitem.innerHTML = allWords[x];
    allWordsDiv.appendChild(divitem);
  }

  startha();
}

function startha() {
  secenddown.innerHTML = defultLevel;
  let set = setInterval((e) => {
    secenddown.innerHTML--;
    if (secenddown.innerHTML == 0) {
      clearInterval(set);
      if (input.value == wordShow.innerHTML) {
        input.value = ``;
        scrore.innerHTML++;

        if (allWords.length > 0) {
          hendle();
        } else {
          let sp = document.createElement("p");
          sp.className = `secces`;
          if (lev == "Herd") {
            sp.innerHTML = `تهانينا لقد تخطيت اصعب مرحلة انت اسرع واحد فى الكوكب `;
          } else {
            sp.innerHTML = `تهانينا لقد تخطيت المرحلة يمكنك تجربة مرحلة اصعب`;
          }
          let tryagin = document.createElement("button");
          tryagin.className = `tryAginbtn`;
          tryagin.innerHTML = `اللعب مرة اخرى`;
          fen.appendChild(sp);
          fen.appendChild(tryagin);
          tryagin.onclick = function () {
            window.location.reload();
          };
        }
      } else {
        let sp = document.createElement("p");
        sp.className = `bad`;
        sp.innerHTML = `تم انتهاء اللعبة حاول مرة اخرى !`;
        let tryagin = document.createElement("button");
        tryagin.className = `tryAginbtn`;
        tryagin.innerHTML = `اللعب مرة اخرى`;
        fen.appendChild(sp);
        fen.appendChild(tryagin);
        tryagin.onclick = function () {
          window.location.reload();
        };
      }
    }
  }, 1000);
}
