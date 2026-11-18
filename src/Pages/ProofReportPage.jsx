import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FormContext } from "../contexts/FormContext";

export default function ProofReportPage() {
  const [formReport, setFormReport] = useContext(FormContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const proofFile = ["incident_capture_camera.jpg", "quick_site_clip.mp4"];

    setFormReport((prev) => ({ ...prev, proofFile: proofFile }));

    navigate("/add-report/review-send");
  };
  return (
    <section className='col-start-1 col-end-13 lg:col-start-4 lg:col-end-13 flex flex-col gap-2.5 bg-bg-tertiary border border-border-primary rounded-2xl py-3.75 px-4.75 md:py-5.75 md:px-6.75 lg:py-7.75 lg:px-8.75 overflow-hidden'>
      <div className='flex flex-col gap-1.5'>
        <span className='eyebrow-heading font-normal text-[11px]'>
          Step 03 of 04
        </span>
        <h2 className='title text-[25px]'>Attach evidence</h2>
        <p className='description text-[13px]'>
          Reports with photographic proof or audio notes are prioritized by
          field dispatchers.
        </p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 py-2.5'>
        <div className='py-6 flex flex-col gap-5.5 rounded-2xl border border-dashed border-border-secondary'>
          <div className='flex flex-col justify-center items-center gap-1 font-publicSans'>
            <div className='upload-icon'></div>
            <p className='font-medium text-sm text-font-primary mt-1'>
              Upload evidence files or use camera simulation
            </p>
            <p className='font-normal text-xs text-font-tertiary text-center'>
              Images, audio voice notes, inspection video clips (JPG, MP4, M4A)
            </p>
          </div>
          <div className='upload-evidence-button-box flex-wrap lg:flex-nowrap'>
            <label
              htmlFor='photo-file'
              className='relative flex items-center whitespace-nowrap lg:whitespace-normal gap-1 border-border-primary border px-2 py-1 rounded-full text-xs font-publicSans cursor-pointer'>
              <input
                id='photo-file'
                name='photo-file'
                type='file'
                className='opacity-0 absolute cursor-pointer w-full h-full'
              />
              <div className='camera-icon'></div>
              <span>Capture Photo</span>
            </label>
            <label
              htmlFor='audio-file'
              className='relative flex items-center whitespace-nowrap lg:whitespace-normal gap-1 border-border-primary border px-2 py-1 rounded-full text-xs font-publicSans cursor-pointer'>
              <input
                id='audio-file'
                name='audio-file'
                type='file'
                className='opacity-0 absolute cursor-pointer w-full h-full'
              />
              <div className='mic-icon'></div>
              <span>Record Audio Memo</span>
            </label>
            <label
              htmlFor='video-file'
              className='relative flex items-center whitespace-nowrap lg:whitespace-normal gap-1 border-border-primary border px-2 py-1 rounded-full text-xs font-publicSans cursor-pointer'>
              <input
                id='video-file'
                name='video-file'
                type='file'
                className='opacity-0 absolute cursor-pointer w-full h-full'
              />
              <div className='video-icon'></div>
              <span>Attach Video Clip</span>
            </label>
          </div>
        </div>
        <div className='attached-evidence-box'>
          <div className='attached-evidence-header'>
            <p className='font-ibmPlexMono font-medium text-xs uppercase text-font-secondary'>
              Attached evidence (2)
            </p>
            <p className='font-publicSans font-normal text-xs text-bg-primary'>
              Click any card to inspect
            </p>
          </div>
          <div className='attached-evidence-content'>
            <div className='evidence-card'>
              <div className='evidence-img-box'>
                <img
                  className='w-full h-full'
                  src='/src/assets/img/incident-photo.png'
                  alt='incident-photo'
                />
              </div>
              <div className='notes-evidence'>
                <div>
                  <p className='font-publicSans font-medium text-[12px] lg:text-[14px] text-font-primary'>
                    incident_capture_camera.jpg
                  </p>
                  <p className='uppercase font-ibmPlexMono text-[10px] lg:text-xs'>
                    IMAGE <span className='middle-dot'>&#xb7;</span> 2.4 MB
                  </p>
                  <p className='w-full font-publicSans text-xs lg:text-[14px] text-ellipsis truncate'>
                    Photographed live on-site by resident camera.
                  </p>
                </div>
                <div className='trash-icon'></div>
              </div>
            </div>
            <div className='evidence-card'>
              <div className='evidence-img-box'>
                <img
                  className='w-full h-full'
                  src='/src/assets/img/bg-play-video.png'
                  alt='incident-photo'
                />
              </div>
              <div className='notes-evidence'>
                <div className='flex flex-col gap-1 truncate'>
                  <p className='font-publicSans font-medium text-[12px] lg:text-[14px] text-font-primary'>
                    quick_site_clip.mp4
                  </p>
                  <p className='uppercase font-ibmPlexMono text-[10px] lg:text-xs'>
                    VIDEO <span className='middle-dot'>&#xb7;</span> 4.8 MB
                  </p>
                  <p className='w-full font-publicSans text-xs lg:text-[14px] text-ellipsis truncate'>
                    12-second horizontal pan of incident.
                  </p>
                </div>
                <div className='trash-icon'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center pt-5 text-[13px] font-semibold border-t border-border-primary font-publicSans'>
          <Link to={"/add-report/location"} className='text-bg-primary'>
            Cancel
          </Link>
          <button
            type='submit'
            className='flex items-center gap-1.75 py-2.5 px-5 text-font-quaternary font-semibold bg-bg-primary rounded-full cursor-pointer hover:opacity-80'>
            Continue
            <span>
              <img
                src='/src/assets/icon/arrow-right-white.svg'
                alt='arrow-right-white-icon'
              />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}
