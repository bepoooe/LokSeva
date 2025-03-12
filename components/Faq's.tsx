import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Faq = () => {
  return (
    <section className='bg-[#FFECE2] w-full'>
<main className='mx-auto max-w-[90rem] md:px-32 px-4 md:py-[8.66rem] py-[3rem] flex flex-col md:flex-row items-start justify-start  gap-12'>
 
    <div className='md:w-1/2 w-full '>
        <h1 className='textcolor font-[700] md:text-[3rem] text-[2rem] tracking-[0.06rem] md:leading-[125%] leading-normal md:text-start text-center'>Frequently <br/> Asked Questions</h1>
    </div>
    <div className='md:w-1/2 w-full px-4'>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-[1.3rem] font-[600] text-start'>What is the purpose of this website?</AccordionTrigger>
    <AccordionContent className='text-[1.1rem] font-[300]'>
    This platform serves as a one-stop destination for accessing municipal services, filing complaints, tracking their status, and obtaining important government welfare information in West Bengal.
    </AccordionContent>
  </AccordionItem>
</Accordion>


<Accordion type="single" collapsible>
  <AccordionItem value="item-1" className='md:mt-[2rem] mt-0'>
    <AccordionTrigger className='text-[1.3rem] font-[600] text-start'>How can I file a complaint regarding municipal services?</AccordionTrigger>
    <AccordionContent className='text-[1.1rem] font-[300]'>
    You can file a complaint by selecting your municipality, filling out the complaint form, and submitting it. You will receive a tracking ID for updates.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1" className='md:mt-[2rem] mt-0'>
    <AccordionTrigger className='text-[1.3rem] font-[600] text-start'>How do I contact my municipality for urgent assistance?</AccordionTrigger>
    <AccordionContent className='text-[1.1rem] font-[300]'>
    Each municipality’s contact details, helpline numbers, and emergency services are available in the helpline section for quick access.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible >
  <AccordionItem value="item-1" className='md:mt-[2rem] mt-0' >
    <AccordionTrigger className='text-[1.3rem] font-[600] text-start'>How do I find my municipality and its services?</AccordionTrigger>
    <AccordionContent className='text-[1.1rem] font-[300]'>
    You can select your municipality from the homepage or the &quot;Know Your Municipality&quot; section to access details on services, contacts, and facilities.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
</main>
    </section>
  )
}

export default Faq;