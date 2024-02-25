// Array of features
const features = [
  'Feature 1',
  'Feature 2',
  'Feature 3',
  'Feature 4'
];

// Function to populate the features list
function populateFeatures() {
  const featureList = document.getElementById('feature-list');
  features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featureList.appendChild(li);
  });
}

// Array of testimonials
const testimonials = [
  {
    name: 'Testimonial 1',
    content: 'This is the content of the first testimonial.',
    image: 'path/to/image1.jpg'
  },
  {
    name: 'Testimonial 2',
    content: 'This is the content of the second testimonial.',
    image: 'path/to/image2.jpg'
  },
  {
    name: 'Testimonial 3',
    content: 'This is the content of the third testimonial.',
    image: 'path/to/image3.jpg'
  }
];

// Function to populate the testimonials collection
function populateTestimonials() {
  const testimonialCollection = document.getElementById('testimonial-collection');
  testimonials.forEach(testimonial => {
    const div = document.createElement('div');
    div.classList.add('testimonial');

    const img = document.createElement('img');
    img.src = testimonial.image;
    div.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = testimonial.name;
    div.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = testimonial.content;
    div.appendChild(p);

    testimonialCollection.appendChild(div);
  });
}

// Call the functions to populate the features and testimonials sections
populateFeatures();
populateTestimonials();