import MainLayout from "../layouts/MainLayout";

export default function PrivacyDataPage() {
  return (
    <MainLayout>
      <section class='hero-section-two'>
        <div class='hero-text-box-two'>
          <span class='eyebrow-heading'>Citizen Management</span>
          <h1 class='title'>Account & Case History</h1>
        </div>
      </section>
      <section class='filter-chips'>
        <a href='/my-reports.html' class='capsul'>
          <span>My complaints</span>
        </a>
        <a href='/profile.html' class='capsul'>
          <span>Profile</span>
        </a>
        <a href='/notification-preference.html' class='capsul'>
          <span>Notifications</span>
        </a>
        <a href='/privacy-data.html' class='capsul active-state'>
          <span>Privacy & data</span>
        </a>
        <a href='/security.html' class='capsul'>
          <span>Security</span>
        </a>
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
            <button class='button button-tertiary'>
              <div class='download-icon'></div>
              Download JSON archive
            </button>
          </div>
        </form>
      </section>
    </MainLayout>
  );
}
