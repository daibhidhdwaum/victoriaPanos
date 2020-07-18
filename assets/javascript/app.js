const portfolio = {};

portfolio.galleryImages = [
  {
    name: "Burleque Quarterly",
    description: "Editorial design",
    src: `./assets/images/square/bqSquare.jpg`,
    alt: "Burlesque show poster",
  },
  {
    name: "Cabriole",
    description: "Art nouveau poster",
    src: `./assets/images/square/cabrioleSquare.jpg`,
    alt: "",
  },
  {
    name: "Chihuahua",
    description: "Infographic",
    src: `./assets/images/square/chihuahua.jpg`,
    alt: "",
  },
  {
    name: "The Colour of Magic",
    description: "Book cover design",
    src: `./assets/images/square/colourOfMagicSquare.jpg`,
    alt: "",
  },
  {
    name: "The Etomology of Entomology",
    description: "Book design",
    src: `./assets/images/square/entomologySquare.jpg`,
    alt: "",
  },
  {
    name: "March Hare",
    description: "Branding and package design",
    src: `./assets/images/square/marchSquare.jpg`,
    alt: "",
  },
  {
    name: "Saturnalia",
    description: "Event poster",
    src: `./assets/images/square/saturnaliaSquare.jpg`,
    alt: "",
  },
  {
    name: "Sirensong",
    description: "Illustration",
    src: `./assets/images/square/sirenSquare.jpg`,
    alt: "",
  },
  {
    name: "Soaperific",
    description: "Logo and label design",
    src: `./assets/images/square/soaperificJarSquare.jpg`,
    alt: "",
  },
  {
    name: "Sparrow Queen Tarot",
    description: "Logo and branding",
    src: `./assets/images/square/sparrow.jpg`,
    alt: "",
  },
  {
    name: "Stupid Buck",
    description: "Illustration",
    src: `./assets/images/square/ysfdeerSquare.jpg`,
    alt: "",
  },
  {
    name: "Toronto Zoo",
    description: "Billboard design",
    src: `./assets/images/square/zooBillboardSquare.jpg`,
    alt: "",
  },
];

// function to display images on page
portfolio.galleryDisplay = () => {
  const images = portfolio.galleryImages;

  // loop over images array and append them to the gallery
  for (let i = 0; i < images.length; i++) {
    $(".gallery").append(`
    <div class="galleryImageContainer">
    <img src=${images[i].src} alt=${images[i].alt} class="galleryImage">
    <div class="galleryHover">
     <div class="imageInfoContainer">
         <div class="imageInfo">
          <h4>${images[i].name}</h4>
          <p>${images[i].description}</p>
        </div>
      </div>
    </div>
        `);
  }
};

portfolio.init = () => {
  // $(".stellarnav").stellarNav();
  portfolio.galleryDisplay();
};

$(() => {
  portfolio.init();
});
