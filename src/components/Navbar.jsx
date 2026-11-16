import { Link, NavLink } from "react-router";
import Button from "./Button";
import { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Navbar() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  return (
    <header className='w-full sticky top-0 z-10 flex justify-center bg-bg-tertiary border-b border-border-secondary'>
      <nav className='w-full px-7.5 md:px-10 lg:px-25 py-3 md:py-4 flex justify-between items-center'>
        <Link className='flex items-center gap-1 md:gap-1.5 lg:gap-2'>
          <img src='/src/assets/icon/logo.svg' alt='warga-report-logo' />
          <span className='font-fraunces font-bold text-base lg:text-lg text-font-primary'>
            WargaReport
          </span>
        </Link>
        <div className='hidden lg:flex items-center text-sm font-publicSans font-medium text-font-secondary'>
          <NavLink
            to={"/live-feed"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-font-quaternary bg-bg-primary rounded-full px-3 py-2.5"
                : "font-medium text-font-secondary px-3 py-2.5 hover:underline hover:decoration-wavy"
            }>
            Live Feed
          </NavLink>
          <NavLink
            to={"/track"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-font-quaternary bg-bg-primary rounded-full px-3 py-2.5"
                : "font-medium text-font-secondary px-3 py-2.5 hover:underline hover:decoration-wavy"
            }>
            Track
          </NavLink>
          <NavLink
            to={"/help"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-font-quaternary bg-bg-primary rounded-full px-3 py-2.5"
                : "font-medium text-font-secondary px-3 py-2.5 hover:underline hover:decoration-wavy"
            }>
            How it works
          </NavLink>
        </div>
        <div className='flex items-center gap-2'>
          <Button
            onClick={() => setOpenLoginModal((prev) => !prev)}
            type='click'
            btnText='Sign In'
            btnImg={["/src/assets/icon/login-icon.svg"]}
            btnAlt={["login-icon"]}
            variant='button-one-icon'
            btnCustomStyles='bg-inherit'
            btnTextCustomStyles='font-publicSans font-semibold text-xs text-font-secondary'
          />
          <Button
            type='click'
            btnText='Report'
            btnImg={["/src/assets/icon/plus-icon.svg"]}
            btnAlt={["plus-icon"]}
            variant='button-one-icon'
            btnCustomStyles='bg-bg-primary'
            btnTextCustomStyles='font-publicSans font-semibold text-xs text-font-quaternary'
          />
        </div>
        {openLoginModal && (
          <LoginModal
            setOpenLoginModal={setOpenLoginModal}
            setOpenRegisterModal={setOpenRegisterModal}
          />
        )}
        {openRegisterModal && (
          <RegisterModal
            setOpenLoginModal={setOpenLoginModal}
            setOpenRegisterModal={setOpenRegisterModal}
          />
        )}
      </nav>
    </header>
  );
}
