const { THEME } = require("./theme");
const { FONTS } = require("./fonts");
const { GRID } = require("./grid");

function drawHeader(slide, title, options = {}) {
  slide.addText(title, {
    x: options.x ?? GRID.content.x,
    y: options.y ?? 0.52,
    w: options.w ?? GRID.content.w,
    h: options.h ?? 0.55,
    fontFace: FONTS.family.title,
    fontSize: options.fontSize ?? FONTS.size.title,
    color: options.color || THEME.colors.white,
    bold: true,
    fit: "shrink",
  });

  if (options.kicker) {
    slide.addText(options.kicker, {
      x: options.x ?? GRID.content.x,
      y: 0.25,
      w: options.w ?? GRID.content.w,
      h: 0.22,
      fontFace: FONTS.family.body,
      fontSize: FONTS.size.tiny,
      color: THEME.colors.primary,
      bold: true,
      fit: "shrink",
    });
  }
}

module.exports = { drawHeader };