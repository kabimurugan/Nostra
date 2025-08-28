// Add to  favourites

const hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {
  heart.addEventListener("click", function () {
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
    heart.classList.toggle("active");
  });
});

// Menu Pop Up   


const nav2 = document.getElementById("nav2")
const closes = document.getElementById("closes")
const bar = document.getElementById("bar")

bar.addEventListener("click",function(){
  nav2.style.display="block"
})

closes.addEventListener("click",function(){
  nav2.style.display="none"
})


// offer Title Close

const offer_close = document.getElementById("offer_close")
const offer_title = document.querySelector(".offer_title")

offer_close.addEventListener("click",function(){
  offer_title.style.display="none"
})

const allLinks = document.querySelectorAll(".navbar_links a, #nav2 a");


allLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if(targetId.startsWith("#")) {
      e.preventDefault(); // only for same-page scroll
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
      nav2.classList.remove("show");
    }
    // external links or other pages will work normally
  });
});


// Observe sections for reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // optional: remove to animate again when scrolling up
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.2 }); // 20% visible

reveals.forEach(el => observer.observe(el));
