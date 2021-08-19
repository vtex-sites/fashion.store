module.exports = {
  'product.summary': {
    sourceWidth: 480,
    aspectRatio: 1,
    breakpoints: [250, 360, 480],
    options: {
      fitIn: true,
    },
  },
  'product.details': {
    sourceWidth: 720,
    aspectRatio: 1,
    breakpoints: [250, 360, 480, 720],
    layout: 'constrained',
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
}
