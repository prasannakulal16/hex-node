import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

const AccordionItem = ({ title, content, image, isActive, onClick }) => {
  return (
    <div className="border rounded-lg overflow-hidden mb-4">
      <Button
        variant="tertiary"
        onClick={onClick}
        className="w-full text-left p-4 text-xl font-semibold bg-gray-100 hover:bg-gray-200 transition-all duration-300"
      >
        {title}
      </Button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isActive ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 p-4 leading-relaxed bg-gray-50">
          {content}
        </p>
        <div className="flex justify-center p-4 md:hidden">
          <motion.img
            src={image}
            alt="FAQ"
            className="rounded-lg shadow-xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function Faq({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqData
    .map((faq, originalIndex) => ({ ...faq, originalIndex }))
    .filter((faq) =>
      faq.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="mx-auto xl:px-24 lg:px-14 sm:px-10 px-6">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8">
        What additional possibilities does the Kiosk mode offer?
      </h2>
      <div className="mb-4 flex flex-col items-center gap-4">
        <Input
          type="text"
          placeholder="Search additional possibility..."
          className="p-2 border border-gray-600 rounded w-[200px] md:w-[400px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Dynamic Image (Only for desktop view) */}
        <div className="hidden md:flex justify-center">
          <motion.img
            key={activeIndex}
            src={
              activeIndex !== null && faqData[activeIndex]
                ? faqData[activeIndex].image
                : faqData[0].image
            }
            alt="FAQ"
            className="rounded-lg shadow-xl w-3/4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
        {/* Right: Accordion */}
        <div>
          {filteredFaqs.map(({ title, content, image, originalIndex }) => (
            <AccordionItem
              key={originalIndex}
              title={title}
              content={content}
              image={image}
              isActive={activeIndex === originalIndex}
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === originalIndex ? null : originalIndex
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
