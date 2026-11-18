import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router";

export default function PrivacyDataPage() {
  return (
    <MainLayout>
      <section class='hero-section-two'>
        <div class='hero-text-box-two'>
          <span class='eyebrow-heading'>Citizen Management</span>
          <h1 class='title'>Account & Case History</h1>
        </div>
      </section>
      <section className='filter-chips'>
        <Link to={"/profile/my-report"} className='capsul radius-20'>
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
        <Link
          to={"/profile/privacy-data"}
          className='capsul radius-20 active-state'>
          <span>Privacy & data</span>
        </Link>
        <Link to={"/profile/security"} className='capsul radius-20'>
          <span>Security</span>
        </Link>
      </section>
      <section class='side-grow'>
        <form class='form'>
          <div class='form-header'>
            <h2 class='title'>Privacy Rights & Data Portability</h2>
            <p class='description'>
              Review personal records retained under municipal open data laws.
            </p>
          </div>
          <div class='text'>
            <p>
              Under Indonesian Law No. 27/2022 on Personal Data Protection (UU
              PDP) and Law No. 14/2008 on Public Information Openness (UU KIP),
              personal citizen identifiers are strictly segregated from public
              registers.
            </p>
          </div>
          <div class='dashed-box archive-download'>
            <p>Download your case archive</p>
            <p>
              Export all submitted complaints, attached media metadata, and
              officer replies as standard JSON.
            </p>
            <button class='button button-tertiary w-fit bg-bg-tertiary border border-border-secondary'>
              <div class='download-icon'></div>
              Download JSON archive
            </button>
          </div>
        </form>
      </section>
    </MainLayout>
  );
}
