import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router";

export default function NotificationPreferencePage() {
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
          className='capsul radius-20 active-state'>
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
            <h2 class='title'>Dispatch Notification Preferences</h2>
            <p class='description'>
              Control when municipal bureaus may send automated status alerts.
            </p>
          </div>
          <div class='checkbox-box'>
            <label for='email-status-transitions'>
              <input
                type='checkbox'
                name='email-status-transitions'
                id='email-status-transitions'
                class='email-status-transitions'
              />
              <span>
                <span>Email Status Transitions</span>
                <span>
                  Receive an email whenever an inspector triages, assigns, or
                  resolves your case.
                </span>
              </span>
            </label>
            <label for='urgent-sms-alerts'>
              <input
                type='checkbox'
                name='urgent-sms-alerts'
                id='urgent-sms-alerts'
                class='urgent-sms-alerts'
              />
              <span>
                <span>Urgent SMS Alerts</span>
                <span>
                  Receive text messages when emergency crews need physical gate
                  access.
                </span>
              </span>
            </label>
            <label for='weekly-ward-resolution-digest'>
              <input
                type='checkbox'
                name='weekly-ward-resolution-digest'
                id='weekly-ward-resolution-digest'
                class='weekly-ward-resolution-digest'
              />
              <span>
                <span>Weekly Ward Resolution Digest</span>
                <span>
                  Summary of all public infrastructure projects completed in
                  your postal code.
                </span>
              </span>
            </label>
          </div>
          <button class='button button-primary w-fit'>
            Update alert preferences
          </button>
        </form>
      </section>
    </MainLayout>
  );
}
