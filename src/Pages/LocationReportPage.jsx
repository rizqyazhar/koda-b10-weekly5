import { useState, useContext } from "react";
import { FormContext } from "../contexts/FormContext";
import { useNavigate } from "react-router";

export default function LocationReportPage() {
  const [formReport, setFormReport] = useContext(FormContext);

  const [addresInputValue, setAddressInputValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddressInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const addressValue = formData.get("address-input");
    console.log(addressValue);

    if (!addressValue) return;

    setFormReport((prev) => ({ ...prev, addressValue }));
    navigate("/add-report/proof");
  };

  return (
    <section className='col-start-1 col-end-13 lg:col-start-4 lg:col-end-13 flex flex-col gap-2.5 bg-bg-tertiary border border-border-primary rounded-2xl py-3.75 px-4.75 md:py-5.75 md:px-6.75 lg:py-7.75 lg:px-8.75'>
      <div className='flex flex-col gap-1.5'>
        <span className='eyebrow-heading font-normal text-[11px]'>
          Step 02 of 04
        </span>
        <h2 className='title text-[25px]'>Where is it located??</h2>
        <p className='description text-[13px]'>
          Provide street address, RT/RW, or notable landmark for inspection
          crews.
        </p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 py-2.5'>
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='wilayah-select-option'
            className='w-fit flex items-center justify-between'>
            <span className='eyebrow-heading text-[10px] text-font-secondary'>
              Kelurahan / Kecamatan & Wilayah
            </span>
          </label>
          <div className='w-full flex items-center gap-2.25 py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden'>
            <select
              name='wilayah-select-option'
              id='wilayah-select-option'
              className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px]'>
              <option value='coblong'>Coblong</option>
              <option value='coblong'>Cidadap</option>
              <option value='coblong'>Bandung Wetan</option>
              <option value='coblong'>Cibeunying Kaler</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col gap-1.5'>
          <label className='w-fit flex items-center justify-between'>
            <span className='eyebrow-heading text-[10px] text-font-secondary'>
              Common areas in Coblong · Kota Bandung
            </span>
          </label>
          <div className='flex items-center gap-1.5 font-medium text-xs font-publicSans text-font-secondary flex-wrap lg:flex-nowrap'>
            <label
              htmlFor='jl-dago'
              className='relative w-full lg:w-fit cursor-pointer border border-border-secondary flex items-center gap-1.5 py-2.5 px-3.25 rounded-none lg:rounded-full has-checked:bg-bg-quaternary'>
              <input
                onChange={(e) => setAddressInputValue(e.target.value)}
                type='radio'
                name='area-chip'
                id='jl-dago'
                value='Jl. Dago'
                className='absolute w-full top-0 opacity-0'
              />
              Jl. Dago
            </label>
            <label
              htmlFor='itb'
              className='relative w-full lg:w-fit cursor-pointer border border-border-secondary flex items-center gap-1.5 py-2.5 px-3.25 rounded-none lg:rounded-full has-checked:bg-bg-quaternary'>
              <input
                onChange={(e) => setAddressInputValue(e.target.value)}
                type='radio'
                name='area-chip'
                id='itb'
                value='Institut Teknologi Bandung (ITB)'
                className='absolute w-full top-0 opacity-0'
              />
              Institut Teknologi Bandung (ITB)
            </label>
            <label
              htmlFor='simpang-dago'
              className='relative w-full lg:w-fit cursor-pointer border border-border-secondary flex items-center gap-1.5 py-2.5 px-3.25 rounded-none lg:rounded-full has-checked:bg-bg-quaternary'>
              <input
                onChange={(e) => setAddressInputValue(e.target.value)}
                type='radio'
                name='area-chip'
                id='simpang-dago'
                value='Simpang Dago'
                className='absolute w-full top-0 opacity-0'
              />
              Simpang Dago
            </label>
            <label
              htmlFor='pasar-dago'
              className='relative w-full lg:w-fit cursor-pointer border border-border-secondary flex items-center gap-1.5 py-2.5 px-3.25 rounded-none lg:rounded-full has-checked:bg-bg-quaternary'>
              <input
                onChange={(e) => setAddressInputValue(e.target.value)}
                type='radio'
                name='area-chip'
                id='pasar-dago'
                value='Pasar Dago'
                className='absolute w-full top-0 opacity-0'
              />
              Pasar Dago
            </label>
            <label
              htmlFor='jl-ir-juanda'
              className='relative w-full lg:w-fit cursor-pointer border border-border-secondary flex items-center gap-1.5 py-2.5 px-3.25 rounded-none lg:rounded-full has-checked:bg-bg-quaternary'>
              <input
                onChange={(e) => setAddressInputValue(e.target.value)}
                type='radio'
                name='area-chip'
                id='jl-ir-juanda'
                value='Jl. Ir. H. Juanda'
                className='absolute w-full top-0 opacity-0'
              />
              Jl. Ir. H. Juanda
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='address-input'
            className='w-fit flex items-center justify-between'>
            <span className='eyebrow-heading text-[10px] text-font-secondary'>
              Street Address, RT/RW, or Landmark *
            </span>
          </label>
          <div className='w-full flex items-center gap-2.25 py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden'>
            <input
              onChange={handleChange}
              id='address-input'
              className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px]'
              type='text'
              name='address-input'
              value={addresInputValue}
              placeholder='Jl. Tamansari depan Kebun Binatang'
              required
            />
          </div>
        </div>
        <div className='flex flex-col gap-1.5'>
          <div className='w-full flex items-center gap-2.25 rounded-xl border border-border-secondary overflow-hidden'>
            <div className='w-full h-full py-2.75 px-3.5 flex justify-between items-center bg-bg-closed'>
              <div className='location-icon'></div>
              <p className='font-publicSans text-xs font-semibold'>
                Coordinates auto-pinned
              </p>
              <span className='font-ibmPlexMono text-[13px] text-font-tertiary'>
                6.2088° S, 106.8456° E (WIB)
              </span>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center pt-5 text-[13px] font-semibold border-t border-border-primary font-publicSans'>
          <button type='button' disabled className='text-bg-primary'>
            Cancel
          </button>
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
