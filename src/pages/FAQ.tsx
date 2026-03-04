import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs = [
  {
    category: 'Shipping',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'We offer expedited shipping for all orders. Within Lagos, delivery typically takes 2-5 business days. For orders outside Lagos, please allow 3-7 business days. International shipping times vary by location.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to select international destinations. Shipping costs and delivery times will be calculated at checkout based on your location.'
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order has been dispatched, you will receive a confirmation email with a tracking number. You can use this number to track your package on our courier partner\'s website.'
      }
    ]
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We accept returns within 14 days of delivery for items in their original, unused condition with all tags attached. Please note that personalized items and certain hygiene-sensitive products (like earrings and opened skincare) are non-returnable.'
      },
      {
        question: 'How do I initiate a return?',
        answer: 'To initiate a return, please contact our concierge team via email at concierge@luxevale.com or through WhatsApp. We will guide you through the process and provide a return shipping label if applicable.'
      },
      {
        question: 'When will I receive my refund?',
        answer: 'Refunds are processed within 5-7 business days after we receive and inspect your returned item. The funds will be returned to your original payment method.'
      }
    ]
  },
  {
    category: 'Product Care',
    questions: [
      {
        question: 'How should I care for my silk garments?',
        answer: 'We recommend dry cleaning or hand washing your silk garments in cold water with a gentle pH-neutral detergent. Avoid wringing or twisting the fabric, and dry flat away from direct sunlight.'
      },
      {
        question: 'Are your skincare products suitable for sensitive skin?',
        answer: 'Our skincare line is formulated with high-quality, gentle ingredients. However, we always recommend performing a patch test before incorporating a new product into your routine, especially if you have sensitive skin.'
      },
      {
        question: 'How do I store my perfume?',
        answer: 'To maintain the integrity of your fragrance, store the bottle in a cool, dry place away from direct sunlight and heat sources. Keeping it in its original box is an excellent way to protect it.'
      }
    ]
  }
];

const AccordionItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors focus:outline-none"
      >
        <span className="font-bold text-lg">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card py-20 px-4 text-center border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our shipping, returns, and product care. 
            Can't find what you're looking for? Contact our concierge.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="space-y-16">
          {faqs.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-8 text-primary border-b border-border pb-2 inline-block">
                {section.category}
              </h2>
              <div className="bg-card rounded-2xl border border-border px-8">
                {section.questions.map((faq, qIndex) => (
                  <AccordionItem key={qIndex} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
