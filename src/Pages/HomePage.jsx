import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";
import { communityReportData, reportFlowOverviewText } from "../lib/data";
import ReportFlowCard from "../components/ReportFlowCard";
import { Link } from "react-router";
import SmallReportCard from "../components/SmallReportCard";

export default function HomePage() {
  return (
    <MainLayout>
      <section className='flex flex-col gap-7 py-2.5'>
        <div className='flex flex-col gap-2.5 md:gap-3.5 lg:gap-4.5'>
          <h1 className='lg:max-w-2xl font-semibold text-font-primary font-fraunces text-4xl lg:text-[50px] leading-13'>
            See something broken? Snap it. We push the city to fix it.
          </h1>
          <p className='lg:max-w-142 font-normal text-font-secondary font-publicSans text-[15px] lg:text-[17px]'>
            Potholes, dark streetlights, PAM water leaks, or trash piles. Drop
            photos, track fixes like a food delivery order, and keep authorities
            accountable.
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <Button
            btnText='Snap a report'
            btnImg={[
              "/src/assets/icon/camera-icon.svg",
              "/src/assets/icon/arrow-right-white.svg",
            ]}
            btnAlt={["camera-icon", "arrow-right-icon"]}
            variant='button-two-icon'
            btnCustomStyles='bg-bg-primary px-5.5 py-3.25'
            btnTextCustomStyles='font-publicSans font-semibold text-xs text-font-quaternary'
          />
          <Button
            btnText='Track a case'
            variant='button-basic'
            btnCustomStyles='bg-bg-tertiary border border-border-secondary px-5.5 py-3.25'
            btnTextCustomStyles='font-publicSans font-semibold text-xs text-font-primary'
          />
        </div>
        <div className='flex items-center justify-center  lg:justify-start gap-2.5 font-ibmPlexMono'>
          <p className='flex flex-col items-center gap-0.5 lg:flex-row lg:items-start lg:gap-2 text-[10px] lg:text-xs text-font-secondary'>
            <span className='font-publicSans text-font-primary font-bold'>
              48
            </span>
            reports today
          </p>
          <span className='text-xs font-normal text-font-tertiary'>&#xb7;</span>
          <p className='flex flex-col items-center gap-0.5 lg:flex-row lg:items-start lg:gap-2 text-[10px] lg:text-xs text-font-secondary'>
            <span className='font-publicSans text-font-resolved font-bold'>
              194
            </span>
            fixed this week
          </p>
          <span className='text-xs font-normal text-font-tertiary'>&#xb7;</span>
          <p className='flex flex-col items-center gap-0.5 lg:flex-row lg:items-start lg:gap-2 text-[10px] lg:text-xs text-font-secondary'>
            <span className='font-publicSans text-font-resolved font-bold'>
              2.3 days
            </span>
            avg response
          </p>
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 border-t border-border-primary py-7'>
        {reportFlowOverviewText.map((item, index) => {
          return <ReportFlowCard key={index} item={item} />;
        })}
      </section>
      <section className='flex flex-col gap-4 border-t border-border-primary pt-7'>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between'>
          <div>
            <h2 className='title text-lg'>Recent Community Reports</h2>
            <p className='description text-xs lg:text-sm'>
              Verified reports lodged in Jakarta and surrounding regions
            </p>
          </div>
          <Link to={"/live-feed"} className='btn-nav flex flex-col gap-1'>
            View live feed
            <span>&rarr;</span>
          </Link>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {communityReportData.slice(0, 4).map((item, index) => {
            return <SmallReportCard key={index} item={item} />;
          })}
        </div>
      </section>
    </MainLayout>
  );
}
