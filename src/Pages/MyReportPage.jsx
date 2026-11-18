import MainLayout from "../layouts/MainLayout";

export default function MyReportPage() {
  return (
    <MainLayout>
      <section class='hero-section-two'>
        <div class='hero-text-box-two'>
          <span class='eyebrow-heading'>Citizen Management</span>
          <h1 class='title'>Account & Case History</h1>
        </div>
      </section>
      <section class='filter-chips'>
        <a href='/my-reports.html' class='capsul radius-20 active-state'>
          <span>My complaints</span>
        </a>
        <a href='/profile.html' class='capsul radius-20'>
          <span>Profile</span>
        </a>
        <a href='/notification-preference.html' class='capsul radius-20'>
          <span>Notifications</span>
        </a>
        <a href='/privacy-data.html' class='capsul radius-20'>
          <span>Privacy & data</span>
        </a>
        <a href='/security.html' class='capsul radius-20'>
          <span>Security</span>
        </a>
      </section>
      <section class='table-box'>
        <div class='table-title'>
          <span class='eyebrow-heading'>filter:</span>
          <button class='button button-primary'>+ File new complaint</button>
        </div>
        <div class='table-container'>
          <table>
            <thead>
              <tr>
                <th scope='col'>Case ID</th>
                <th scope='col'>Title / Location</th>
                <th scope='col'>Agency</th>
                <th scope='col'>Status</th>
                <th scope='col'>SLA Target</th>
                <th scope='col'>Last Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>CMP-2026-9472</th>
                <td>
                  <span>
                    Pohon tumbang di depan Kebun Binatang samping Kampus ITB
                  </span>
                  <span>Jl. Tamansari depan Kebun Binatang</span>
                </td>
                <td>Dinas Pertamanan dan Hutan Kota Bandung</td>
                <td>
                  <span class='tag submitted-tag'>
                    <img src='/img/icons/time-icon.svg' alt='submitted-icon' />
                    Submitted
                  </span>
                </td>
                <td>
                  <span>
                    <span>Awaiting verification</span>
                  </span>
                </td>
                <td>Oct 30</td>
              </tr>
              <tr>
                <th scope='row'>CMP-2026-8841</th>
                <td>
                  <span>
                    PAM clean drinking water pipeline burst flooding sidewalk in
                    front of Cipete Raya MRT
                  </span>
                  <span>
                    Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                  </span>
                </td>
                <td>Perumda PAM JAYA (Clean Drinking Water)</td>
                <td>
                  <span class='tag inreview-tag'>
                    <img src='/img/icons/search-icon.svg' alt='inreview-icon' />
                    In review
                  </span>
                </td>
                <td>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='lucide lucide-triangle-alert preview-icon'>
                      <path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3' />
                      <path d='M12 9v4' />
                      <path d='M12 17h.01' />
                    </svg>
                    <span>Breached by 64h 2m</span>
                  </span>
                </td>
                <td>Oct 29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </MainLayout>
  );
}
