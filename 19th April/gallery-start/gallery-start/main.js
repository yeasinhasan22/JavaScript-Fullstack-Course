const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */


//Image loading


const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
    'pic1.jpg' : 'Closeup of a Human eye',
    'pic2.jpg' : 'Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white pansies',
    'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg' : 'Large moth on a leaf'
}

//Looping through images

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });

}
// displayedImage.addEventListener('mouseover', function() {
//     modal.style.display = 'block';
//     modalImg.src = this.src;
// });

//   displayedImage.addEventListener('mouseout', function() {
//     modal.style.display = 'none';
// });

//   closeBtn.addEventListener('click', function() {
//     modal.style.display = 'none';
// });