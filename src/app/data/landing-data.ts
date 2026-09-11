

import img2 from "../../imports/classicFantasyBoxOrange.jpg";
import img3 from "../../imports/cozyFantasyBoxBlue.jpg";
import img4 from "../../imports/set front.jpg";
import img5 from "../../imports/bookSleeve.jpg";
import sleeveBlackWhite from "../../imports/fundas Pequenas VMB-BGN.jpg";
import sleeveRedWhite from "../../imports/bookSleeve roja.jpg";
import coverPinkGreen from "../../imports/BookCover RVB.jpg";
import sleeveKindle from "../../imports/funda kindle VMB.jpg";

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
  img: string;
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
    img: img2,
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
    img: img3,
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
    img: img4,
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
    img: img5,
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
  img: string;
}

export const finishedProducts: FinishedProduct[] = [
  {
    name: "finishedProducts.BlackAndWhite.name",
    productType: "finishedProducts.BlackAndWhite.productType",
    price: "finishedProducts.BlackAndWhite.price",
    colorName: "finishedProducts.BlackAndWhite.colorName",
    colorValue: "#7D7D7D",
    img: sleeveBlackWhite,
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
