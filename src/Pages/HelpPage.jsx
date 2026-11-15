import Accordion from "../components/Accordion";
import MainLayout from "../layouts/MainLayout";

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
        <div className='col-start-1 col-end-13 lg:col-start-8 lg:col-end-13'>
          <div className='status-meaning-box'>
            <div className='status-meaning-header'>
              <span className='eyebrow-heading'>Status Meanings</span>
              <p className='title font-size-16'>What does each status mean?</p>
            </div>
            <div className='status-meaning-content'>
              <div className='status-meaning-list'>
                <span className='tag submitted-tag'>
                  <img src='/img/icons/time-icon.svg' alt='submitted-icon' />
                  Submitted
                </span>
                <p>
                  Your report was submitted and received by our intake router.
                </p>
              </div>
              <div className='status-meaning-list'>
                <span className='tag received-tag'>
                  <img src='/img/icons/received-icon.svg' alt='received-icon' />
                  Received
                </span>
                <p>Verified by WargaReport and queued for agency dispatch.</p>
              </div>
              <div className='status-meaning-list'>
                <span className='tag inreview-tag'>
                  <img src='/img/icons/search-icon.svg' alt='inreview-icon' />
                  In review
                </span>
                <p>
                  Agency coordinators are assessing field safety and equipment.
                </p>
              </div>
              <div className='status-meaning-list'>
                <span className='tag assigned-tag'>
                  <img src='/img/icons/asigned-icon.svg' alt='assigned-icon' />
                  Assigned
                </span>
                <p>A field crew or technician is dispatched to the street.</p>
              </div>
              <div className='status-meaning-list'>
                <span className='tag awaiting-tag'>
                  <img src='/img/icons/alert-icon.svg' alt='awaiting-icon' />
                  Awaiting your info
                </span>
                <p>Inspector needs clarification or an downdated photo.</p>
              </div>
              <div className='status-meaning-list'>
                <span className='tag resolved-tag'>
                  <img src='/img/icons/check-icon.svg' alt='resolved-icon' />
                  Resolved
                </span>
                <p>
                  Physical fix completed and inspection statement published.
                </p>
              </div>
              <div className='status-meaning-list'>
                <span className='tag closed-tag'>
                  <img src='/img/icons/archieve-icon.svg' alt='closed-icon' />
                  Closed
                </span>
                <p>Case completed and archived.</p>
              </div>
            </div>
          </div>
          <div className='emergency-card'>
            <div>
              <div>
                <img src='/img/icons/call-icon.svg' alt='call-icon' />
              </div>
              <p>Is this an acute life-safety emergency?</p>
            </div>
            <p>
              WargaReport is for non-urgent municipal infrastructure. If there
              is an active fire, medical crisis, or immediate hazard to life:
            </p>
            <div>
              <button>Call 112 (National Emergency)</button>
              <button>Call 113 (Fire Dispatch)</button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
