import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from "@material-tailwind/react";

function Buy() {
  return (
    <div>
   <div className="hidden bg-white sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t bg-white border-gray-200" />
        </div>
      </div>

      <div className='pl-5 bg-white pb-5'>
      <Breadcrumbs >
      <Link to='/' className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>     
      <Link to='/Buy'>Buy</Link>
    </Breadcrumbs>
    </div>     

      <div className="mt-10 bg-white sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold pl-5 leading-6 text-gray-900">Easy Online Purchasing</h3>
              <p className="mt-1 text-sm text-gray-600 pl-5">Get the Best Deals on Accessories, Mobile Phones and Laptops.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        placeholder='First Name'
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        placeholder='Surname'
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Contact information: Phone / Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        placeholder='Phone No. / Email'
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="Device" className="block text-sm font-medium leading-6 text-gray-900">
                        Device
                      </label>
                      <select
                        id="Device"
                        name="Device"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option>Laptop</option>
                        <option>Mobile Phone</option>
                        <option>Accessories</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="Device-information" className="block text-sm font-medium leading-6 text-gray-900">
                        Device information
                      </label>
                      <input
                        type="text"
                        name="Device-information"
                        id="Device-information"
                        placeholder='Brand and Model'
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="preferences" className="block text-sm font-medium leading-6 text-gray-900">
                        Preferences *optional
                      </label>
                      <input
                        type="text"
                        name="preferences"
                        id="preferences"
                        placeholder='Estimated Budget / Storage Capacity / RAM / Screen size'
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

 
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden bg-white sm:block" aria-hidden="true">
        <div className="pt-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default Buy
