import { Link } from "react-router";
import MainLayout from "../layouts/MainLayout";

export default function DetailReportPage() {
  return (
    <MainLayout>
      <div className='w-full flex items-center justify-between font-semibold font-publicSans'>
        <Link
          to={"/live-feed"}
          className='text-bg-primary text-[13px] flex items-center gap-1.75'>
          <span>
            <img
              src='/src/assets/icon/arrow-left-icon.svg'
              alt='arrow-left-icon'
            />
          </span>
          Back to Live Feed
        </Link>
        <button className='flex items-center gap-1 py-1.75 px-2.75 rounded-full bg-bg-tertiary text-font-primary border border-border-secondary text-[11px]'>
          <span className='w-2.75 h-2.75'>
            <img
              className='w-full h-full'
              src='/src/assets/icon/share-icon.svg'
              alt='upload-icon'
            />
          </span>
          Share
        </button>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-8 justify-center lg:justify-start'>
        <div className='w-full col-start-1 col-end-13 lg:col-start-1 lg:col-end-9 flex flex-col gap-6'>
          <section className='bg-bg-tertiary border border-border-primary rounded-2xl  flex flex-col gap-3.75 py-6.75 px-7.25'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col lg:flex-row items-start gap-1.75 lg:items-center'>
                <span className='tag inreview-tag'>
                  <img
                    src='/src/assets/icon/search-icon.svg'
                    alt='inreview-icon'
                  />
                  In review
                </span>
                <span className='flex justify-center gap-1.75 font-ibmPlexMono text-font-secondary text-xs font-normal'>
                  <span className='flex items-center'>
                    <img src='/src/assets/icon/time-icon.svg' alt='time-icon' />
                  </span>
                  18h 59m left
                </span>
              </div>
              <button className='w-fit h-fit flex items-center gap-1 py-2 px-3 border border-border-secondary bg-bg-tertiary font-ibmPlexMono text-font-secondary text-[11px] font-normal rounded-full'>
                <span>
                  <img src='/src/assets/icon/like-icon.svg' alt='like-icon' />
                </span>
                <span className='font-publicSans font-semibold text-font-secondary text-xs'>
                  Upvote
                </span>
                <span className='text-font-primary text-[13px] font-semibold'>
                  (148)
                </span>
              </button>
            </div>
            <div className='flex flex-col gap-4.5'>
              <h1 className='title text-[30px]'>
                PAM clean drinking water pipeline burst flooding sidewalk in
                front of Cipete Raya MRT
              </h1>
              <p className='description text-[14px]'>
                Clean drinking water is bursting through the sidewalk pavement
                outside Jl. Fatmawati Raya No. 42 (RT 04 / RW 07, Cilandak
                Barat) right in front of Cipete Raya MRT. Clean water has been
                flooding the roadway for 4 hours, causing motorbikes to slip.
              </p>
            </div>
            <div className='flex flex-col border-t border-border-primary pt-4.5 gap-2.5'>
              <span className='eyebrow-heading text-[11px]'>
                Resolution Pipeline
              </span>
              <div className='flex flex-col lg:flex-row gap-1.75'>
                <div className='w-full flex flex-col justify-center items-center gap-0.75 border rounded-xl bg-bg-quaternary py-3 text-font-quinary'>
                  <span className='font-ibmPlexMono font-normal text-[11px]'>
                    01
                  </span>
                  <span className='font-publicSans font-semibold text-nowrap text-[11px]'>
                    Submitted
                  </span>
                </div>
                <div className='w-full flex flex-col justify-center items-center gap-0.75 border rounded-xl bg-bg-quaternary py-3 text-font-quinary'>
                  <span className='font-ibmPlexMono font-normal text-[11px]'>
                    02
                  </span>
                  <span className='font-publicSans font-semibold text-nowrap text-[11px]'>
                    Verified by WargaReport
                  </span>
                </div>
                <div className='w-full flex flex-col justify-center items-center gap-0.75 border rounded-xl text-font-tertiary bg-bg-secondary py-3'>
                  <span className='font-ibmPlexMono font-normal text-[11px]'>
                    03
                  </span>
                  <span className='font-publicSans font-semibold text-nowrap text-[11px]'>
                    Dispatched to Agency
                  </span>
                </div>
                <div className='w-full flex flex-col justify-center items-center gap-0.75 border rounded-xl text-font-tertiary bg-bg-secondary py-3'>
                  <span className='font-ibmPlexMono font-normal text-[11px]'>
                    04
                  </span>
                  <span className='font-publicSans font-semibold text-nowrap text-[11px]'>
                    Fixed & Verified
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section class='flex flex-col gap-3.25'>
            <div class='flex flex-col gap-0.5'>
              <h3 class='title text-[20px]'>Evidence on File</h3>
              <p class='font-publicSans text-[12px] font-normal text-font-tertiary'>
                2 attachments (tap to expand)
              </p>
            </div>
            <div class='grid grid-cols-2 gap-3.5'>
              <div class='w-full rounded-[14px] border border-border-primary overflow-hidden'>
                <div class='w-full h-[60%] md:h-[70%] bg-cover bg-center'>
                  <img
                    className='w-full h-full'
                    src='/src/assets/img/img-1.jpg'
                    alt='incident-photo'
                  />
                </div>
                <div class='w-full h-[30%] flex justify-between items-center py-1.5 md:py-3 lg:py-2.5 px-2.5 md:px-3.75 lg:px-3.25  bg-bg-tertiary'>
                  <div className='flex flex-col gap-1'>
                    <p className='font-publicSans font-medium text-xs lg:text-sm text-font-primary'>
                      pam_water_pipeline_fracture.jpg
                    </p>
                    <p className='uppercase font-ibmPlexMono text-[10px] lg:text-xs font-normal text-font-tertiary'>
                      IMAGE <span class='middle-dot'>&#xb7;</span> 2.4 MB
                    </p>
                    <p className='font-publicSans text-xs lg:text-sm text-font-secondary font-normal w-87 truncate'>
                      Water runoff flooding pedestrian sidewalk slabs and bike
                      lane on Jl. Fatmawati Raya.
                    </p>
                  </div>
                </div>
              </div>
              <div class='w-full rounded-[14px] border border-border-primary overflow-hidden'>
                <div class='w-full h-[60%] md:h-[70%] bg-cover bg-center'>
                  <img
                    className='w-full h-full'
                    src='/src/assets/img/audio-clip-bg.png'
                    alt='incident-photo'
                  />
                </div>
                <div class='w-full h-[30%] flex justify-between items-center py-1.5 md:py-3 lg:py-2.5 px-2.5 md:px-3.75 lg:px-3.25  bg-bg-tertiary'>
                  <div className='flex flex-col gap-1'>
                    <p className='font-publicSans font-medium text-xs lg:text-sm text-font-primary'>
                      acoustic_pipe_pressure_sound.m4a
                    </p>
                    <p className='uppercase font-ibmPlexMono text-[10px] lg:text-xs font-normal text-font-tertiary'>
                      AUDIO <span class='middle-dot'>&#xb7;</span> 1.1 MB
                    </p>
                    <p className='font-publicSans text-xs lg:text-sm text-font-secondary font-normal w-87 truncate'>
                      Acoustic underground hissing recorded near customer meter
                      vault.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class='relative flex flex-col gap-3.75'>
            <div class='flex flex-col gap-0.5'>
              <h3 class='title text-[20px]'>Action History</h3>
              <p class='font-publicSans text-[12px] font-normal text-font-tertiary'>
                Chronological updates from intake router and field teams
              </p>
            </div>
            <div class='relative flex flex-col gap-5.5 pl-0.5 line-history'>
              <div class='flex flex-col gap-2.5 pl-5 relative icon-history-list'>
                <div class='flex gap-1.75 items-center'>
                  <p class='font-publicSans font-medium text-[13px] text-font-primary'>
                    Report submitted via WargaReport intake
                  </p>
                  <span class='tag submitted-tag'>
                    <img
                      src='/src/assets/icon/time-icon.svg'
                      alt='submitted-icon'
                    />
                    Submitted
                  </span>
                </div>
                <div class='flex items-center gap-1.75'>
                  <p class='font-publicSans font-medium text-[11px] text-font-secondary'>
                    Fahrul Septiana
                  </p>
                  <span class='middle-dot'>&#xb7;</span>
                  <span class='font-ibmPlexMono font-normal text-[11px] text-font-tertiary'>
                    Nov 6, 05:09 PM GMT+7
                  </span>
                </div>
                <div class='border border-border-primary rounded-xl p-3.25'>
                  <p class='font-publicSans font-normal text-[12px] text-font-secondary'>
                    Citizen attached visual photo evidence and acoustic audio
                    note.
                  </p>
                </div>
              </div>
              <div class='flex flex-col gap-2.5 pl-5 relative icon-history-list'>
                <div class='flex gap-1.75 items-center'>
                  <p class='font-publicSans font-medium text-[13px] text-font-primary'>
                    Verified by WargaReport & dispatched to Perumda PAM JAYA
                  </p>
                  <span class='tag received-tag'>
                    <img
                      src='/src/assets/icon/received-icon.svg'
                      alt='received-icon'
                    />
                    Received
                  </span>
                </div>
                <div class='flex gap-1.75'>
                  <p class='font-publicSans font-medium text-[11px] text-font-secondary'>
                    WargaReport Civic Router
                  </p>
                  <span class='middle-dot'>&#xb7;</span>
                  <span class='font-ibmPlexMono font-normal text-[11px] text-font-tertiary'>
                    Nov 6, 05:12 PM GMT+7
                  </span>
                </div>
                <div class='border border-border-primary rounded-xl p-3.25'>
                  <p class='font-publicSans font-normal text-[12px] text-font-secondary'>
                    Priority: High. Clean water conservation target. 24h
                    statutory countdown initiated.
                  </p>
                </div>
              </div>
              <div class='flex flex-col gap-2.5 pl-5 relative icon-history-list'>
                <div class='flex gap-1.75 items-center'>
                  <p class='font-publicSans font-medium text-[13px] text-font-primary'>
                    Case accepted by Duty Triage Coordinator
                  </p>
                  <span class='tag inreview-tag'>
                    <img
                      src='/src/assets/icon/search-icon.svg'
                      alt='inreview-icon'
                    />
                    In review
                  </span>
                </div>
                <div class='flex gap-1.75'>
                  <p class='font-publicSans font-medium text-[11px] text-font-secondary'>
                    Hendra Kurniawan
                  </p>
                  <span class='middle-dot'>&#xb7;</span>
                  <span class='font-ibmPlexMono font-normal text-[11px] text-font-tertiary'>
                    Nov 6, 06:39 PM GMT+7
                  </span>
                </div>
                <div class='border border-border-primary rounded-xl p-3.25'>
                  <p class='font-publicSans font-normal text-[12px] text-font-secondary'>
                    Dispatched secondary valve isolation team from Cilandak
                    maintenance station.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <aside className='w-full h-fit col-start-1 col-end-13 lg:col-start-9 lg:col-end-13 flex flex-col gap-5.25 rounded-2xl p-5.75 bg-bg-tertiary border border-border-primary'>
          <div>
            <span className='eyebrow-heading text-[11px]'>Tracking Code</span>
            <h2 className='text-xl font-ibmPlexMono font-semibold text-font-quinary'>
              CMP-2026-8841
            </h2>
          </div>
          <div className='border-t border-border-primary py-4.25 flex flex-col gap-3.25'>
            <div className='flex flex-col gap-0.5'>
              <span className='eyebrow-heading font-normal text-[10px]'>
                Assigned Authority
              </span>
              <p className='font-publicSans font-semibold text-[13px]'>
                Perumda PAM JAYA (Clean Drinking Water)
              </p>
            </div>
            <div className='flex flex-col gap-0.5'>
              <span className='eyebrow-heading font-normal text-[10px]'>
                Category
              </span>
              <p className='font-publicSans font-normal text-[13px]'>
                Water & Sewage
              </p>
            </div>
            <div className='flex flex-col gap-0.5'>
              <span className='eyebrow-heading font-normal text-[10px]'>
                Location
              </span>
              <p className='flex items-start gap-1.25 leading-none'>
                <span>
                  <img
                    src='/src/assets/icon/location-icon.svg'
                    alt='location-icon'
                  />
                </span>
                <span className='flex flex-col gap-1.75 font-publicSans'>
                  <span className='font-medium text-[13px]'>
                    Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                  </span>
                  <span className='font-normal text-[11px] text-font-tertiary'>
                    Cilandak Barat, Jakarta Selatan
                  </span>
                </span>
              </p>
            </div>
            <div className='flex flex-col gap-0.5'>
              <span className='eyebrow-heading font-normal text-[10px]'>
                Reported On
              </span>
              <p className='font-publicSans font-normal text-[13px]'>
                Nov 6, 2026
              </p>
            </div>
            <div className='flex flex-col gap-0.5'>
              <span className='eyebrow-heading font-normal text-[10px]'>
                Reported By
              </span>
              <p className='font-publicSans font-normal text-[13px]'>
                Fahrul S.
              </p>
            </div>
            <div className='flex flex-col gap-0.5'>
              <span className='eyebrow-heading font-normal text-[10px]'>
                Field Officer
              </span>
              <p className='flex flex-col gap-1 font-normal'>
                <span className='font-publicSans text-[13px]'>
                  Hendra Kurniawan
                </span>
                <span className='font-ibmPlexMono text-[10px] text-font-tertiary'>
                  Tim Reaksi Cepat PAM JAYA [PAM-JKT-044]
                </span>
              </p>
            </div>
          </div>
          <div className='w-full border-t border-border-primary py-3.75'>
            <button className='w-full rounded-full py-2 bg-bg-primary text-font-quaternary font-publicSans font-semibold text-xs'>
              Report similar issue nearby
            </button>
          </div>
        </aside>
      </div>
    </MainLayout>
  );
}
