const leftArrow = document.getElementById('l-arrow');
const rightArrow = document.getElementById('r-arrow');
const bannerContainer = document.getElementById('Barista-Recommends-items');

rightArrow.addEventListener('click', () => {
    console.log('click-r');
    bannerContainer.scrollLeft += 390;
});

leftArrow.addEventListener('click', () => {
    bannerContainer.scrollLeft -= 900; 
});

const BannerLeftArrow = document.getElementById('l-arrow-1');
const BannerRightArrow = document.getElementById('r-arrow-1');
const BannerContainer = document.getElementById('banner-container');


BannerLeftArrow.addEventListener('click', () => {
        BannerContainer.scrollLeft -= 1200; 
});

BannerRightArrow.addEventListener('click', () => {
        BannerContainer.scrollLeft += 1200; 

});

