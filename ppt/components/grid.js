const GRID = {
  page: {
    w: 13.333,
    h: 7.5,
  },

  safe: {
    x: 0.65,
    y: 0.55,
    w: 12.03,
    h: 6.4,
  },

  content: {
    x: 0.8,
    y: 0.9,
    w: 11.75,
    h: 5.9,
  },

  columns: {
    three: {
      cardW: 3.75,
      gap: 0.25,
    },
    two: {
      cardW: 5.65,
      gap: 0.45,
    },
  },
};

function contentBox() {
  return GRID.content;
}

function safeBox() {
  return GRID.safe;
}

module.exports = { GRID, contentBox, safeBox };