console.log('Script is loading');

let modal = document.querySelector('#myModal');
let hamburger = document.querySelector('.hamburger');
let close = document.querySelector('.close')


hamburger.addEventListener("click", function () {
    modal.style.display = "block";
}
);


close.addEventListener("click", function () {
    modal.style.display = "none";
}
);

