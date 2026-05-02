import { useState } from "react";
import { BookOpen, Package, CheckCircle, Heart, Sparkles, ChevronDown } from "lucide-react";
import img1 from "../imports/IMG_20260429_180019.jpg";
import img2 from "../imports/IMG_20260326_014023.jpg";
import img3 from "../imports/IMG_20260416_230542.jpg";
import img4 from "../imports/IMG_20260429_170011.jpg";
import img5 from "../imports/IMG_20260104_124854.jpg";
import img6 from "../imports/IMG_20260416_230542.jpg";
import img7 from "../imports/IMG_20260429_170011.jpg";
import img8 from "../imports/IMG_20260420_134019.jpg";
import img9 from "../imports/IMG_20260429_180008.jpg";
import img10 from "../imports/IMG_20260422_201033_471.jpg";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToForm = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{
      backgroundColor: '#FDF0D5',
      fontFamily: 'Inter, sans-serif',
      color: '#582F0E'
    }}>
      {/* Hero Section */}
      <section className="relative px-5 pt-12 pb-16" style={{ backgroundColor: '#EAE0D5' }}>
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6">
            <BookOpen className="w-12 h-12 mx-auto mb-4" style={{ color: '#99582A' }} />
            <h1 className="mb-2" style={{
              fontFamily: 'Crimson Pro, serif',
              fontSize: '2.5rem',
              color: '#432818',
              lineHeight: '1.2'
            }}>
              FantasyBox
            </h1>
          </div>

          <h2 className="mb-4" style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: '1.75rem',
            color: '#582F0E',
            lineHeight: '1.3'
          }}>
            Your next book deserves a ritual.
          </h2>

          <p className="mb-8 opacity-90" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            Choose your book. We curate the cozy, magical experience around it.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <button
              onClick={scrollToForm}
              className="w-full py-4 px-6 rounded-full transition-all"
              style={{
                backgroundColor: '#99582A',
                color: '#FDF0D5',
                fontSize: '1.0625rem'
              }}
            >
              Request your FantasyBox
            </button>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 px-6 rounded-full transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #99582A',
                color: '#99582A',
                fontSize: '1.0625rem'
              }}
            >
              Explore the boxes
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={img1} alt="FantasyBox with cozy reading items" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-5 py-16">
        <div className="max-w-lg mx-auto">
          <h2 className="text-center mb-12" style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: '2rem',
            color: '#432818'
          }}>
            How it works
          </h2>

          <div className="space-y-8">
            {[
              { icon: BookOpen, title: 'Choose your book', desc: 'Tell us which book you want to read next' },
              { icon: Package, title: 'Pick your box style', desc: 'Select from our curated box options and add extras' },
              { icon: CheckCircle, title: 'Get your price', desc: 'Fill out the form to receive the final price with shipping' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D4A373' }}>
                  <step.icon className="w-6 h-6" style={{ color: '#432818' }} />
                </div>
                <div>
                  <h3 className="mb-1" style={{
                    fontFamily: 'Crimson Pro, serif',
                    fontSize: '1.25rem',
                    color: '#582F0E'
                  }}>
                    {step.title}
                  </h3>
                  <p className="opacity-80">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section id="products" className="px-5 py-16" style={{ backgroundColor: '#F9DBBD' }}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-center mb-12" style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: '2rem',
            color: '#432818'
          }}>
            Explore the boxes
          </h2>

          <div className="space-y-6">
            {[
              {
                name: 'Classic FantasyBox',
                desc: 'The essential reading experience with all the cozy details',
                includes: ['Your chosen book', 'Bookmark', 'Index flags', 'Sticky notes', 'Special pen', 'Quote postcard'],
                img: img2
              },
              {
                name: 'Cozy FantasyBox',
                desc: 'Enhanced comfort with extra warmth and aesthetic touches',
                includes: ['Everything in Classic', 'Knitted book sleeve', 'Thematic candle', 'Extra stationery'],
                img: img3
              },
              {
                name: 'Set of BookMarks',
                desc: 'Curated collection of handmade bookmarks',
                includes: ['5 unique bookmarks', 'Various styles and materials', 'Gift-ready packaging'],
                img: img4
              },
              {
                name: 'Knitted Sleeve',
                desc: 'Handmade sleeve for your book or e-reader',
                includes: ['Custom fit', 'Cozy knit material', 'Choice of colors'],
                img: img5
              }
            ].map((product, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: '#FDF0D5' }}>
                <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="mb-2" style={{
                    fontFamily: 'Crimson Pro, serif',
                    fontSize: '1.5rem',
                    color: '#432818'
                  }}>
                    {product.name}
                  </h3>
                  <p className="mb-4 opacity-80">{product.desc}</p>

                  <div className="mb-4">
                    <p className="mb-2 opacity-70" style={{ fontSize: '0.875rem' }}>Includes:</p>
                    <ul className="space-y-1">
                      {product.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 opacity-80" style={{ fontSize: '0.875rem' }}>
                          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#7F4F24' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mb-4 italic opacity-70" style={{ fontSize: '0.875rem' }}>
                    Final price depends on the selected book and shipping
                  </p>

                  <button
                    onClick={scrollToForm}
                    className="w-full py-3 px-6 rounded-full transition-all"
                    style={{
                      backgroundColor: '#7F4F24',
                      color: '#FDF0D5'
                    }}
                  >
                    Request this box
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color & Style Options */}
      <section className="px-5 py-16">
        <div className="max-w-lg mx-auto">
          <h2 className="text-center mb-4" style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: '2rem',
            color: '#432818'
          }}>
            Choose your aesthetic
          </h2>
          <p className="text-center mb-12 opacity-80">
            Each box can be customized to match your reading mood
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Cozy Beige', color: '#F9DBBD', img: img6 },
              { name: 'Dark Academia', color: '#432818', img: img7 },
              { name: 'Vintage Coffee', color: '#99582A', img: img8 },
              { name: 'Soft Cream', color: '#FDF0D5', img: img9 },
              { name: 'Old Library', color: '#7F4F24', img: img10 }
            ].map((style, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow" style={{ backgroundColor: '#d4a373' }}>
                <div className="aspect-square" style={{ backgroundColor: style.color }}>
                  <img src={style.img} alt={style.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 text-center">
                  <p style={{ fontSize: '0.875rem', color: '#582F0E' }}>{style.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-5 py-16" style={{ backgroundColor: '#EAE0D5' }}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-center mb-12" style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: '2rem',
            color: '#432818'
          }}>
            What's inside the box
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: BookOpen, text: 'Book chosen by you' },
              { icon: Sparkles, text: 'Handmade bookmark' },
              { icon: Heart, text: 'Index flags' },
              { icon: Package, text: 'Transparent sticky notes' },
              { icon: BookOpen, text: 'Special pen' },
              { icon: Heart, text: 'Quote postcard' },
              { icon: Sparkles, text: 'Thematic extras' },
              { icon: Package, text: 'Careful packaging' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl text-center" style={{ backgroundColor: '#FDF0D5' }}>
                <item.icon className="w-8 h-8 mx-auto mb-2" style={{ color: '#99582A' }} />
                <p style={{ fontSize: '0.875rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="px-5 py-20" style={{ backgroundColor: '#D4A373' }}>
        <div className="max-w-md mx-auto text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-6" style={{ color: '#432818' }} />
          <p style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: '1.5rem',
            lineHeight: '1.5',
            color: '#432818'
          }}>
            This is not just a box. It is your moment to disconnect from the world and enter another.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-5 py-16" style={{ backgroundColor: '#F9DBBD' }}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-center mb-12" style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: '2rem',
            color: '#432818'
          }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {[
              {
                q: 'Is FantasyBox a subscription?',
                a: 'No, you buy only when you want. There is no recurring subscription.'
              },
              {
                q: 'Can I choose the book?',
                a: 'Yes! You choose the book you want, and we build the perfect cozy experience around it.'
              },
              {
                q: 'Why do I need to fill out a form?',
                a: 'The final price depends on your chosen book and shipping destination. We calculate a personalized price for you.'
              },
              {
                q: 'Can I buy it as a gift?',
                a: 'Absolutely! FantasyBox is designed to be the perfect gift for book lovers.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden" style={{ backgroundColor: '#FDF0D5' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex justify-between items-center text-left"
                >
                  <span style={{
                    fontFamily: 'Crimson Pro, serif',
                    fontSize: '1.125rem',
                    color: '#582F0E'
                  }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    style={{ color: '#99582A' }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 opacity-80">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="px-5 py-20" style={{ backgroundColor: '#EAE0D5' }}>
        <div className="max-w-md mx-auto text-center">
          <h2 className="mb-4" style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: '2rem',
            color: '#432818'
          }}>
            Ready to build your FantasyBox?
          </h2>
          <p className="mb-8 opacity-80" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            Tell us which book you want and where we should send it. We'll calculate the final price for your personalized box.
          </p>
          <button
            className="w-full py-4 px-8 rounded-full transition-all shadow-lg"
            style={{
              backgroundColor: '#99582A',
              color: '#FDF0D5',
              fontSize: '1.125rem'
            }}
          >
            Fill out the form
          </button>
          <p className="mt-4 opacity-60" style={{ fontSize: '0.875rem' }}>
            We'll respond within 24 hours with your personalized quote
          </p>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 shadow-lg" style={{ backgroundColor: '#432818' }}>
        <button
          onClick={scrollToForm}
          className="w-full max-w-md mx-auto block py-4 px-6 rounded-full transition-all"
          style={{
            backgroundColor: '#D4A373',
            color: '#432818',
            fontSize: '1.0625rem'
          }}
        >
          Request your box
        </button>
      </div>

      {/* Bottom spacing for sticky button */}
      <div className="h-20"></div>
    </div>
  );
}
