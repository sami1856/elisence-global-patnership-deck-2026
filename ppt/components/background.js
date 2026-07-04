const { THEME } = require("./theme");
const { GRID } = require("./grid");

function drawBackground(pptx, slide) {
  slide.background = {
    color: THEME.colors.deepBackground,
  };

  // Main soft dark panel
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.35,
    y: 0.25,
    w: GRID.page.w - 0.7,
    h: GRID.page.h - 0.5,
    fill: { color: THEME.colors.background, transparency: 0 },
    line: { color: THEME.colors.border, transparency: 70, width: 0.5 },
    radius: THEME.radius.lg,
  });

  // Subtle top glow
  slide.addShape(pptx.ShapeType.arc, {
    x: 3.4,
    y: -0.85,
    w: 6.5,
    h: 1.9,
    line: { color: THEME.colors.primary, transparency: 45, width: 2 },
    adjustPoint: 0.5,
  });

  // Subtle bottom glow
  slide.addShape(pptx.ShapeType.arc, {
    x: 4.0,
    y: 6.85,
    w: 5.4,
    h: 1.0,
    line: { color: THEME.colors.teal, transparency: 60, width: 1.4 },
    adjustPoint: 0.5,
  });
}

module.exports = { drawBackground };