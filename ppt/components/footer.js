const { THEME } = require("./theme");
const { FONTS } = require("./fonts");

function drawFooter(slide, text = "") {
  slide.addText(text, {
    x: 0.65,
    y: 7.08,
    w: 6,
    h: 0.18,
    fontFace: FONTS.family.body,
    fontSize: FONTS.size.tiny,
    color: THEME.colors.muted,
  });

  slide.addText("elisence.com", {
    x: 10.6,
    y: 7.08,
    w: 2,
    h: 0.18,
    align: "right",
    fontFace: FONTS.family.body,
    fontSize: FONTS.size.tiny,
    color: THEME.colors.primary,
    bold: true,
  });
}

module.exports = { drawFooter };