import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router";

export default function UpdateProfilePage() {
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
        <Link
          to={"/profile/update-profile"}
          className='capsul radius-20 active-state'>
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
      <section class='side-grow'>
        <form class='form'>
          <div class='form-header'>
            <h2 class='title'>Filer Identity & Preferences</h2>
            <p class='description'>
              Used to pre-fill future complaint forms and verify status
              inquiries.
            </p>
          </div>
          <div class='upload-profile-photo'>
            <div class='photo-bg'>FS</div>
            <div>
              <p class='title'>Profile photo</p>
              <p class='description'>
                JPG, PNG, or WebP. Square images work best.
              </p>
              <button class='button button-tertiary'>Upload photo</button>
            </div>
          </div>
          <div class='input-container'>
            <label for='fullname-input' class='input-label'>
              <span class='eyebrow-heading'>Full Legal Name</span>
            </label>
            <div class='input-box'>
              <input
                id='fullname-input'
                class='input'
                type='text'
                value='Fahrul Septiana'
                placeholder='Enter your Fullname'
              />
            </div>
          </div>
          <div class='input-container'>
            <label for='email-input' class='input-label'>
              <span class='eyebrow-heading'>Primary Notification Email</span>
            </label>
            <div class='input-box'>
              <input
                id='email-input'
                class='input'
                type='email'
                value='fahrul@wargareport.id'
                placeholder='Enter your Email'
              />
            </div>
          </div>
          <div class='input-container'>
            <label for='tel-input' class='input-label'>
              <span class='eyebrow-heading'>SMS Contact Number </span>
            </label>
            <div class='input-box'>
              <input
                id='tel-input'
                class='input'
                type='tel'
                value='+62 812-9842-1054'
                placeholder='Enter your Phone Number'
              />
            </div>
          </div>
          <div class='input-container'>
            <label for='nik-input' class='input-label'>
              <span class='eyebrow-heading'>NIK</span>
            </label>
            <div class='input-box'>
              <input
                id='nik-input'
                class='input'
                type='text'
                value='3174051809900004'
                placeholder='Enter your NIK'
              />
            </div>
          </div>
          <button class='button button-primary w-fit'>
            Save profile changes
          </button>
        </form>
      </section>
    </MainLayout>
  );
}
