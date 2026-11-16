import MainLayout from "../layouts/MainLayout";

export default function LiveFeedPage() {
  return (
    <MainLayout>
      <section className='flex flex-col lg:flex-row items-start gap-5 lg:gap-0 justify-between lg:items-end '>
        <div className='flex flex-col gap-2.5'>
          <span className='eyebrow-heading text-[11px]'>
            Public Incident Registry
          </span>
          <h1 className='title text-[35px]'>Community Reports & Fixes</h1>
          <p className='description text-sm max-w-lg'>
            Open incident feed in Jakarta and surrounding urban regions. Public
            visitors may browse; sign in to interact.
          </p>
        </div>
        <div className='flex flex-col-reverse'>
          <div className='flex items-center p-1.25 rounded-full border border-border-primary bg-bg-tertiary font-publicSans font-medium text-xs'>
            <label
              htmlFor='feed'
              className='relative w-full lg:w-fit flex items-center gap-1.5 py-2.5 px-3.25 rounded-none lg:rounded-full hover:cursor-pointer font-medium text-font-secondary bg-inherit has-checked:font-semibold has-checked:text-font-quaternary has-checked:bg-bg-primary'>
              <input
                id='feed'
                type='radio'
                name='choice'
                className='w-full absolute opacity-0'
                defaultChecked
              />
              <img src='/src/assets/icon/list-icon.svg' alt='list-icon' />
              Feed
            </label>
            <label
              htmlFor='map'
              className='relative w-full lg:w-fit flex items-center gap-1.5 py-2.5 px-3.25 rounded-none lg:rounded-full hover:cursor-pointer font-medium text-font-secondary bg-inherit has-checked:font-semibold has-checked:text-font-quaternary has-checked:bg-bg-primary'>
              <input
                id='map'
                type='radio'
                name='choice'
                className='w-full absolute opacity-0'
              />
              <img src='/src/assets/icon/map-icon.svg' alt='map-icon' />
              Map
            </label>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-3.5'>
        <div className='w-full flex flex-col gap-3'>
          <label
            htmlFor='search-filter-input'
            className='w-full lg:w-[42%] flex items-center gap-2.25 bg-bg-tertiary border border-border-secondary rounded-xl p-2 font-publicSans font-normal text-[13px]'>
            <div className='search-icon'></div>
            <input
              id='search-filter-input'
              className='w-full outline-none bg-inherit text-font-tertiary font-publicSans font-normal text-[13px]'
              type='text'
              placeholder='Search by street name, complaint ID, or keyword...'
            />
          </label>
          <div className='flex flex-wrap items-center gap-1.5 font-medium text-[10px] lg:text-xs font-publicSans'>
            <label
              htmlFor='all-issues'
              className='relative w-fit flex items-center gap-1 lg:gap-1.5 py-1.75 px-3.5 rounded-full border border-border-secondary bg-bg-tertiary text-font-secondary hover:cursor-pointer has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:border-0'>
              <input
                type='radio'
                name='chip-filter'
                id='all-issues'
                className='absolute opacity-0'
                defaultChecked
              />
              <span>All Issues (6)</span>
            </label>
            <label
              htmlFor='road-transit'
              className='relative w-fit flex items-center gap-1 lg:gap-1.5 py-1.75 px-3.5 rounded-full border border-border-secondary bg-bg-tertiary text-font-secondary hover:cursor-pointer has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:border-0'>
              <input
                type='radio'
                name='chip-filter'
                id='road-transit'
                className='absolute opacity-0'
              />
              <div className='road-icon'></div>
              <span>Roads & Transit</span>
            </label>
            <label
              htmlFor='water-sewage'
              className='relative w-fit flex items-center gap-1 lg:gap-1.5 py-1.75 px-3.5 rounded-full border border-border-secondary bg-bg-tertiary text-font-secondary hover:cursor-pointer has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:border-0'>
              <input
                type='radio'
                name='chip-filter'
                id='water-sewage'
                className='absolute opacity-0'
              />
              <div className='water-icon'></div>
              <span>Water & Sewage</span>
            </label>
            <label
              htmlFor='street-lightning'
              className='relative w-fit flex items-center gap-1 lg:gap-1.5 py-1.75 px-3.5 rounded-full border border-border-secondary bg-bg-tertiary text-font-secondary hover:cursor-pointer has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:border-0'>
              <input
                type='radio'
                name='chip-filter'
                id='street-lightning'
                className='absolute opacity-0'
              />
              <div className='sun-icon'></div>
              <span>Street Lighting</span>
            </label>
            <label
              htmlFor='sanitation-waste'
              className='relative w-fit flex items-center gap-1 lg:gap-1.5 py-1.75 px-3.5 rounded-full border border-border-secondary bg-bg-tertiary text-font-secondary hover:cursor-pointer has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:border-0'>
              <input
                type='radio'
                name='chip-filter'
                id='sanitation-waste'
                className='absolute opacity-0'
              />
              <div className='trash-icon'></div>
              <span>Sanitation & Waste</span>
            </label>
            <label
              htmlFor='park-trees'
              className='relative w-fit flex items-center gap-1 lg:gap-1.5 py-1.75 px-3.5 rounded-full border border-border-secondary bg-bg-tertiary text-font-secondary hover:cursor-pointer has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:border-0'>
              <input
                type='radio'
                name='chip-filter'
                id='park-trees'
                className='absolute opacity-0'
              />
              <div className='trees-icon'></div>
              <span>Public Parks & Trees</span>
            </label>
            <label
              htmlFor='noise-disturbance'
              className='relative w-fit flex items-center gap-1 lg:gap-1.5 py-1.75 px-3.5 rounded-full border border-border-secondary bg-bg-tertiary text-font-secondary hover:cursor-pointer has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:border-0'>
              <input
                type='radio'
                name='chip-filter'
                id='noise-disturbance'
                className='absolute opacity-0'
              />
              <div className='speaker-icon'></div>
              <span>Noise & Disturbance</span>
            </label>
            <label
              htmlFor='building-zoning'
              className='relative w-fit flex items-center gap-1 lg:gap-1.5 py-1.75 px-3.5 rounded-full border border-border-secondary bg-bg-tertiary text-font-secondary hover:cursor-pointer has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:border-0'>
              <input
                type='radio'
                name='chip-filter'
                id='building-zoning'
                className='absolute opacity-0'
              />
              <div className='building-icon'></div>
              <span>Building & Zoning</span>
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-4.5'>
          <div className='flex flex-col lg:flex-row gap-2.5 justify-between items-start lg:items-center '>
            <div className='flex items-center gap-4.5 lg:gap-6 px-2.5 py-0 lg:py-1.25 lg:px-3.25 font-normal rounded-full border border-border-primary bg-bg-tertiary'>
              <span className='uppercase font-ibmPlexMono text-[10px] text-font-tertiary'>
                Status:
              </span>
              <div className='w-fit flex items-center overflow-x-auto'>
                <label
                  className='font-publicSans text-xs relative whitespace-nowrap rounded-full px-2.75 py-1.75 bg-inherit text-font-secondary has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:font-medium cursor-pointer'
                  htmlFor='all'>
                  <input
                    id='all'
                    type='radio'
                    name='status-filter'
                    className='absolute opacity-0'
                    defaultChecked
                  />
                  All
                </label>
                <label
                  className='font-publicSans text-xs relative whitespace-nowrap rounded-full px-2.75 py-1.75 bg-inherit text-font-secondary has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:font-medium cursor-pointer'
                  htmlFor='submitted'>
                  <input
                    id='submitted'
                    type='radio'
                    name='status-filter'
                    className='absolute opacity-0'
                  />
                  Submitted
                </label>
                <label
                  className='font-publicSans text-xs relative whitespace-nowrap rounded-full px-2.75 py-1.75 bg-inherit text-font-secondary has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:font-medium cursor-pointer'
                  htmlFor='received'>
                  <input
                    id='received'
                    type='radio'
                    name='status-filter'
                    className='absolute opacity-0'
                  />
                  Received
                </label>
                <label
                  className='font-publicSans text-xs relative whitespace-nowrap rounded-full px-2.75 py-1.75 bg-inherit text-font-secondary has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:font-medium cursor-pointer'
                  htmlFor='inReview'>
                  <input
                    id='inReview'
                    type='radio'
                    name='status-filter'
                    className='absolute opacity-0'
                  />
                  In review
                </label>
                <label
                  className='font-publicSans text-xs relative whitespace-nowrap rounded-full px-2.75 py-1.75 bg-inherit text-font-secondary has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:font-medium cursor-pointer'
                  htmlFor='assigned'>
                  <input
                    id='assigned'
                    type='radio'
                    name='status-filter'
                    className='absolute opacity-0'
                  />
                  Assigned
                </label>
                <label
                  className='font-publicSans text-xs relative whitespace-nowrap rounded-full px-2.75 py-1.75 bg-inherit text-font-secondary has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:font-medium cursor-pointer'
                  htmlFor='awaiting'>
                  <input
                    id='awaiting'
                    type='radio'
                    name='status-filter'
                    className='absolute opacity-0'
                  />
                  Awaiting your info
                </label>
                <label
                  className='font-publicSans text-xs relative whitespace-nowrap rounded-full px-2.75 py-1.75 bg-inherit text-font-secondary has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:font-medium cursor-pointer'
                  htmlFor='resolved'>
                  <input
                    id='resolved'
                    type='radio'
                    name='status-filter'
                    className='absolute opacity-0'
                  />
                  Resolved
                </label>
                <label
                  className='font-publicSans text-xs relative whitespace-nowrap rounded-full px-2.75 py-1.75 bg-inherit text-font-secondary has-checked:bg-bg-primary has-checked:text-font-quaternary has-checked:font-medium cursor-pointer'
                  htmlFor='closed'>
                  <input
                    id='closed'
                    type='radio'
                    name='status-filter'
                    className='absolute opacity-0'
                  />
                  Closed
                </label>
              </div>
            </div>
            <label
              htmlFor='with-photo-filter'
              className='flex items-center gap-2.5 py-2.5 px-4 font-normal text-xs rounded-full font-publicSans text-font-secondary bg-bg-tertiary border border-border-secondary'>
              <input
                type='checkbox'
                name='with-photo-filter'
                id='with-photo-filter'
                className='with-photo-filter'
              />
              With photos/proof only
            </label>
          </div>
          <div className='feed-content-lists'>
            <div className='feed-contents'></div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
