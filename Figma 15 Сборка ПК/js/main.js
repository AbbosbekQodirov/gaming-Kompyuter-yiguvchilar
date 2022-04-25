//scrolda headerni o'zgarishi///////
window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });
//   yuqoriga tez chiqaeadigan button///////////////
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("activ", window.scrollY > 500);
  });
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
//   qalqib chiqishi//////////////////////
  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
      else{
          reveals[i].classList.remove("active");
      }
    }
  });
  const btn4=document.querySelector(".btn4")
  const modal = document.querySelector(".modal");
  btn4.addEventListener("click", ()=>{
    modal.classList.add("modal1")
  })
  const btn1 = document.querySelector(".btn1");
  btn1.addEventListener("click", () => {
    modal.classList.add("modal1");
  });
  const btn2 = document.querySelector(".btn2");
  btn2.addEventListener("click", () => {
    modal.classList.add("modal1");
  });
  const btn5 = document.querySelector(".btn5");
  const btn6 = document.querySelector(".btn6");
  const input1 = document.querySelector(".input1");
  const input2 = document.querySelector(".input2");
  const input3 = document.querySelector(".input3");
  const alert = document.querySelector(".alert");
  btn5.addEventListener("click", () => {
    if(!input1.value==""){
      modal.classList.remove("modal1");
    }
    else{
      input1.style.border = "1px dashed red";
      input2.style.border = "1px dashed red";
      input3.style.border = "1px dashed red";
      alert.style.display="block"
    }
  });
   btn6.addEventListener("click", () => {
      alert.style.display = "none";
      input1.style.border = "1px solid white";
      input2.style.border = "1px solid white";
      input3.style.border = "1px solid white";
   });
  const btn31=document.querySelector(".btn31")
  const btn32=document.querySelector(".btn32")
  const btn33 = document.querySelector(".btn33");
  const person1 = document.querySelector(".person1");
  const person2 = document.querySelector(".person2");
  const person3 = document.querySelector(".person3");
  btn31.addEventListener("click", ()=>{
    person1.classList.add("person11")
  })
  btn32.addEventListener("click", ()=>{
    person2.classList.add("person11")
  })
  btn33.addEventListener("click", () => {
    person3.classList.add("person11");
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.value == "fa-solid fa-right-from-bracket") {
      e.target.parentElement.classList.remove("person11");
    }
    if (e.target.classList.value == "fa-solid fa-arrow-right-from-bracket") {
       modal.classList.remove("modal1");
    }
  });

});
