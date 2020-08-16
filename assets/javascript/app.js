const portfolio = {};

portfolio.galleryImages = [
  {
    id: 1,
    name: "Burleque Quarterly",
    description: "Editorial design",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/bqSquare.jpg`,
      alt: "I am an image",
    },
    image: [
      { id: 0, src: `./assets/images/bq/bqCover.jpg`, alt: "" },
      { id: 1, src: `./assets/images/bq/bqMagazine.jpg`, alt: "" },
    ],
    detail:
      "<p>Magazine design and art direction.</p><p> Photography by Van Habon, models Loretta Jean and Henrietta VIII</p>",
  },
  {
    id: 2,
    name: "Cabriole",
    description: "Art nouveau poster",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/cabrioleSquare.jpg`,
      alt: "",
    },
    image: [
      {
        id: 0,
        src: `./assets/images/illustration/cabriole.jpg`,
        alt: "",
      },
    ],
    detail: "<p></p>",
  },
  {
    id: 3,
    name: "Chihuahua",
    description: "Infographic",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/chihuahua.jpg`,
      alt: "",
    },
    image: [{ id: 0, src: `./assets/images/square/chihuahua.jpg`, alt: "" }],
    alt: "",
    detail: "<p></p>",
  },
  {
    id: 4,
    name: "The Colour of Magic",
    description: "Book cover design",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/colourOfMagicSquare.jpg`,
      alt: "",
    },
    image: [
      {
        id: 0,
        src: `./assets/images/discworld/colourOfMagic.jpg`,
        alt: "",
      },
    ],
    detail: "<p></p>",
  },
  {
    id: 5,
    name: "The Etomology of Entomology",
    description: "Book design",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/entomologySquare.jpg`,
      alt: "",
    },
    image: [
      { id: 0, src: `./assets/images/entomology/entomologyCover.jpg`, alt: "" },
      {
        id: 1,
        src: `./assets/images/entomology/entomologyInside.jpg`,
        alt: "",
      },
    ],
    detail: "<p>A new cover design for a classic novel.</p>",
  },
  {
    id: 6,
    name: "March Hare",
    description: "Branding and package design",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/marchSquare.jpg`,
      alt: "alt text",
    },
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/marchSquare.jpg`,
      alt: "alt text",
    },
    image: [
      { id: 0, src: `./assets/images/marchHare/marchChai.jpg`, alt: "" },
      { id: 1, src: `./assets/images/marchHare/marchEarlGrey.jpg`, alt: "" },
      { id: 2, src: `./assets/images/marchHare/marchGreen.jpg`, alt: "" },
      { id: 3, src: `./assets/images/marchHare/marchRooibos.jpg`, alt: "" },
      { id: 4, src: `./assets/images/marchHare/marchHareMockup.jpg`, alt: "" },
    ],
    alt: "",
    detail:
      "<p>Branding and packaging for a tea company, with original illustrated logo.</p>",
  },
  {
    id: 7,
    name: "Saturnalia",
    description: "Event poster",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/saturnaliaSquare.jpg`,
      alt: "",
    },
    image: [
      { id: 0, src: `./assets/images/illustration/saturnalia.jpg`, alt: "" },
    ],
    detail:
      "<p>A hand-illustrated poster inspired by the Art Nouveau movement.</p><p>Model: Loretta Jean.</p>",
  },
  {
    id: 8,
    name: "Sirensong",
    description: "Illustration",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/sirenSquare.jpg`,
      alt: "",
    },
    image: [{ id: 0, src: `./assets/images/illustration/siren.jpg`, alt: "" }],
    detail: "<p></p>",
  },
  {
    id: 9,
    name: "Soaperific",
    description: "Logo and label design",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/soaperificJarSquare.jpg`,
      alt: "",
    },
    image: [
      { id: 0, src: `./assets/images/soaperific/soaperificJar.jpg`, alt: "" },
      { id: 1, src: `./assets/images/soaperific/soaperificLogo.png`, alt: "" },
    ],
    detail: "<p>Design for an independent skincare company.</p>",
  },
  {
    id: 10,
    name: "Sparrow Queen Tarot",
    description: "Logo and branding",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/sparrow.jpg`,
      alt: "",
    },
    image: [
      { id: 0, src: `./assets/images/sparrow/sparrowqueenMockup.jpg`, alt: "" },
      { id: 1, src: `./assets/images/sparrow/sqCoa.jpg`, alt: "" },
      { id: 2, src: `./assets/images/sparrow/sqEnamel.png`, alt: "" },
      { id: 3, src: `./assets/images/sparrow/sqEordmark.jpg`, alt: "" },
      { id: 4, src: `./assets/images/sparrow/sqTote.jpg`, alt: "" },
    ],
    detail:
      '<p>Logo and branding for a personal tarot reading service.</p><p>Hand-drawn "coat of arms" version plus wordmark with hand-crafted typeface.</p>',
  },
  {
    id: 11,
    name: "Stupid Buck",
    description: "Illustration",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/ysfdeerSquare.jpg`,
      id: "",
    },
    image: [
      { id: 0, src: `./assets/images/illustration/ysfdeer.jpg`, alt: "" },
    ],
    detail: "<p>Traditional illustration, done with markers.</p>",
  },
  {
    id: 12,
    name: "Toronto Zoo",
    description: "Billboard design",
    mainGalleryImage: {
      id: 0,
      src: `./assets/images/square/zooBillboardSquare.jpg`,
      alt: "",
    },
    image: [
      { id: 0, src: `./assets/images/ad/zooBillboard.jpg`, alt: "" },
      { id: 1, src: `./assets/images/ad/zooBus.jpg`, alt: "" },
    ],
    detail: "<p>Bus and billboard ads for Toronto Zoo</p>",
  },
];

//  *********** DO NOT CHANGE ANYTHING BELOW THIS LINE *************

// NAVIGATION SLIDER
portfolio.navSlide = () => {
  const burger = $(".nav__burger");
  const nav = $(".nav__navbar");
  const li = $(".nav__navbar li");

  burger.on("click", () => {
    nav.toggleClass("nav__navbarActive");
  });

  li.on("click", () => {
    nav.removeClass("nav__navbarActive");
  });
};

// SMOOTH SCROLL FUNCTION
portfolio.smoothScroll = () => {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        // GET HEIGHT OF FIXED HEADER TO SET PAGE OFFSET
        const headerHeight = $("nav").height();

        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - headerHeight,
            },
            1000
          );
        }
      }
    });
};

// DISPLAY MAIN IMAGES ON PAGE
portfolio.galleryDisplay = () => {
  const images = portfolio.galleryImages;
  // LOOP OVER THE IMAGES IN THE ARRAY AND APPEND
  for (let i = 0; i < images.length; i++) {
    $(".work__gallery").append(`
    <div class="galleryImageContainer">
      <img src=${images[i].mainGalleryImage.src} alt=${images[i].alt} class="galleryImage" />
      <div class="galleryHover" id=${images[i].id}>
        <div class="imageInfoContainer">
          <div class="imageInfo">
            <h4>${images[i].name}</h4>
            <p>${images[i].description}</p>
          </div>
        </div>
      </div>
    </div>

        `);
  }
  portfolio.imageDetailsPage();
};

// DISPLAY DETAILS OF IMAGE THAT HAS BEEN CLICKED FROM MAIN GALLERY
portfolio.imageDetailsPage = () => {
  // GRAB ID OF IMAGE THAT HAS BEEN CLICKED
  $(".galleryImageContainer").on("click", (e) => {
    let num;
    if (e.target.id) {
      num = e.target.id;
    } else {
      num = e.target.offsetParent.id;
    }

    const id = parseInt(num);
    const images = portfolio.galleryImages;
    let name;
    let description;
    let mainImage;
    let src;
    let alt;

    // LOOP OVER AND GRAB INFO
    for (let i = 0; i < images.length; i++) {
      if (id == images[i].id) {
        name = images[i].name;
        description = images[i].description;
        mainImage = images[i].image[0].src;
        src = images[i].image;
        alt = images[i].alt;
        detail = images[i].detail;
      }
    }

    // APPEND THE GATHERED INFO
    $(".modal__mainProductImage").append(
      `<img src=${mainImage} alt="${alt}" />`
    );

    portfolio.alternativeImages(src);
    $(".modal__writtenContent").append(
      `<h4>${name}</h4>
      <h5>${description}</h5>
      <div>${detail}</div>`
    );
  });
};

// INITIATE MODAL TO DISPLAY IMAGE DETAILS
portfolio.modal = () => {
  // GET THE MODAL AND IMAGE CLICKED
  const modal = $("#modal");
  const btn = $(".galleryImageContainer");

  // Get the <span> element that closes the modal
  const span = $(".modal__close");

  // When the user clicks on the button, open the modal
  btn.on("click", () => {
    modal.css("display", "block");
  });

  // When the user clicks on <span> (x), close the modal
  span.on("click", () => {
    modal.css("display", "none");
    $(".modal__mainProductImage").empty();
    $(".modal__altImages").empty();
    $(".modal__writtenContent").empty();
  });

  // wHEN THE USER CLICKS OUTSIDE THE MODAL, CLOSE
  $("window").on("click", (e) => {
    if (event.target == modal) {
      modal.css("display", "none");
      $(".modal__mainProductImage").empty();
      $(".modal__altImages").empty();
      $(".modal__writtenContent").empty();
    }
  });
};

// LOOP OVER AND DISPLAY ALTERNATIVE IMAGES
portfolio.alternativeImages = (src) => {
  const altImageArray = [];

  for (let i = 0; i < src.length; i++) {
    const altImageSrc = src[i];
    altImageArray.push(altImageSrc);
  }

  // APPEND IMAGES TO PAGE
  if (!(altImageArray.length > 1)) {
    $(".modal__altImages").hide();
  } else {
    altImageArray.forEach((image) => {
      $(".modal__altImages").append(`
      <div class="page__imageContainer modal__altImage"">
      <img src=${image.src} alt="${image.alt}"  id=${image.id} />
      </div>`);
    });
    $(".modal__altImages").show();
  }

  portfolio.changeImage(altImageArray);
};

// CHANGE IMAGE IN MODAL
portfolio.changeImage = (arr) => {
  $(".modal__altImage").on("click", (e) => {
    e.preventDefault();
    imageID = e.target.id;
    for (let i = 0; i < arr.length; i++) {
      if (imageID == arr[i].id) {
        image = arr[i];
        $(".modal__mainProductImage").empty().append(
          `<div class="page__imageContainer modal__altImage">
          <img src=${image.src} alt="" id=${image.id} />
          </div>`
        );
      }
    }
  });
};

portfolio.init = () => {
  portfolio.smoothScroll();
  portfolio.navSlide();
  portfolio.galleryDisplay();
  portfolio.modal();
};

$(() => {
  portfolio.init();
});
