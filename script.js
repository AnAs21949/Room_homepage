products = [
    {
        img: '/images-ch/desktop-image-hero-1.jpg',
        Name:   'Discover innovative ways to decorate',
        text : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        img: '/images-ch/desktop-image-hero-2.jpg',
        Name:   'We are available all across the globe',
        text : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        img: '/images-ch/desktop-image-hero-3.jpg',
        Name:   'Manufactured with the best materials',
        text : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const heroContainer = document.querySelector("hero");
const image = document.querySelector(".img")
const titleOf = document.querySelector(".title")
const motivation = document.querySelector(".motivation")

let i = 0;

function getData(){
    if(i < 0){
        i = products.length-1;
    }else if(i> products.length-1){
        i = 0;
    }
    console.log(i)
    return {img, Name, text} = products[i];
    
}


rightBtn.addEventListener("click", function(){
    let {img, Name, text} = getData()
    image.src = `${img}`
    titleOf.textContent = `${Name}`
    motivation.textContent = `${text}`
    i++;
})

leftBtn.addEventListener("click", function(){
    let {img, Name, text} = getData()
    image.src = `${img}`
    titleOf.textContent = `${Name}`
    motivation.textContent = `${text}`
    i--;
})


const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const logo = document.querySelector(".logo");
const navLinks = document.querySelector(".links");
const nav = document.getElementById("id");
const main = document.querySelector(".main");



openBtn.addEventListener("click", function(){
    openBtn.classList.add("hide");
    closeBtn.classList.add("show");
    navLinks.classList.add("show-links");
    logo.classList.add("hide");
    main.style.marginTop = '89.55px'
})

closeBtn.addEventListener("click", function(){
    openBtn.classList.remove("hide");
    closeBtn.classList.remove("show");
    navLinks.classList.remove("show-links");
    logo.classList.remove("hide");
    main.style.marginTop = '0px'
    nav.style.backgroundColor = "#fff"
})



