import { BookOpen, Package, CheckCircle, Heart, Sparkles } from "lucide-react";

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
    name: "Classic FantasyBox",
    desc: "The essential reading experience with all the cozy details",
    includes: [
      "Your chosen book",
      "Bookmark",
      "Index flags",
      "Sticky notes",
      "Special pen",
      "Quote postcard",
    ],
    img: img2,
    footerNote: "Final price depends on the selected book and shipping",
    buttonText: "Request this box",
  },
  {
    name: "Cozy FantasyBox",
    desc: "Enhanced comfort with extra warmth and aesthetic touches",
    includes: [
      "Everything in Classic",
      "Knitted book sleeve",
      "Thematic candle",
      "Extra stationery",
    ],
    img: img3,
    footerNote: "Final price depends on the selected book and shipping",
    buttonText: "Request this box",
  },
  {
    name: "Set of BookMarks",
    desc: "Curated collection of handmade bookmarks",
    includes: [
      "3 unique bookmarks",
      "Various styles and materials",
      "Gift-ready packaging",
    ],
    img: img4,
    footerNote: "Final price depends on the shipping",
    buttonText: "Request this set",
  },
  {
    name: "Knitted Sleeve",
    desc: "Handmade sleeve for your book or e-reader",
    includes: [
      "Custom fit",
      "Cozy knit material",
      "Choice of colors",
    ],
    img: img5,
    footerNote: "Final price depends on the shipping",
    buttonText: "Request this sleeve",
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

export const insideItems = [
  {
    icon: BookOpen,
    text: "Book chosen by you",
  },
  {
    icon: Sparkles,
    text: "Handmade bookmark",
  },
  {
    icon: Heart,
    text: "Index flags",
  },
  {
    icon: Package,
    text: "Transparent sticky notes",
  },
  {
    icon: BookOpen,
    text: "Special pen",
  },
  {
    icon: Heart,
    text: "Quote postcard",
  },
  {
    icon: Sparkles,
    text: "Thematic extras",
  },
  {
    icon: Package,
    text: "Careful packaging",
  },
];

export const faqs = [
  {
    q: "Is FantasyBox a subscription?",
    a: "No, you buy only when you want. There is no recurring subscription.",
  },
  {
    q: "Can I choose the book?",
    a: "Yes! You choose the book you want, and we build the perfect cozy experience around it.",
  },
  {
    q: "Why do I need to fill out a form?",
    a: "The final price depends on your chosen book and shipping destination. We calculate a personalized price for you.",
  },
  {
    q: "Can I buy it as a gift?",
    a: "Absolutely! FantasyBox is designed to be the perfect gift for book lovers.",
  },
];