var i = 0;
var cardsContainer = document.getElementById("cards");
var notIncludedPamatky = [];
while (i < pamatky.length) {
    notIncludedPamatky.push(i);
    i = i + 1;
}; 
i = 0;
console.log(notIncludedPamatky);
while (i < pamatky.length) {
    var pamatkaID = notIncludedPamatky[Math.floor(Math.random() * notIncludedPamatky.length)];
    cardsContainer.innerHTML = cardsContainer.innerHTML + "<div class=\"card\" style=\"flex-grow:" + (Math.random() * 10) + " \"><head1 style=\"background-image: url('" + pamatky[pamatkaID].pic + "')\"> <head1inner>" + pamatky[pamatkaID].name + "<\/head1inner><\/head1><underhead>Tady bude text o pamatce<\/underhead><\/div>";
    console.log(pamatky[pamatkaID].name + " ma cislo " + pamatkaID);

    console.log(notIncludedPamatky);
    notIncludedPamatky.splice(notIncludedPamatky.indexOf(pamatkaID), 1);
    i = i + 1;
};  
console.log(document.getElementById("welcome").offsetHeight); 
let root = document.documentElement;
window.addEventListener("scroll", e => {
    root.style.setProperty('--scrolled', window.scrollY + "px");
    root.style.setProperty('--scrolledNum', window.scrollY);
});