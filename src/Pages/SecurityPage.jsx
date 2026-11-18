import MainLayout from "../layouts/MainLayout";

export default function SecurityPage() {
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
        <a href='/privacy-data.html' class='capsul'>
          <span>Privacy & data</span>
        </a>
        <a href='/security.html' class='capsul active-state'>
          <span>Security</span>
        </a>
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
          <button class='button button-primary'>Update password</button>
        </form>
      </section>
    </MainLayout>
  );
}
