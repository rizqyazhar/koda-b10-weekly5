import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router";

export default function SecurityPage() {
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
        <Link to={"/profile/privacy-data"} className='capsul radius-20'>
          <span>Privacy & data</span>
        </Link>
        <Link
          to={"/profile/security"}
          className='capsul radius-20 active-state'>
          <span>Security</span>
        </Link>
      </section>
      <section class='side-grow'>
        <form class='form'>
          <div class='form-header'>
            <h2 class='title'>Security</h2>
            <p class='description'>
              Change the password used to sign in to your WargaReport account.
            </p>
          </div>
          <div>
            <div class='input-container'>
              <label for='current-password-input' class='input-label'>
                <span class='eyebrow-heading'>Current Password</span>
              </label>
              <div class='input-box'>
                <div class='input-with-button'>
                  <input
                    id='current-password-input'
                    class='input'
                    type='password'
                    placeholder='Enter current password'
                  />
                  <div class='eye-icon'></div>
                </div>
              </div>
            </div>
            <small class='small'>
              Required to confirm any password change.
            </small>
          </div>
          <div>
            <div class='input-container'>
              <label for='new-password-input' class='input-label'>
                <span class='eyebrow-heading'>New Password</span>
              </label>
              <div class='input-box'>
                <div class='input-with-button'>
                  <input
                    id='new-password-input'
                    class='input'
                    type='password'
                    placeholder='At least 8 characters'
                  />
                  <div class='eye-icon'></div>
                </div>
              </div>
            </div>
            <small class='small'>
              Use at least 8 characters, including a letter and a number.
            </small>
          </div>
          <div>
            <div class='input-container'>
              <label for='confirm-new-password-input' class='input-label'>
                <span class='eyebrow-heading'>Confirm New Password</span>
              </label>
              <div class='input-box'>
                <div class='input-with-button'>
                  <input
                    id='confirm-new-password-input'
                    class='input'
                    type='password'
                    placeholder='Re-enter new password'
                  />
                  <div class='eye-icon'></div>
                </div>
              </div>
            </div>
          </div>
          <button class='button button-primary w-fit'>Update password</button>
        </form>
      </section>
    </MainLayout>
  );
}
