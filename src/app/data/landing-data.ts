import { BookOpen, Package, CheckCircle } from "lucide-react";

import img2 from "../../imports/IMG_20260326_014023.jpg";
import img3 from "../../imports/IMG_20260416_230542.jpg";
import img4 from "../../imports/IMG_20260429_170011.jpg";
import img5 from "../../imports/IMG_20260104_124854.jpg";
import img6 from "../../imports/cozy beige.jpg";
import img7 from "../../imports/dark academia.jpg";
import img8 from "../../imports/vintage coffee.jpg";
import img9 from "../../imports/soft cream.jpg";
import img10 from "../../imports/Old.jpg";

export const steps = [
  {
    icon: BookOpen,
    title: "Choose your book",
    desc: "Tell us which book you want to read next",
  },
  {
    icon: Package,
    title: "Pick your box style",
    desc: "Select from our curated box options and add extras",
  },
  {
    icon: CheckCircle,
    title: "Get your price",
    desc: "Fill out the form to receive the final price with shipping",
  },
];

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
      "classicBox.includes.postcard",
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
      "cozyBox.includes.sleeve",
      "cozyBox.includes.candle",
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

export const aesthetics = [
  {
    name: "Cozy Beige",
    color: "#F9DBBD",
    img: img6,
  },
  {
    name: "Dark Academy",
    color: "#432818",
    img: img7,
  },
  {
    name: "Vintage Coffee",
    color: "#99582A",
    img: img8,
  },
  {
    name: "Soft Cream",
    color: "#FDF0D5",
    img: img9,
  },
  {
    name: "Old Library",
    color: "#7F4F24",
    img: img10,
  },
];
