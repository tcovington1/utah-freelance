import React from 'react'
import Link from 'next/link'

const Features = () => ( 
  <>
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">All-in-one Place</h2>
          <p class="mt-4 text-lg text-gray-500">One place to find what you need</p>
        </div>
        <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          <div class="flex">
            <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Website Designers
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.
              </dd>
            </div>
          </div>

          <div class="flex">
            <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Website Developers
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.
              </dd>
            </div>
          </div>

          <div class="flex">
            <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Marketing Experts
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.
              </dd>
            </div>
          </div>

          <div class="flex">
            <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Artists
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.
              </dd>
            </div>
          </div>

          <div class="flex">
            <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Social Media Gurus
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.
              </dd>
            </div>
          </div>

          <div class="flex">
            <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Business Consultants
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.
              </dd>
            </div>
          </div>

          <div class="flex">
            <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Copywriters
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.
              </dd>
            </div>
          </div>

          <div class="flex">
            <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Accountants
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>

  </>
)

export default Features