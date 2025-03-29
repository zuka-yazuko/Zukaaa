// Function buat munculin love-love di background
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Atur posisi random
    heart.style.left = Math.random() * 100 + "vw";

    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 500);
}

createHearts(); // Panggil function biar love muncul terus

function answerMood(mood) {
  const question = document.getElementById("question");
  const options = document.getElementById("options");

  if (mood === "baik") {
    question.innerText = "Wahh syukur deh, semoga mood-nya baik terus ya!";
  } else {
    question.innerText = "Yahh, semoga cepat baik ya mood-nya. Kalo mau cerita ke aku, cerita aja :)";
  }

  setTimeout(() => {
    question.innerText = "Aku mau ngomong sesuatu loh!";
    options.innerHTML = `
      <button class="btn" onclick="answerTalk('apaan')">Apaan tuh?</button>
      <button class="btn" onclick="answerTalk('gatau')">Ga ah, gamau tau</button>
    `;
  }, 2000);
}

function answerTalk(choice) {
  const question = document.getElementById("question");
  const options = document.getElementById("options");

  if (choice === "apaan") {
    question.innerText = `Aku cuman mau ngomong, maaf ya klo aku kadang sok galau, aslinya mah biar jago aja main emel. 
    Btw walaupun kita sahabatan tetep ya hubungan nya kek sebelumnya aja, maksudnya kek tetep deket gitu lah, yaa aslinya sih guwa maunya gitu cuman gengsi aja buat ngomong, 
    karna pas kau bilang sahabatan yang terlintas di pikiran ku ya sebatas teman dan ga lebih, kan jadi ragu klo mau manggil sayang, 
    soalnya udah kelanjur nyaman bejirr. Btw whatever it is I still love you :)`;
  } else {
    question.innerText = "Yaudah deh :(";
  }

  options.style.display = "none"; // Sembunyikan tombol setelah jawaban terakhir
}