import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router";

export default function MyReportPage() {
  return (
    <MainLayout>
      <section className='hero-section-two'>
        <div className='hero-text-box-two'>
          <span className='eyebrow-heading'>Citizen Management</span>
          <h1 className='title'>Account & Case History</h1>
        </div>
      </section>
      <section className='filter-chips'>
        <Link
          to={"/profile/my-report"}
          className='capsul radius-20 active-state'>
          <span>My complaints</span>
        </Link>
        <Link to={"/profile/update-profile"} className='capsul radius-20'>
          <span>Profile</span>
        </Link>
        <Link
          to={"/profile/notification-preference"}
          className='capsul radius-20'>
          <span>Notifications</span>
        </Link>
        <Link to={"/profile/privacy-data"} className='capsul radius-20'>
          <span>Privacy & data</span>
        </Link>
        <Link to={"/profile/security"} className='capsul radius-20'>
          <span>Security</span>
        </Link>
      </section>
      <section className='table-box'>
        <div className='table-title'>
          <span className='eyebrow-heading text-[11px]'>
            Your tracked records (2)
          </span>
          <button className='button button-primary'>
            + File new complaint
          </button>
        </div>
        <div className='table-container'>
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
                  <span className='tag submitted-tag'>
                    <img
                      src='/src/assets/icon/time-icon.svg'
                      alt='submitted-icon'
                    />
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
                  <span className='tag inreview-tag'>
                    <img
                      src='/src/assets/icon/search-icon.svg'
                      alt='inreview-icon'
                    />
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
                      className='lucide lucide-triangle-alert preview-icon'>
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
