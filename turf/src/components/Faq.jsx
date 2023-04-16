import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',padding:'5rem',color:'white'}} className='background'>
       
      
<h1 style={{margin:'10px 0px',fontFamily:'sans-serif',fontWeight:'900',letterSpacing:'2px',fontSize:'5rem'}}>FAQs</h1>
<p style={{margin:'0',fontFamily:'sans-serif',fontWeight:'700' ,letterSpacing:'1px',margin:'20px',fontSize:'2rem'}}>Some questions that you might have in mind about GoTurf </p>
<Accordion className='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <p className='faq-que'>
              { 'How do I contact customer support if I have questions about my booking?'}
            </p>
          </AccordionSummary>
            <AccordionDetails>
              <p className='faq-ans'>
                {'Call us at :-8928269170 for any assistance'}
              </p>
              
              
            </AccordionDetails>
            
        </Accordion>
        <Accordion className='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <p className='faq-que'>
              { 'What we do?'}
            </p>
          </AccordionSummary>
            <AccordionDetails>
              <p className='faq-ans'>
                {'Our aim is to make as easy as possible for people to get out and play their favorite sports in thier local area ,We also provide ease of management for the Turf managers who are working with us as the job can be straining.'}
              </p>
            </AccordionDetails>
        </Accordion>
        
        <Accordion className='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <p className='faq-que'>
              { 'Why do I have to provide the Mobile number?'}
            </p>
          </AccordionSummary>
            <AccordionDetails>
              <p className='faq-ans'>
                {'Well, the simplest reason being that it is for the security of your transaction and also so that the booking confirmation can be sent to you via SMS.'}
              </p>
            </AccordionDetails>
        </Accordion>

        <Accordion className='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <p className='faq-que'>
              { 'How do I make a Booking on your website?'}
            </p>
          </AccordionSummary>
            <AccordionDetails>
              <p className='faq-ans'>
                {'It is a very simple process of booking a turf on our website as you have to sign-in as a user and choose your favoruite sport and through our simple booking proceess you can book  the turf of your choice. '}
                
              </p>
            </AccordionDetails>
        </Accordion>

        
        <Accordion className='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <p className='faq-que'>
              { 'Can I cancel or modify my booking?'}
            </p>
          </AccordionSummary>
            <AccordionDetails>
              <p className='faq-ans'>
                {'Yes you can easily cancel your booking if needed and your money will be refunded with added charges.'}
              </p>
            </AccordionDetails>
        </Accordion>

        <Accordion className='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
          >
            <p className='faq-que'>
              { 'Is my payment information secure on your website?'}
            </p>
          </AccordionSummary>
            <AccordionDetails>
              <p className='faq-ans'>
                {'Yes your payment information is very secure on our website as we use a secure payment gateway to make the transaction.'}
              </p>
            </AccordionDetails>
        </Accordion>

       
    </div>
  )
}

export default Faq