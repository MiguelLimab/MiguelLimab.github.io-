const btns = document.querySelectorAll(".question-btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const quention = e.currentTarget.parentElement.parentElement;
    quention.classList.toggle("show-text");
    });
  });
