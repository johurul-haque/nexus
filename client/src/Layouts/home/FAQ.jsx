import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const Faq = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center py-7 sm:py-10 md:grid-cols-[1fr_30rem] lg:py-16">
      <h2 className="space-x-7 self-center text-center font-serif text-[12rem] font-bold">
        <span className="inline-block animate-bounce">F</span>
        <span className="inline-block animate-bounce [animation-delay:2ms]">
          A
        </span>
        <span className="inline-block animate-bounce">Q</span>
      </h2>

      <Accordion.Root className="max-w-md" collapsible>
        <Accordion.Item value="item-1" className="border-b">
          <Accordion.Trigger className="group flex w-full justify-between py-4 text-left">
            Who can enroll in the classes?
            <ChevronDown
              strokeWidth={1.8}
              className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
            />
          </Accordion.Trigger>

          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <p className="mb-3 text-gray-700">
              Our classes are open to individuals of all skill levels, from
              beginners to experienced designers. Whether you&apos;re looking to
              learn the basics or expand your expertise, we have classes
              tailored to your needs.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" className="border-b">
          <Accordion.Trigger className="group flex w-full justify-between py-3 text-left">
            How do I enroll in a class?
            <ChevronDown
              strokeWidth={1.8}
              className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
            />
          </Accordion.Trigger>

          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <p className="mb-3 text-gray-700">
              Browse our class catalog, choose the class you&apos;re interested
              in, and click on the
              <strong> Select</strong> button. After the button turns to{' '}
              <em> Selected</em> go to the dashboard and complete your purchase.
              After successful purchase you&apos;ll be enrolled in the class.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3" className="border-b">
          <Accordion.Trigger className="group flex w-full justify-between py-3 text-left">
            Are the classes self-paced?
            <ChevronDown
              strokeWidth={1.8}
              className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
            />
          </Accordion.Trigger>

          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <p className="mb-3 text-gray-700">
              Yes, most of our classes are self-paced, allowing you to learn at
              your own convenience. You can access the class materials, videos,
              and assignments whenever it suits your schedule.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-4" className="border-b">
          <Accordion.Trigger className="group flex w-full justify-between py-3 text-left">
            What if I have technical issues during the course?
            <ChevronDown
              strokeWidth={1.8}
              className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
            />
          </Accordion.Trigger>

          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <p className="mb-3 text-gray-700">
              Our support team is here to assist you. If you encounter any
              technical issues, difficulties accessing class materials, or need
              general assistance, reach out to us at{' '}
              <a
                href="mailto:johurulhaque11@gmail.com"
                className="underline-offset-1 hover:underline"
              >
                support@designnexus.com.
              </a>
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
};
export default Faq;
