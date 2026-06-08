

import img2 from "../../imports/classicFantasyBoxOrange.jpg";
import img3 from "../../imports/cozyFantasyBoxBlue.jpg";
import img4 from "../../imports/bookmarksSet.jpg";
import img5 from "../../imports/bookSleeve.jpg";
import sleevePinkWhite from "../../imports/bookSleeve rosa.jpg";
import sleeveRedWhite from "../../imports/bookSleeve roja.jpg";
import coverPinkGreen from "../../imports/BookCover RVB.jpg";
import sleeveKindle from "../../imports/funda kindle VMB.jpg";


export const products = [
  {
    name: "classicBox.name",
    desc: "classicBox.desc",
    includes: [
      "classicBox.includes.book",
      "classicBox.includes.bookmark",
      "classicBox.includes.indexFlags",
      "classicBox.includes.stickyNotes",
      "classicBox.includes.pen",
      "classicBox.includes.bookSleeve",
    ],
    img: img2,
    footerNote: "footerNote",
    buttonText: "buttonText",
  },
  {
    name: "cozyBox.name",
    desc: "cozyBox.desc",
    includes: [
      "cozyBox.includes.everything",
      "cozyBox.includes.candle",
      "cozyBox.includes.journal",
      "cozyBox.includes.stationery",
    ],
    img: img3,
    footerNote: "footerNote",
    buttonText: "buttonText",
  },
  {
    name: "bookmarks.name",
    desc: "bookmarks.desc",
    includes: [
      "bookmarks.includes.collection",
      "bookmarks.includes.styles",
      "bookmarks.includes.packaging",
    ],
    img: img4,
    footerNote: "footerNote",
    buttonText: "buttonText",
  },
  {
    name: "sleeve.name",
    desc: "sleeve.desc",
    includes: [
      "sleeve.includes.fit",
      "sleeve.includes.material",
      "sleeve.includes.colors",
    ],
    img: img5,
    footerNote: "footerNote",
    buttonText: "buttonText",
  },
];

export interface FinishedProduct {
  name: string;
  productType: string;
  price: string;
  colorName: string;
  colorValue: string;
  img: string;
}

export const finishedProducts: FinishedProduct[] = [
  {
    name: "finishedProducts.PinkAndWhite.name",
    productType: "finishedProducts.PinkAndWhite.productType",
    price: "finishedProducts.PinkAndWhite.price",
    colorName: "finishedProducts.PinkAndWhite.colorName",
    colorValue: "#8A4D7D",
    img: sleevePinkWhite,
  },
  {
    name: "finishedProducts.sleeveRedWhite.name",
    productType: "finishedProducts.sleeveRedWhite.productType",
    price: "finishedProducts.sleeveRedWhite.price",
    colorName: "finishedProducts.sleeveRedWhite.colorName",
    colorValue: "#4F6F52",
    img: sleeveRedWhite,
  },
  {
    name: "finishedProducts.PinkGreenCover.name",
    productType: "finishedProducts.PinkGreenCover.productType",
    price: "finishedProducts.PinkGreenCover.price",
    colorName: "finishedProducts.PinkGreenCover.colorName",
    colorValue: "#6B3FA0",
    img: coverPinkGreen,
  },
  {
    name: "finishedProducts.kindleVmb.name",
    productType: "finishedProducts.kindleVmb.productType",
    price: "finishedProducts.kindleVmb.price",
    colorName: "finishedProducts.kindleVmb.colorName",
    colorValue: "#7D6A9B",
    img: sleeveKindle,
  },
];
