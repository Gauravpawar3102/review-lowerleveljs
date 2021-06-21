const reviewElement = document.querySelector('#reviewElem');
const profile = document.querySelector('.image');
const Name = document.querySelector('.name');
const job = document.querySelector('.role');

// buttons
const previousbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');
const surprisebtn = document.querySelector('.surprise');

let count = 0;
const reviews = [
  {
    id: 1,
    name: 'gaurav pawar',
    job: 'web developer',
    img: './image1.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: './image2.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: './image3.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
];

window.addEventListener('DOMContentLoaded', function () {
  showperson(count);
});

function showperson(person) {
  const item = reviews[person];
  profile.src = item.img;
  Name.textContent = item.name;
  job.textContent = item.job;
  reviewElement.textContent = item.text;
}

previousbtn.addEventListener('click', function () {
  count--;
  if (count < 0) {
    count = reviews.length - 1;
  }
  showperson(count);
});

surprisebtn.addEventListener('click', function () {
  random = Math.floor(Math.random() * reviews.length);
  count = random;
  showperson(count);
});

nextbtn.addEventListener('click', function () {
  count++;
  if (count > reviews.length - 1) {
    count = 0;
  }
  showperson(count);
});
