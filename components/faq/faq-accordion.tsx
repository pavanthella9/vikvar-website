"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="space-y-4">{items.map((item, index) => (
    <div key={item.question} className="rounded-2xl border border-slate-200 bg-white">
      <button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left">
        <span className="font-semibold text-slate-950">{item.question}</span>
        <ChevronDown className={`h-5 w-5 text-blue-700 transition-transform ${open === index ? "rotate-180" : ""}`} />
      </button>
      {open === index ? <div className="border-t border-slate-100 px-6 py-5"><p className="leading-7 text-slate-600">{item.answer}</p></div> : null}
    </div>
  ))}</div>;
}
