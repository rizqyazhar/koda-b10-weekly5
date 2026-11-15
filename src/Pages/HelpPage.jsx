import Accordion from "../components/Accordion";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";

export default function HelpPage() {
  return (
    <MainLayout>
      <section className='flex flex-col items-start gap-5 lg:flex-row lg:justify-between lg:items-end '>
        <div className='flex flex-col gap-2.5'>
          <span className='eyebrow-heading text-[11px]'>Citizen Help</span>
          <h1 className='title text-3xl lg:text-4xl'>How WargaReport Works</h1>
          <p className='description max-w-md lg:max-w-lg text-sm'>
            Everything you need to know about reporting civic issues, public
            countdown timers, and tracking city fixes.
          </p>
        </div>
      </section>
      <section className='grid grid-cols-1 justify-center lg:grid-cols-12 gap-8'>
        <div className='col-start-1 col-end-13 lg:col-start-1 lg:col-end-8 flex flex-col gap-3'>
          <span className='eyebrow-heading text-[11px]'>
            Frequently Asked Questions
          </span>
          <Accordion
            eyebrowHeading='How it works'
            accordionTitle='How does WargaReport get city issues fixed?'>
            <ol className='list-decimal list-inside flex flex-col gap-1.75'>
              <li>
                You spot an issue (pothole, water leak, dark street) and snap a
                photo.
              </li>
              <li>
                WargaReport verifies the evidence and dispatches it directly to
                the responsible municipal agency (PAM JAYA, Bina Marga, Dishub,
                DLH, Satpol PP, Citata).
              </li>
              <li>
                A public countdown starts. Neighbors can downvote the report to
                increase priority.
              </li>
              <li>
                Field crews resolve the physical issue and post verification
                proof before closing.
              </li>
            </ol>
          </Accordion>
          <Accordion
            eyebrowHeading='Privacy (UU PDP)'
            accordionTitle='Will my name or contact info be visible to the public?'>
            <ol className='list-decimal list-inside flex flex-col gap-1.75'>
              <li>
                You spot an issue (pothole, water leak, dark street) and snap a
                photo.
              </li>
              <li>
                WargaReport verifies the evidence and dispatches it directly to
                the responsible municipal agency (PAM JAYA, Bina Marga, Dishub,
                DLH, Satpol PP, Citata).
              </li>
              <li>
                A public countdown starts. Neighbors can downvote the report to
                increase priority.
              </li>
              <li>
                Field crews resolve the physical issue and post verification
                proof before closing.
              </li>
            </ol>
          </Accordion>
          <Accordion
            eyebrowHeading='Account Mandatory'
            accordionTitle='Do I need an account to lodge a report or interact?'>
            <ol className='list-decimal list-inside flex flex-col gap-1.75'>
              <li>
                You spot an issue (pothole, water leak, dark street) and snap a
                photo.
              </li>
              <li>
                WargaReport verifies the evidence and dispatches it directly to
                the responsible municipal agency (PAM JAYA, Bina Marga, Dishub,
                DLH, Satpol PP, Citata).
              </li>
              <li>
                A public countdown starts. Neighbors can downvote the report to
                increase priority.
              </li>
              <li>
                Field crews resolve the physical issue and post verification
                proof before closing.
              </li>
            </ol>
          </Accordion>
          <Accordion
            eyebrowHeading='Escalation'
            accordionTitle='What happens if an agency ignores or delays the report?'>
            <ol className='list-decimal list-inside flex flex-col gap-1.75'>
              <li>
                You spot an issue (pothole, water leak, dark street) and snap a
                photo.
              </li>
              <li>
                WargaReport verifies the evidence and dispatches it directly to
                the responsible municipal agency (PAM JAYA, Bina Marga, Dishub,
                DLH, Satpol PP, Citata).
              </li>
              <li>
                A public countdown starts. Neighbors can downvote the report to
                increase priority.
              </li>
              <li>
                Field crews resolve the physical issue and post verification
                proof before closing.
              </li>
            </ol>
          </Accordion>
          <Accordion
            eyebrowHeading='Notifications'
            accordionTitle='Can I get status alerts sent to my WhatsApp or Email?'>
            <ol className='list-decimal list-inside flex flex-col gap-1.75'>
              <li>
                You spot an issue (pothole, water leak, dark street) and snap a
                photo.
              </li>
              <li>
                WargaReport verifies the evidence and dispatches it directly to
                the responsible municipal agency (PAM JAYA, Bina Marga, Dishub,
                DLH, Satpol PP, Citata).
              </li>
              <li>
                A public countdown starts. Neighbors can downvote the report to
                increase priority.
              </li>
              <li>
                Field crews resolve the physical issue and post verification
                proof before closing.
              </li>
            </ol>
          </Accordion>
        </div>
        <div className='col-start-1 col-end-13 lg:col-start-8 lg:col-end-13 flex flex-col gap-8'>
          <div className='flex flex-col gap-3.75 py-7.5 px-5.75 rounded-xl bg-bg-tertiary border border-border-primary'>
            <div className='status-meaning-header'>
              <span className='eyebrow-heading text-[11px]'>
                Status Meanings
              </span>
              <p className='title font-size-16'>What does each status mean?</p>
            </div>
            <div className='flex flex-col gap-2.5'>
              <div className='flex items-center gap-2.5'>
                <span className='tag submitted-tag'>
                  <img
                    src='/src/assets/icon/time-icon.svg'
                    alt='submitted-icon'
                  />
                  Submitted
                </span>
                <p className='flex-1 font-normal text-xs font-publicSans text-font-secondary'>
                  Your report was submitted and received by our intake router.
                </p>
              </div>
              <div className='flex items-center gap-2.5'>
                <span className='tag received-tag'>
                  <img
                    src='/src/assets/icon/received-icon.svg'
                    alt='received-icon'
                  />
                  Received
                </span>
                <p className='flex-1 font-normal text-xs font-publicSans text-font-secondary'>
                  Verified by WargaReport and queued for agency dispatch.
                </p>
              </div>
              <div className='flex items-center gap-2.5'>
                <span className='tag inreview-tag'>
                  <img
                    src='/src/assets/icon/search-icon.svg'
                    alt='inreview-icon'
                  />
                  In review
                </span>
                <p className='flex-1 font-normal text-xs font-publicSans text-font-secondary'>
                  Agency coordinators are assessing field safety and equipment.
                </p>
              </div>
              <div className='flex items-center gap-2.5'>
                <span className='tag assigned-tag'>
                  <img
                    src='/src/assets/icon/asigned-icon.svg'
                    alt='assigned-icon'
                  />
                  Assigned
                </span>
                <p className='flex-1 font-normal text-xs font-publicSans text-font-secondary'>
                  A field crew or technician is dispatched to the street.
                </p>
              </div>
              <div className='flex items-center gap-2.5'>
                <span className='tag awaiting-tag'>
                  <img
                    src='/src/assets/icon/alert-icon.svg'
                    alt='awaiting-icon'
                  />
                  Awaiting your info
                </span>
                <p className='flex-1 font-normal text-xs font-publicSans text-font-secondary'>
                  Inspector needs clarification or an downdated photo.
                </p>
              </div>
              <div className='flex items-center gap-2.5'>
                <span className='tag resolved-tag'>
                  <img
                    src='/src/assets/icon/check-icon.svg'
                    alt='resolved-icon'
                  />
                  Resolved
                </span>
                <p className='flex-1 font-normal text-xs font-publicSans text-font-secondary'>
                  Physical fix completed and inspection statement published.
                </p>
              </div>
              <div className='flex items-center gap-2.5'>
                <span className='tag closed-tag'>
                  <img
                    src='/src/assets/icon/archieve-icon.svg'
                    alt='closed-icon'
                  />
                  Closed
                </span>
                <p className='flex-1 font-normal text-xs font-publicSans text-font-secondary'>
                  Case completed and archived.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 p-5.25 rounded-2xl bg-bg-warning border border-border-warning'>
            <div className='font-publicSans flex items-center gap-1.75 text-[13px] font-semibold text-font-warning'>
              <div>
                <img src='/src/assets/icon/call-icon.svg' alt='call-icon' />
              </div>
              <p>Is this an acute life-safety emergency?</p>
            </div>
            <p className='text-[13px] font-normal text-font-secondary'>
              WargaReport is for non-urgent municipal infrastructure. If there
              is an active fire, medical crisis, or immediate hazard to life:
            </p>
            <div className='flex items-center gap-2'>
              <Button
                btnText='Call 112 (National Emergency)'
                variant='button-basic'
                btnCustomStyles='py-1.75 px-2.5 rounded-full border border-border-warning bg-bg-tertiary'
                btnTextCustomStyles='text-xs font-semibold font-ibmPlexMono text-font-warning'
              />
              <Button
                btnText='Call 113 (Fire Dispatch)'
                variant='button-basic'
                btnCustomStyles='py-1.75 px-2.5 rounded-full border border-border-warning bg-bg-tertiary'
                btnTextCustomStyles='text-xs font-semibold font-ibmPlexMono text-font-warning'
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
