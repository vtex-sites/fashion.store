module.exports = {
  'carousel.desktop': {
    sourceWidth: 3840,
    aspectRatio: 3330 / 1850,
    breakpoints: [1024, 1366, 1920, 3840],
    backgroundColor: '#dddddd',
    layout: 'fullWidth',
    options: {
      fitIn: true,
    },
  },
  'carousel.mobile': {
    sourceWidth: 720,
    aspectRatio: 411 / 576,
    breakpoints: [250, 360, 480, 720],
    backgroundColor: '#dddddd',
    layout: 'fullWidth',
    options: {
      fitIn: true,
    },
  },
  'home.bag': {
    sourceWidth: 344,
    aspectRatio: 1,
    breakpoints: [344],
    layout: 'constrained',
    options: {
      fitIn: true,
    },
  },
  'home.collection': {
    sourceWidth: 704,
    aspectRatio: 704 / 620,
    breakpoints: [704],
    layout: 'fullWidth',
    options: {
      fitIn: true,
    },
  },
  'home.chooseRight': {
    sourceWidth: 592,
    aspectRatio: 592 / 640,
    breakpoints: [592],
    layout: 'constrained',
    options: {
      fitIn: true,
    },
  },
  'home.chooseLeft': {
    sourceWidth: 384,
    aspectRatio: 384 / 500,
    breakpoints: [384],
    layout: 'constrained',
    options: {
      fitIn: true,
    },
  },
  'collectionBanner.mobile': {
    sourceWidth: 720,
    aspectRatio: 360 / 424,
    breakpoints: [360, 480, 720],
    layout: 'fullWidth',
  },
  'collectionBanner.desktop': {
    sourceWidth: 1920,
    aspectRatio: 1366 / 480,
    breakpoints: [1024, 1366, 1920],
    layout: 'fullWidth',
    options: {
      fitIn: true,
    },
  },
  'home.logo': {
    sourceWidth: 200,
    aspectRatio: 10,
    layout: 'constrained',
    breakpoints: [150, 200],
    options: {
      fitIn: true,
    },
  },
  'galleryImage.desktop': {
    sourceWidth: 1000,
    aspectRatio: 1000 / 1177,
    breakpoints: [250, 360, 480, 720, 1000],
    layout: 'fullWidth',
    backgroundColor: '#dddddd',
    options: {
      fitIn: true,
    },
  },
  'galleryImage.mobile': {
    sourceWidth: 360,
    aspectRatio: 360 / 424,
    breakpoints: [250, 360, 480, 720],
    layout: 'fullWidth',
    backgroundColor: '#dddddd',
    options: {
      fitIn: true,
    },
  },
}
