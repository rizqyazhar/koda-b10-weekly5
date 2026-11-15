import { useState } from "react";

export default function Accordion(props) {
  const { eyebrowHeading, accordionTitle, children } = props;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className='rounded-xl border border-border-primary bg-bg-tertiary overflow-hidden'>
      <div
        onClick={handleClick}
        className={`flex justify-between items-center py-4 px-4.5 hover:bg-bg-submitted ${open && "bg-bg-submitted"} cursor-pointer`}>
        <div>
          <span className='eyebrow-heading text-[10px] text-bg-primary font-semibold'>
            {eyebrowHeading}
          </span>
          <p className='text-sm font-semibold text-font-primary font-publicSans'>
            {accordionTitle}
          </p>
        </div>
        <div
          className={`w-4 h-4 ${open ? "rotate-180 transition-all" : "rotate-0 transition-all"}`}>
          <img
            className='w-full h-full'
            src='/src/assets/icon/chevron-down.svg'
            alt='chevron-down-icon'
          />
        </div>
      </div>
      <div
        className={`py-4 px-4.5 font-publicSans font-normal text-sm text-font-secondary border-t border-border-primary ${open ? "block transition-all" : "hidden transition-all"}`}>
        {children}
      </div>
    </div>
  );
}
