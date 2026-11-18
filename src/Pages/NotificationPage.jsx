import MainLayout from "../layouts/MainLayout";

export default function NotificationPage() {
  return (
    <MainLayout>
      <section className='hero-section-two'>
        <div className='hero-text-box-two'>
          <span className='eyebrow-heading'>Alerts & Activity</span>
          <h1 className='title'>Notifications</h1>
        </div>
        <div>
          <button className='button button-noborder-primary'>
            <img
              src='/src/assets/icon/checklist-icon.svg'
              alt='checklist-icon'
            />
            Mark all as read
          </button>
        </div>
      </section>
      <section className='filter-chips'>
        <span className='eyebrow-heading text-[11px]'>filter:</span>
        <div>
          <label
            htmlFor='all-filter'
            className='capsul relative has-checked:bg-bg-primary has-checked:text-font-quaternary bg-bg-tertiary border border-border-primary cursor-pointer text-sm'>
            <input
              className='absolute opacity-0 w-full cursor-pointer'
              type='radio'
              name='filter-notification'
              id='all-filter'
              defaultChecked
            />
            All
          </label>
          <label
            htmlFor='unread-filter'
            className='capsul relative has-checked:bg-bg-primary has-checked:text-font-quaternary bg-bg-tertiary border border-border-primary cursor-pointer text-sm'>
            <input
              className='absolute opacity-0 w-full cursor-pointer'
              type='radio'
              name='filter-notification'
              id='unread-filter'
            />
            Unread
          </label>
          <label
            htmlFor='status-filter'
            className='capsul relative has-checked:bg-bg-primary has-checked:text-font-quaternary bg-bg-tertiary border border-border-primary cursor-pointer text-sm'>
            <input
              className='absolute opacity-0 w-full cursor-pointer'
              type='radio'
              name='filter-notification'
              id='status-filter'
            />
            Status
          </label>
          <label
            htmlFor='replies-filter'
            className='capsul relative has-checked:bg-bg-primary has-checked:text-font-quaternary bg-bg-tertiary border border-border-primary cursor-pointer text-sm'>
            <input
              className='absolute opacity-0 w-full cursor-pointer'
              type='radio'
              name='filter-notification'
              id='replies-filter'
            />
            Replies
          </label>
        </div>
      </section>
      <section className='side-grow'>
        <div className='notification-nav-box'>
          <label htmlFor='notification-nav-1' className='notification-nav-list'>
            <input
              className='absolute opacity-0 w-full cursor-pointer'
              type='radio'
              name='notification-nav'
              id='notification-nav-1'
              checked
            />
            <span>
              <span>CMP-2026-9472</span>
              <span>04:41 PM</span>
            </span>
            <p>Report received — verification pending</p>
            <span>
              <span>Status change</span>
              <span></span>
            </span>
          </label>
          <label htmlFor='notification-nav-2' className='notification-nav-list'>
            <input
              className='absolute opacity-0 w-full cursor-pointer'
              type='radio'
              name='notification-nav'
              id='notification-nav-2'
            />
            <span>
              <span>CMP-2026-8841</span>
              <span>01:28 PM</span>
            </span>
            <p>Status changed to In review</p>
            <span>
              <span>Status change</span>
              <span></span>
            </span>
          </label>
        </div>
        <div className='notification-details-box'>
          <div>
            <div>
              <span className='eyebrow-heading text-[11px]'>
                Incident Reference
              </span>
              <span>CMP-2026-9472</span>
            </div>
            <div>
              <span className='tag submitted-tag'>
                <img
                  src='/src/assets/icon/time-icon.svg'
                  alt='submitted-icon'
                />
                Submitted
              </span>
            </div>
          </div>
          <div>
            <p className='title'>Report received — verification pending</p>
            <p>Dispatched Oct 30, 04:41 PM GMT+7</p>
          </div>
          <div className='notification-message'>
            <p>
              Your report CMP-2026-9472 is queued for WargaReport evidence
              verification. Proposed bureau: Dinas Pertamanan dan Hutan Kota DKI
              Jakarta. The SLA countdown starts once the report is routed.
            </p>
          </div>
          <button className='button w-fit'>
            Open complaint tracking record
            <img
              src='/src/assets/icon/arrow-right-white.svg'
              alt='arrow-right-white'
            />
          </button>
        </div>
      </section>
    </MainLayout>
  );
}
