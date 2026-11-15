import AuthLayout from "../layouts/AuthLayout";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginModal(props) {
  const { setOpenModal } = props;
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className='w-[90%] md:w-[70%] lg:w-[40%] h-fit overflow-hidden rounded-[20px] border border-border-secondary bg-bg-tertiary'>
        <div className='flex justify-between items-start py-3.75 px-5 lg:py-6 lg:px-7.5 bg-bg-closed border-b border-border-primary '>
          <div className='flex flex-col gap-0.75'>
            <p className='title text-sm lg:text-lg'>Sign In to WargaReport</p>
            <p className='description text-[10px] lg:text-xs'>
              Sign in to lodge a complaint or upvote issues.
            </p>
          </div>
          <button
            onClick={() => setOpenModal((prev) => !prev)}
            className='cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-x preview-icon'>
              <path d='M18 6 6 18' />
              <path d='m6 6 12 12' />
            </svg>
          </button>
        </div>
        <div className='flex flex-col gap-5 p-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-2'>
            <button className='py-2.5 lg:py-3.75 flex justify-center items-center text-[10px] lg:text-[13px] rounded-full font-medium font-publicSans bg-bg-primary text-font-quaternary cursor-pointer hover:opacity-80'>
              Sign In Existing Account
            </button>
            <button className='py-2.5 lg:py-3.75 flex justify-center items-center text-[10px] lg:text-[13px] rounded-full font-medium font-publicSans bg-bg-closed text-font-secondary cursor-pointer hover:opacity-80'>
              Register as Citizen
            </button>
          </div>
          <form className='flex flex-col gap-2 lg:gap-3'>
            <div className='flex flex-col gap-1.5'>
              <label
                for='email-input'
                className='w-fit flex items-center justify-between'>
                <span className='eyebrow-heading text-[10px]'>
                  Email Address
                </span>
              </label>
              <div className='w-full flex items-center gap-2.25 py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                <div className='w-3.5 h-3.5'>
                  <img
                    src='/src/assets/icon/mail-icon.svg'
                    alt='mail-icon'
                    className='w-full h-full'
                  />
                </div>
                <input
                  id='email-input'
                  className='border-none outline-none w-full font-normal text-[13px] bg-inherit text-font-primary font-publicSans placeholder:text-font-tertiary'
                  type='email'
                  name='email'
                  placeholder='Enter your Email'
                  required
                />
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label
                for='password-input'
                className='w-fit flex items-center justify-between'>
                <span className='eyebrow-heading text-[10px]'>Password</span>
              </label>
              <div className='w-full flex items-center gap-2.25 py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                <div className='w-3.5 h-3.5'>
                  <img
                    src='/src/assets/icon/lock-icon.svg'
                    alt='lock-icon'
                    className='w-full h-full'
                  />
                </div>
                <div className='w-full flex items-center justify-between'>
                  <input
                    id='password-input'
                    className='border-none outline-none w-full font-normal text-[13px] bg-inherit text-font-primary font-publicSans placeholder:text-font-tertiary'
                    type={showPassword ? "text" : "password"}
                    name='password'
                    placeholder='Enter your Password'
                    auto-complete='off'
                    required
                  />
                  <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    id='show-password-toggle'
                    type='button'
                    className='w-4 h-4 cursor-pointer'>
                    <img
                      src={
                        showPassword
                          ? "/src/assets/icon/eye-off-icon.svg"
                          : "/src/assets/icon/eye-on-icon.svg"
                      }
                      alt={showPassword ? "eye-off" : "eye-on"}
                      className='w-full h-full'
                    />
                  </button>
                </div>
              </div>
            </div>
            <Button
              onClick={() => navigate("/add-report")}
              type='submit'
              btnText='Sign In'
              btnImg={["/src/assets/icon/arrow-right-white.svg"]}
              btnAlt={["arrow-right-icon"]}
              variant='button-one-icon'
              btnCustomStyles='w-full flex flex-row-reverse justify-center bg-bg-primary'
              btnTextCustomStyles='font-publicSans font-semibold text-[13px] text-font-quaternary'
            />
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
