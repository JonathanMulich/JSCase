document.querySelector("#menuBtn").addEventListener("click",function(){
      console.log("knap trykket1");
      document.querySelector(".offcanvas").classList.add("open");
      document.querySelector(".overlay").classList.add("show");
    })
    document.querySelector("#closeBtn").addEventListener("click",function(){
      console.log("knap trykket2");
      document.querySelector(".offcanvas").classList.remove("open");
      document.querySelector(".overlay").classList.remove("show")
    })
      /* åbner overlay */

  /* lukker overlay med knap */


  /* lukker hvis man klikker udenfor boksen */
  document.querySelector(".overlay").addEventListener("click", function (event) {

    if (event.target === document.querySelector(".overlay")) {
      document.querySelector(".overlay").classList.remove("show");
    }
    document.querySelector(".offcanvas").classList.remove("open");
    console.log(event.target);
  });


//kasse overlay
document.querySelector("#basket").addEventListener("mouseenter",function(){
      console.log("hover pass");
      document.querySelector(".basketoverlay-content").classList.add("show");
    })
document.querySelector("#basket").addEventListener("mouseleave", function () {
    document.querySelector(".basketoverlay-content").classList.remove("show");
  });


//produkter
// modificeret fra https://stackoverflow.com/questions/54706080/generating-dynamic-html-cards-from-a-javascript-array
const Products = [{
  id: 1,
  title: "Bamser",
  img: "jscaseimg/amit-lahav-LU_fCezP9-o-unsplash.jpg",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, optio!",
  price: 10
}, 
{
  id: 2,
  title: "Bolsjer",
  img: "jscaseimg/customerbox-aXq1oCCjlVM-unsplash.jpg",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio non, maxime itaque voluptatem deleniti impedit consequatur voluptates minima perferendis.",
  price: 20
}, 
{
  id: 3,
  title: "Worms",
  img: "jscaseimg/yes-and-studio-XVYz_QeiEBw-unsplash.jpg",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, unde?",
  price: 30
}, 
]

const container = document.getElementById("grid");

Products.forEach((result, idx) => {
  // Create card element
  document.createElement('div');

const content = `
  <div class="item">
      <h5 class="title">${result.title}</h5>
      <div class="imgcontainer">
        <img src="${result.img}" class="realimg">
      </div>
      <p class="desc">${result.description}</p>
      <div class="moneyzone">
        <p class="price">${result.price},-</p>
        <div class="buttonbox">
          <button id="remove${idx+1}" class="hidden">Fjern</button>  
          <button id="get${idx+1}">Tilføj</button> 
        </div>
      </div>
  </div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});

// let value = Products.map((item) => item.price);
// let id = Products.map((item) => item.id);
// console.log(value)
// console.log(id)

// Products.forEach((result, idx) => {
// let idnum = idx+1
// console.log(idnum)
// });

var price = Products[0].price
var idnum = Products[0].id

document.getElementById("get"+idnum).addEventListener("click", countUpClick);
document.getElementById("remove"+1).addEventListener("click", countDownClick);

    function countUpClick() {
    const count = document.getElementById("count").textContent;
    const newCount = Number(count) +1;
    
    const moneyCount = document.getElementById("total").textContent;
    //price virker her af en eller anden grund
    const newmoneyCount = Number(moneyCount) + Products[0].price;
    
    console.log(newCount);
    console.log(newmoneyCount);
    document.getElementById("count").textContent = newCount
    document.getElementById("total").textContent = newmoneyCount
    };

    function countDownClick() {
    let count = document.getElementById("count").textContent;
    const moneyCount = document.getElementById("total").textContent;

    const newCount = Number(count) -1;
    const newmoneyCount = Number(moneyCount) - Products[0].price;
    console.log(newCount);
    console.log(newmoneyCount);
    document.getElementById("count").textContent = newCount
    document.getElementById("total").textContent = newmoneyCount
    
    // hold count til 0 eller over + fjern knappen
      if (newCount <= 0) {
        document.getElementById("count").textContent = 0;
        document.getElementById("remove1").classList.add("hidden")
      ;}
    };


//slides er nu et array af elementer
const slides = document.querySelectorAll(".slide");
console.log(slides);

let currentIndex = 0;

function displayImageNumber(displayNumber) {
    currentIndex = displayNumber;
    // skjuler alle billeder
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    if(currentIndex > slides.length -1) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length -1
    }

    slides[currentIndex].style.display = "block";
}

displayImageNumber(0);

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

btnNext.addEventListener("click", () => {
    displayImageNumber(currentIndex+1)
})

btnPrev.addEventListener("click", () => {
    displayImageNumber(currentIndex-1)
})

// unhide fjern knap + count på get
document.getElementById("get1").addEventListener("click",function(){
      console.log("knap trykket3");
      document.getElementById("remove1").classList.remove("hidden");
    })

//klik op og ned på knapsæt 1
// document.getElementById("get"+1).addEventListener("click", countUpClick);
// document.getElementById("remove"+1).addEventListener("click", countDownClick);

//     function countUpClick() {
//     const count = document.getElementById("count").textContent;
//     const newCount = Number(count) +1;
//     console.log(newCount);
//     document.getElementById("count").textContent = newCount
//     };

//     function countDownClick() {
//     let count = document.getElementById("count").textContent;
//     const newCount = Number(count) -1;
//     console.log(newCount);
//     document.getElementById("count").textContent = newCount
//     // hold count til 0 eller over + fjern knappen
//       if (newCount <= 0) {
//         document.getElementById("count").textContent = 0;
//         document.getElementById("remove1").classList.add("hidden")
//       ;}
//     };

// åbningstider
const time = new Date()
let hour = time.getHours();
console.log(hour)

function openingtimedisplay() {
if(hour > 8 && hour < 16){
  document.getElementById("openStatus").textContent = "Vi har åbent"
} else {
    document.getElementById("openStatus").textContent = "Vi har lukket"
};
};
openingtimedisplay()