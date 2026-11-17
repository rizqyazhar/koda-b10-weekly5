import { Outlet, NavLink, Link } from "react-router";
import MainLayout from "./MainLayout";
import { FormContext } from "../contexts/FormContext";
import { useState } from "react";

export default function AddReportLayout() {
  const [formReport, setFormReport] = useState({});

  return (
    <MainLayout>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 justify-center lg:justify-start'>
        <aside className='w-full col-start-1 col-end-13 lg:col-start-1 lg:col-end-4 flex flex-col gap-5.5'>
          <div>
            <span className='eyebrow-heading text-[11px]'>
              Community Intake
            </span>
            <h1 className='title text-[22px]'>Report an Issue</h1>
            <p className='description text-[13px]'>
              Public civic reporting for Indonesian municipal services.
            </p>
          </div>
          <div className='flex flex-col w-full'>
            <NavLink
              to={"/add-report/topic"}
              className={({ isActive }) =>
                isActive
                  ? "w-full flex items-center gap-2.5 py-2.25 px-3.25 font-publicSans text-[13px] font-semibold text-font-quaternary bg-bg-primary rounded-full"
                  : "w-full flex items-center gap-2.5 py-2.25 px-3.25 font-normal font-publicSans text-[13px] text-font-tertiary bg-inherit"
              }>
              <span>01</span> Topic
            </NavLink>
            <NavLink
              to={"/add-report/location"}
              className={({ isActive }) =>
                isActive
                  ? "w-full flex items-center gap-2.5 py-2.25 px-3.25 font-publicSans text-[13px] font-semibold text-font-quaternary bg-bg-primary rounded-full"
                  : "w-full flex items-center gap-2.5 py-2.25 px-3.25 font-normal font-publicSans text-[13px] text-font-tertiary bg-inherit"
              }>
              <span>02</span> Location
            </NavLink>
            <NavLink
              to={"/add-report/proof"}
              className={({ isActive }) =>
                isActive
                  ? "w-full flex items-center gap-2.5 py-2.25 px-3.25 font-publicSans text-[13px] font-semibold text-font-quaternary bg-bg-primary rounded-full"
                  : "w-full flex items-center gap-2.5 py-2.25 px-3.25 font-normal font-publicSans text-[13px] text-font-tertiary bg-inherit"
              }>
              <span>03</span> Proof
            </NavLink>
            <NavLink
              to={"/add-report/review-send"}
              className={({ isActive }) =>
                isActive
                  ? "w-full flex items-center gap-2.5 py-2.25 px-3.25 font-publicSans text-[13px] font-semibold text-font-quaternary bg-bg-primary rounded-full"
                  : "w-full flex items-center gap-2.5 py-2.25 px-3.25 font-normal font-publicSans text-[13px] text-font-tertiary bg-inherit"
              }>
              <span>04</span> Review & Send
            </NavLink>
          </div>
          <div className='flex flex-col gap-2 p-3.5 rounded-[20px] border border-dashed border-border-secondary font-publicSans bg-bg-tertiary'>
            <div className='flex items-center gap-1.5'>
              <div className='shield-icon'></div>
              <p className='font-semibold text-[13px] text-font-primary'>
                Independent Verification
              </p>
            </div>
            <p className='text-xs text-font-tertiary leading-4.25'>
              Our verification desk checks each report and routes it to the
              municipal agency (Bina Marga, PAM JAYA, Dishub, DLH, Satpol PP,
              Citata). Resolution timestamps are tracked publicly.
            </p>
          </div>
          <Link
            to={"/live-feed"}
            className='font-semibold text-[13px] text-bg-primary font-publicSans'>
            Cancel and return to feed
          </Link>
        </aside>
        <FormContext.Provider value={[formReport, setFormReport]}>
          <Outlet />
        </FormContext.Provider>
      </div>
    </MainLayout>
  );
}
