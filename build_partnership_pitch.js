const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Elisence";
pptx.subject = "Elisence Master Partnership Pitch 2026";
pptx.title = "Elisence Partnership Pitch";
pptx.company = "Elisence Ltd";
pptx.lang = "en-GB";
pptx.theme = {
  headFontFace: "Aptos Display",
  bodyFontFace: "Aptos",
  lang: "en-GB"
};

const slide = pptx.addSlide();
slide.background = { color: "06111F" };

const coverImage = path.join(
  __dirname,
  "..",
  "WhatsApp Image 2026-07-03 at 3.50.06 PM.jpeg"
);

slide.addImage({
  path: coverImage,
  x: 0,
  y: 0,
  w: 13.333,
  h: 7.5
});

slide.addNotes(`
Slide 1 — Cover

Purpose:
Open the conversation with a premium global partnership message.

Core message:
Elisence is building the future of connected digital health and is inviting organisations to partner in that mission.

This is not an investor slide.
This is not a sales slide.
This is the opening slide of the Master Partnership Pitch.
`);

pptx.writeFile({ fileName: path.join(__dirname, "ELISENCE_PARTNERSHIP_PITCH_2026_DRAFT.pptx") });
