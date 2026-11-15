import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className='w-full h-fit pt-13 pb-6 flex justify-center bg-bg-tertiary border-t border-border-secondary'>
      <div className='w-full flex flex-col gap-11 px-7.5 md:px-10 lg:px-25 py-3 md:py-4'>
        <div className='flex justify-between gap-17'>
          <div className='w-full lg:w-[40%] flex flex-col gap-4'>
            <Link
              to={"/"}
              className='text-lg lg:text-xl font-bold font-fraunces text-font-primary'>
              WargaReport
            </Link>
            <p className='text-sm font-publicSans text-font-secondary'>
              WargaReport is an independent civic reporting platform for
              municipal infrastructure issues across Indonesia. Residents submit
              evidence, follow SLA countdowns, and track resolution updates from
              the responsible agencies.
            </p>
            <p className='mt-0.75 text-sm font-publicSans font-semibold text-font-warning'>
              Not for life-threatening emergencies — call 112 (National
              Emergency Call Center) or BPBD DKI directly.
            </p>
          </div>
          <div className='flex-1 grid grid-cols-3 lg:gap-7'>
            <div className='flex flex-col gap-1'>
              <p className='font-ibmPlexMono font-medium text-[11px] text-bg-primary uppercase tracking-[1px]'>
                Citizens
              </p>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                File a report
              </Link>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                Track complaint
              </Link>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                Public reports registry
              </Link>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                My filing history
              </Link>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-ibmPlexMono font-medium text-[11px] text-bg-primary uppercase tracking-[1px]'>
                Agencies
              </p>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                Participating bureaus
              </Link>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                Officer triage queue
              </Link>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                SLA benchmarks
              </Link>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-ibmPlexMono font-medium text-[11px] text-bg-primary uppercase tracking-[1px]'>
                Civic Trust
              </p>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                Help & FAQs
              </Link>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                Evidence guidelines
              </Link>
              <Link className='font-publicSans font-normal text-sm text-font-secondary'>
                PII & redaction policy
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full pt-5 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between border-t border-border-primary font-normal text-xs text-font-tertiary'>
          <p className='font-publicSans'>
            &copy; 2026 WargaReport. All rights reserved.
          </p>
          <p className='font-ibmPlexMono'>UU No. 25/2009 Compliant</p>
        </div>
      </div>
    </footer>
  );
}
