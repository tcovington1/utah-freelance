import React from 'react'
import Link from 'next/link'

const Contact = () => ( 
  <>
<div className="min-h-screen bg-white">
  <main>
    {/* <!-- Header --> */}
    <div className="bg-warm-gray-50">
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">Get in touch</h1>
          <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis et vel et fermentum amet consequat.</p>
        </div>
      </div>
    </div>

    {/* <!-- Contact section --> */}
    <section className="relative bg-white" aria-labelledby="contactHeading">
      <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg className="absolute top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-warm-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 id="contactHeading" className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* <!-- Contact information --> */}
            <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12">
              <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                  <defs>
                    <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"></stop>
                      <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                  <defs>
                    <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"></stop>
                      <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                  <defs>
                    <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff"></stop>
                      <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">Contact information</h3>
              <p className="mt-6 text-base text-teal-50 max-w-3xl">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
              <dl className="mt-8 space-y-6">
                <dt><span className="sr-only">Phone number</span></dt>
                <dd className="flex text-base text-teal-50">
                  {/* <!-- Heroicon name: outline/phone --> */}
                  <svg className="flex-shrink-0 w-6 h-6 text-teal-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
                <dt><span className="sr-only">Email</span></dt>
                <dd className="flex text-base text-teal-50">
                  {/* <!-- Heroicon name: outline/mail --> */}
                  <svg className="flex-shrink-0 w-6 h-6 text-teal-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-3">support@workcation.com</span>
                </dd>
              </dl>
              <ul className="mt-8 flex space-x-12" role="list">
                <li>
                  <a className="text-teal-200 hover:text-teal-100" href="#">
                    <span className="sr-only">Facebook</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                      <path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-teal-200 hover:text-teal-100" href="#">
                    <span className="sr-only">GitHub</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                      <path d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12" fill="currentColor" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-teal-200 hover:text-teal-100" href="#">
                    <span className="sr-only">Twitter</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
                      <path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" fill="currentColor" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Contact form --> */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
              <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label for="first_name" className="block text-sm font-medium text-warm-gray-900">First name</label>
                  <div className="mt-1">
                    <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label for="last_name" className="block text-sm font-medium text-warm-gray-900">Last name</label>
                  <div className="mt-1">
                    <input type="text" name="last_name" id="last_name" autocomplete="family-name" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"/>
                  </div>
                </div>
                <div>
                  <label for="email" className="block text-sm font-medium text-warm-gray-900">Email</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autocomplete="email" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"/>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label for="phone" className="block text-sm font-medium text-warm-gray-900">Phone</label>
                    <span id="phone-optional" className="text-sm text-warm-gray-500">Optional</span>
                  </div>
                  <div className="mt-1">
                    <input type="text" name="phone" id="phone" autocomplete="tel" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" aria-describedby="phone-optional" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label for="subject" className="block text-sm font-medium text-warm-gray-900">Subject</label>
                  <div className="mt-1">
                    <input type="text" name="subject" id="subject" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label for="message" className="block text-sm font-medium text-warm-gray-900">Message</label>
                    <span id="message-max" className="text-sm text-warm-gray-500">Max. 500 characters</span>
                  </div>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows="4" className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" aria-describedby="message-max"></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button type="submit" className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* Contact grid */}
    <section aria-labelledby="officesHeading">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 id="officesHeading" className="text-3xl font-extrabold text-warm-gray-900">Our offices</h2>
        <p className="mt-6 text-lg text-warm-gray-500 max-w-3xl">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-warm-gray-900">Los Angeles</h3>
            <p className="mt-2 text-base text-warm-gray-500">
              <span className="block">4556 Brendan Ferry</span>
              <span className="block">Los Angeles, CA 90210</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-warm-gray-900">New York</h3>
            <p className="mt-2 text-base text-warm-gray-500">
              <span className="block">886 Walter Streets</span>
              <span className="block">New York, NY 12345</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-warm-gray-900">Toronto</h3>
            <p className="mt-2 text-base text-warm-gray-500">
              <span className="block">7363 Cynthia Pass</span>
              <span className="block">Toronto, ON N3Y 4H8</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-warm-gray-900">London</h3>
            <p className="mt-2 text-base text-warm-gray-500">
              <span className="block">114 Cobble Lane</span>
              <span className="block">London N1 2EF</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

  </>
)

export default Contact