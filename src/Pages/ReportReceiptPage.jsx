import MainLayout from "../layouts/MainLayout";

export default function ReportReceiptPage() {
  return (
    <MainLayout>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 justify-center lg:justify-start'>
        <section className='receipt-card'>
          <div className='notes-receipt-box'>
            <span className='tag submitted-tag'>
              <img src='/src/assets/icon/time-icon.svg' alt='submitted-icon' />
              Submitted
            </span>
            <span>Logged 04:41 PM</span>
          </div>
          <div className='receipt-code-box'>
            <span className='eyebrow-heading text-[13px]'>
              Official Tracking Reference
            </span>
            <div>
              <h1>CMP-2026-9472</h1>
              <button>
                <img src='/src/assets/icon/copy-icon.svg' alt='copy-icon' />
              </button>
            </div>
          </div>
          <div className='dashed-box'>
            <h2>Pohon tumbang di depan Kebun Binatang samping Kampus ITB</h2>
            <p>
              Dinas Pertamanan dan Hutan Kota · Jl. Tamansari depan Kebun
              Binatang
            </p>
          </div>
          <ol className='receipt-guidance list-decimal'>
            <h3 className='tilte'>What happens next</h3>
            <li>
              Your report is awaiting evidence verification. Proposed bureau:
              <span> Dinas Pertamanan dan Hutan Kota</span>
            </li>
            <li>
              A duty inspector will assess site urgency within the target
              <span> 48-hour SLA window once routed.</span>
            </li>
            <li>
              Status transitions and official statements will appear directly on
              your tracking page.
            </li>
          </ol>
          <div>
            <button className='button button-primary'>
              Track report status
              <img
                src='/src/assets/icon/arrow-right-white.svg'
                alt='arrow-right-white'
              />
            </button>
            <button className='button button-secondary'>
              <img
                src='/src/assets/icon/print-icon.svg'
                alt='arrow-right-white'
              />
              Print receipt
            </button>
            <button className='button button-secondary'>Back to feed</button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
