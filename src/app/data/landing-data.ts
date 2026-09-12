

import classicBoxFull from "../../imports/classicFantasyBoxOrange.webp";
import classicBox480 from "../../imports/classicFantasyBoxOrange-480.webp";
import classicBox768 from "../../imports/classicFantasyBoxOrange-768.webp";
import classicBox1024 from "../../imports/classicFantasyBoxOrange-1024.webp";
import cozyBoxFull from "../../imports/cozyFantasyBoxBlue.webp";
import cozyBox480 from "../../imports/cozyFantasyBoxBlue-480.webp";
import cozyBox768 from "../../imports/cozyFantasyBoxBlue-768.webp";
import cozyBox1024 from "../../imports/cozyFantasyBoxBlue-1024.webp";
import bookmarksFull from "../../imports/set front.webp";
import bookmarks480 from "../../imports/set front-480.webp";
import bookmarks768 from "../../imports/set front-768.webp";
import bookmarks1024 from "../../imports/set front-1024.webp";
import bookSleeveFull from "../../imports/bookSleeve.webp";
import bookSleeve480 from "../../imports/bookSleeve-480.webp";
import bookSleeve768 from "../../imports/bookSleeve-768.webp";
import bookSleeve1024 from "../../imports/bookSleeve-1024.webp";
import sleeveBlackWhiteFull from "../../imports/fundas Pequenas VMB-BGN.webp";
import sleeveBlackWhite480 from "../../imports/fundas Pequenas VMB-BGN-480.webp";
import sleeveBlackWhite768 from "../../imports/fundas Pequenas VMB-BGN-768.webp";
import sleeveBlackWhite1024 from "../../imports/fundas Pequenas VMB-BGN-1024.webp";
import sleeveRedWhiteFull from "../../imports/bookSleeve roja.webp";
import sleeveRedWhite480 from "../../imports/bookSleeve roja-480.webp";
import sleeveRedWhite768 from "../../imports/bookSleeve roja-768.webp";
import sleeveRedWhite1024 from "../../imports/bookSleeve roja-1024.webp";
import coverPinkGreenFull from "../../imports/BookCover RVB.webp";
import coverPinkGreen480 from "../../imports/BookCover RVB-480.webp";
import coverPinkGreen768 from "../../imports/BookCover RVB-768.webp";
import coverPinkGreen1024 from "../../imports/BookCover RVB-1024.webp";
import sleeveKindleFull from "../../imports/funda kindle VMB.webp";
import sleeveKindle480 from "../../imports/funda kindle VMB-480.webp";
import sleeveKindle768 from "../../imports/funda kindle VMB-768.webp";
import sleeveKindle1024 from "../../imports/funda kindle VMB-1024.webp";

export interface ResponsiveImage {
  src: string;
  srcSet: string;
  fullSrc: string;
  width: number;
  height: number;
}

function createResponsiveImage(
  fullSrc: string,
  src480: string,
  src768: string,
  src1024: string,
  width: number,
  height: number,
): ResponsiveImage {
  return {
    src: src1024,
    srcSet: `${src480} 480w, ${src768} 768w, ${src1024} 1024w`,
    fullSrc,
    width,
    height,
  };
}

const classicBoxImage = createResponsiveImage(
  classicBoxFull,
  classicBox480,
  classicBox768,
  classicBox1024,
  3072,
  4096,
);
const cozyBoxImage = createResponsiveImage(
  cozyBoxFull,
  cozyBox480,
  cozyBox768,
  cozyBox1024,
  3071,
  4096,
);
const bookmarksImage = createResponsiveImage(
  bookmarksFull,
  bookmarks480,
  bookmarks768,
  bookmarks1024,
  3072,
  4096,
);
const bookSleeveImage = createResponsiveImage(
  bookSleeveFull,
  bookSleeve480,
  bookSleeve768,
  bookSleeve1024,
  4096,
  3072,
);
const sleeveBlackWhiteImage = createResponsiveImage(
  sleeveBlackWhiteFull,
  sleeveBlackWhite480,
  sleeveBlackWhite768,
  sleeveBlackWhite1024,
  3072,
  4096,
);
const sleeveRedWhiteImage = createResponsiveImage(
  sleeveRedWhiteFull,
  sleeveRedWhite480,
  sleeveRedWhite768,
  sleeveRedWhite1024,
  2772,
  3697,
);
const coverPinkGreenImage = createResponsiveImage(
  coverPinkGreenFull,
  coverPinkGreen480,
  coverPinkGreen768,
  coverPinkGreen1024,
  3072,
  4096,
);
const sleeveKindleImage = createResponsiveImage(
  sleeveKindleFull,
  sleeveKindle480,
  sleeveKindle768,
  sleeveKindle1024,
  3072,
  4096,
);

export interface ProductContentItem {
  icon: string;
  title: string;
  description: string;
  details?: string[];
}

export interface ProductContents {
  title: string;
  items: ProductContentItem[];
  importantTitle: string;
  importantText: string[];
}

export interface Product {
  name: string;
  productType?: string;
  desc: string;
  price?: string;
  includes: string[];
  img: ResponsiveImage;
  footerNote?: string;
  buttonText?: string;
  contents?: ProductContents;
}

const importantPurchaseInformation = {
  importantTitle: "contentDialog.important.title",
  importantText: [
    "contentDialog.important.notIncluded",
    "contentDialog.important.pricing",
  ],
};

export const products: Product[] = [
  {
    name: "classicBox.name",
    desc: "classicBox.desc",
    price: "classicBox.price",
    includes: [
      "contentDialog.classic.items.sleeve.title",
      "contentDialog.classic.items.bookmark.title",
      "contentDialog.classic.items.annotationKit.title",
      "contentDialog.classic.items.cornerProtectors.title",
      "contentDialog.classic.items.stickers.title",
      "contentDialog.classic.items.specialGifts.title",
    ],
    img: classicBoxImage,
    footerNote: "footerNote",
    buttonText: "buttonText",
    contents: {
      title: "contentDialog.classic.title",
      items: [
        {
          icon: "🧶",
          title: "contentDialog.classic.items.sleeve.title",
          description: "contentDialog.classic.items.sleeve.description",
        },
        {
          icon: "🔖",
          title: "contentDialog.classic.items.bookmark.title",
          description: "contentDialog.classic.items.bookmark.description",
        },
        {
          icon: "📝",
          title: "contentDialog.classic.items.annotationKit.title",
          description: "contentDialog.classic.items.annotationKit.description",
          details: [
            "contentDialog.classic.items.annotationKit.details.highlighter",
            "contentDialog.classic.items.annotationKit.details.transparentNotes",
            "contentDialog.classic.items.annotationKit.details.indexFlags",
            "contentDialog.classic.items.annotationKit.details.gelPen",
            "contentDialog.classic.items.annotationKit.details.coloredPencil",
          ],
        },
        {
          icon: "⭐",
          title: "contentDialog.classic.items.cornerProtectors.title",
          description: "contentDialog.classic.items.cornerProtectors.description",
        },
        {
          icon: "🎀",
          title: "contentDialog.classic.items.stickers.title",
          description: "contentDialog.classic.items.stickers.description",
        },
        {
          icon: "💌",
          title: "contentDialog.classic.items.specialGifts.title",
          description: "contentDialog.classic.items.specialGifts.description",
        },
      ],
      ...importantPurchaseInformation,
    },
  },
  {
    name: "cozyBox.name",
    desc: "cozyBox.desc",
    price: "cozyBox.price",
    includes: [
      "cozyBox.includes.everything",
      "contentDialog.cozy.items.candle.title",
      "contentDialog.cozy.items.readingJournal.title",
      "contentDialog.cozy.items.specialGifts.title",
    ],
    img: cozyBoxImage,
    footerNote: "footerNote",
    buttonText: "buttonText",
    contents: {
      title: "contentDialog.cozy.title",
      items: [
        {
          icon: "🧶",
          title: "contentDialog.cozy.items.classicContents.title",
          description: "contentDialog.cozy.items.classicContents.description",
          details: [
            "contentDialog.classic.items.sleeve.title",
            "contentDialog.classic.items.bookmark.title",
            "contentDialog.classic.items.annotationKit.details.highlighter",
            "contentDialog.classic.items.annotationKit.details.transparentNotes",
            "contentDialog.classic.items.annotationKit.details.indexFlags",
            "contentDialog.classic.items.annotationKit.details.gelPen",
            "contentDialog.classic.items.annotationKit.details.coloredPencil",
            "contentDialog.classic.items.cornerProtectors.title",
            "contentDialog.classic.items.stickers.title",
          ],
        },
        {
          icon: "🕯️",
          title: "contentDialog.cozy.items.candle.title",
          description: "contentDialog.cozy.items.candle.description",
        },
        {
          icon: "📖",
          title: "contentDialog.cozy.items.readingJournal.title",
          description: "contentDialog.cozy.items.readingJournal.description",
        },
        {
          icon: "💌",
          title: "contentDialog.cozy.items.specialGifts.title",
          description: "contentDialog.cozy.items.specialGifts.description",
        },
      ],
      ...importantPurchaseInformation,
    },
  },
  {
    name: "bookmarks.name",
    // Keep the Google Apps Script routing value independent of the display title.
    productType: "BookMarks",
    desc: "bookmarks.desc",
    price: "bookmarks.price",
    includes: [
      "bookmarks.includes.collection",
      "bookmarks.includes.styles",
      "bookmarks.includes.packaging",
    ],
    img: bookmarksImage,
    footerNote: "bookmarks.footerNote",
    buttonText: "bookmarks.buttonText",
  },
  {
    name: "sleeve.name",
    desc: "sleeve.desc",
    price: "sleeve.price",
    includes: [
      "sleeve.includes.fit",
      "sleeve.includes.material",
      "sleeve.includes.colors",
    ],
    img: bookSleeveImage,
    footerNote: "footerNote",
    buttonText: "sleeve.buttonText",
  },
];

export interface FinishedProduct {
  name: string;
  productType: string;
  price: string;
  colorName: string;
  colorValue: string;
  img: ResponsiveImage;
}

export const finishedProducts: FinishedProduct[] = [
  {
    name: "finishedProducts.BlackAndWhite.name",
    productType: "finishedProducts.BlackAndWhite.productType",
    price: "finishedProducts.BlackAndWhite.price",
    colorName: "finishedProducts.BlackAndWhite.colorName",
    colorValue: "#7D7D7D",
    img: sleeveBlackWhiteImage,
  },
  {
    name: "finishedProducts.sleeveRedWhite.name",
    productType: "finishedProducts.sleeveRedWhite.productType",
    price: "finishedProducts.sleeveRedWhite.price",
    colorName: "finishedProducts.sleeveRedWhite.colorName",
    colorValue: "#4F6F52",
    img: sleeveRedWhiteImage,
  },
  {
    name: "finishedProducts.PinkGreenCover.name",
    productType: "finishedProducts.PinkGreenCover.productType",
    price: "finishedProducts.PinkGreenCover.price",
    colorName: "finishedProducts.PinkGreenCover.colorName",
    colorValue: "#6B3FA0",
    img: coverPinkGreenImage,
  },
  {
    name: "finishedProducts.kindleVmb.name",
    productType: "finishedProducts.kindleVmb.productType",
    price: "finishedProducts.kindleVmb.price",
    colorName: "finishedProducts.kindleVmb.colorName",
    colorValue: "#7D6A9B",
    img: sleeveKindleImage,
  },
];
