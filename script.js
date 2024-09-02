const leftArrow = document.getElementById('l-arrow');
const rightArrow = document.getElementById('r-arrow');
const bannerContainer = document.getElementById('Barista-Recommends-items');

rightArrow.addEventListener('click', () => {
    console.log('click-r');
    bannerContainer.scrollLeft += 390; // Move right by 300 pixels
});

leftArrow.addEventListener('click', () => {
    bannerContainer.scrollLeft -= 900; // Move left by 300 pixels
});

// const BannerleftArrow = document.getElementById('l-arrow-1');
// const BannerRightArrow =document.getElementById('r-arrow-1');

// const BannerContainer = document.getElementById('banner-container');

//  BannerleftArrow.addEventListener('click',()=>{
//     BannerContainer.scrollLeft -=1200;
//  })

//  BannerRightArrow.addEventListener('click',()=>{
//     BannerContainer.scrollLeft +=1200;
//  })

const BannerLeftArrow = document.getElementById('l-arrow-1');
const BannerRightArrow = document.getElementById('r-arrow-1');
const BannerContainer = document.getElementById('banner-container');

// Flags to track the direction of scroll
let leftScrollFlag = true;
let rightScrollFlag = true;

BannerLeftArrow.addEventListener('click', () => {
    if (leftScrollFlag) {
        BannerContainer.scrollLeft -= 1200; // Scroll left normally
    } else {
        BannerContainer.scrollLeft += 1200; // Scroll right on the second click
    }
    leftScrollFlag = !leftScrollFlag; // Toggle the flag
});

BannerRightArrow.addEventListener('click', () => {
    if (rightScrollFlag) {
        BannerContainer.scrollLeft += 1200; // Scroll right normally
    } else {
        BannerContainer.scrollLeft -= 1200; // Scroll left on the second click
    }
    rightScrollFlag = !rightScrollFlag; // Toggle the flag
});

