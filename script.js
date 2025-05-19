document.addEventListener("DOMContentLoaded", () => {
    let entry = document.querySelector(".entry");
    let heading = document.querySelector(".entry h1");

    function textChange(text, delay, nextText) {
        setTimeout(() => {
            heading.textContent = text;
            if (nextText) nextText();
        }, delay);
    }

    textChange("Experiences", 1000, () => {
        textChange("Expectations", 1000, () => {
            textChange("Content", 1000);
        });
    });
    setTimeout(()=>{
        entry.classList.add("after_entry");},4000);
});

const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});// Ensure card is properly selected
const card = document.querySelector(".card");
const arr_blocks = document.querySelectorAll(".blocks");
const image = document.querySelector(".card img"); // Ensure the image exists inside .card

for (let block of arr_blocks) {
    block.addEventListener("mouseover", () => {
        console.log(block.id);

        // Update image source dynamically
        image.src = `./assests/${block.id}.jpg`; // Fix the folder name to 'assets'
        
        // Set z-index to bring the card forward
        card.style.zIndex = "102";
    });

    block.addEventListener("mouseleave", () => {
        console.log(block.id);

        // Reset z-index to hide the card
        card.style.zIndex = "-1";
    });
}

let items=document.querySelectorAll(".main_top a");
let img2=document.querySelector(".part2 img");
console.log(items);
for(let item of items){
    item.addEventListener("mouseover" , ()=>{
        console.log(item.id);
        img2.src=`./assests/${item.id}.webp`;
        item.style.marginLeft="0";
        item.style.color="white";
    })
    item.addEventListener("mouseleave" , ()=>{
        console.log(item.id);
        img2.src=`./assests/intro.jpeg`;
        item.style.marginLeft="2vw";
        item.style.color="grey";
    })
} 

