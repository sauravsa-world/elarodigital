import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <div className="mt-12 rounded-3xl glass p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border last:border-0">
                <AccordionTrigger className="px-4 py-5 text-left text-base font-medium hover:no-underline hover:text-brand">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}