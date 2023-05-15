import React from 'react'
import Map from './Map'
import {HandRaisedIcon, CalendarDaysIcon, EnvelopeIcon, ChatBubbleOvalLeftIcon} from '@heroicons/react/20/solid';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5dqrwks', 'template_099rsk9', form.current, 'wLILNpMqLo0vim_Ko')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };







  return (
    <div>


<div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white pb-5 sm:text-4xl">Let's Connect.</h2>
        <div className ='py-2 text-white'>Precise Location: 1st Floor,Room 19, Stage Plaza/ Stage Inn House, Ngong Rd, Ngong</div>

            <div><Map/></div>
            
            
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
            
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              
                <ChatBubbleOvalLeftIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <a href="https://api.whatsapp.com/send?phone=254701364322">
              <dt className="mt-4 font-semibold text-white">Whats App</dt>
              </a>
              <dd className="mt-2 leading-7 text-gray-400">
               
              </dd>
              
            </div>
            <div className="flex flex-col items-start">
            <a href="mailto:charlesmuratha@gmail.com">

              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                
                <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Email Us</dt>
              
              <dd className="mt-2 leading-7 text-gray-400">                
              </dd>
              </a>
            </div>
          </dl>
        </div>
      </div>
      
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
     
    </div>
    <div className="flex justify-end pr-10 text-xs">
      <p className='text-white'>Site design by <a href='mailto:lusenakalee@gmail.com'>Leroy Lusenaka</a></p>
    </div>








    </div>
  )
}

export default Contact
