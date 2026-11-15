import Input from "../components/Input";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";

export default function TrackPage() {
  return (
    <MainLayout>
      <div className='grid grid-cols-1 justify-center lg:grid-cols-12 gap-8'>
        <div className='card col-start-1 col-end-13 lg:col-start-1 lg:col-end-8 flex flex-col gap-5.75 py-4.5 px-5.25 md:py-6 md:px-6.75 lg:py-7.5 lg:px-8.25'>
          <div class='flex flex-col gap-2.25'>
            <span class='eyebrow-heading text-[11px]'>Citizen Portal</span>
            <h1 class='title text-xl md:text-[25px] lg:text-[35px]'>
              Track your complaint
            </h1>
            <p class='description text-sm'>
              Enter your official case reference number to view real-time triage
              progress, inspector assignment, and official replies.
            </p>
          </div>
          <form className='flex flex-col gap-3.75'>
            <div className='flex flex-col gap-3'>
              <Input
                labelText='Complaint Reference ID *'
                id='complaint-reference-id-input'
                type='text'
                placeholder='e.g. CMP-2026-8841'
                required
              />
              <Input
                labelText='Email address or phone (optional verification)'
                id='account-verification-input'
                type='email'
                placeholder='citizen@example.com'
              />
            </div>
            <Button
              type='submit'
              btnText='Lookup report status'
              btnImg={[
                "/src/assets/icon/search-icon-white.svg",
                "/src/assets/icon/arrow-right-white.svg",
              ]}
              btnAlt={["search-icon", "arrow-right"]}
              variant='button-two-icon'
              btnCustomStyles='bg-bg-primary text-font-quaternary px-4.75'
              btnTextCustomStyles='font-publicSans font-semibold text-xs text-font-quaternary'
            />
          </form>
          <div className='border-t border-border-primary pt-3.75 flex flex-col items-start md:flex-row md:items-center gap-1.25'>
            <p className='text-xs font-publicSans font-normal text-font-tertiary'>
              Try a sample record:
            </p>
            <div className='flex gap-1 font-ibmPlexMono font-semibold text-xs text-bg-primary'>
              <span>CMP-2026-8841</span>
              <span class='font-normal text-font-tertiary'>&#xb7;</span>
              <span>CMP-2026-8794 (Resolved) </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
