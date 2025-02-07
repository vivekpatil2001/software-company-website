import React from 'react';
import Image from 'next/image';
import 'animate.css';
import  './page.css'; // Assuming you have a CSS module for better scoping
import logo from '../../../public/logo.png';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const Page: React.FC = () => {
  return (
    <div className={`flex flex-1 md:flex-row h-[98vh] flex-col-reverse justify-around items-center mt-3 px-6 lg:px-8 main`}>
      <div className="sm:w-96 w-fit h-fit p-5 md:mt-14 mb-6 bg-white rounded">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
            Change Password
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block p-3 w-full rounded border-0 py-1.5 placeholder:text-gray-950 text-zinc-900 bg-white shadow-sm ring-1 ring-inset ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block p-3 w-full rounded border-0 py-1.5 text-zinc-900 bg-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirm" className="block text-sm font-medium leading-6 text-zinc-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm"
                  name="confirm"
                  type="password"
                  required
                  className="block p-3 w-full rounded border-0 py-1.5 text-zinc-900 bg-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="otp" className="block text-sm font-medium leading-6 text-zinc-900">
                  Enter OTP
                </label>
              </div>
              <div className="mt-2 text-gray-950">
              <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;