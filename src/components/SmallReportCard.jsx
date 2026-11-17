import Button from "./Button";
import { Link } from "react-router";

export default function SmallReportCard(props) {
  const {
    id,
    slug,
    srcImg,
    altImg,
    variantTag,
    srcIconTag,
    altIconTag,
    textTag,
    codeReport,
    titleReport,
    address,
    numberOfUpVote,
  } = props.item;

  return (
    <div className='w-full h-fit flex flex-col md:flex-row gap-0 md:gap-3.5 p-0 md:p-3.75 border border-border-primary bg-bg-tertiary rounded-[18px] '>
      <div className='group w-full h-[40%] rounded-tl-xl rounded-tr-xl rounded-bl-none rounded-br-none md:w-24 md:h-24 md:rounded-xl overflow-hidden bg-cover bg-center'>
        <img
          src={srcImg}
          alt={altImg}
          className='w-full h-full group-hover:scale-120 transition-transform duration-1000 ease'
        />
      </div>
      <div className='flex-1 w-full flex flex-col gap-1.75 p-3.5 md:p-0'>
        <div className='flex items-center gap-2 flex-wrap md:flex-nowrap whitespace-nowrap md:whitespace-normal justify-between md:justify-start'>
          <span className={`tag ${variantTag}`}>
            <img src={srcIconTag} alt={altIconTag} />
            {textTag}
          </span>
          <span className='text-[13px] font-normal font-ibmPlexMono text-font-tertiary'>
            {codeReport}
          </span>
        </div>
        <p className='title text-sm w-full'>{titleReport}</p>
        <div className='flex items-center gap-1 font-publicSans flex-nowrap'>
          <img src='/src/assets/icon/location-icon.svg' alt='location-icon' />
          <p className='description text-xs text-font-tertiary truncate'>
            {address}
          </p>
        </div>
        <div className='h-fit flex justify-between mt-0.75'>
          <Button
            btnText={numberOfUpVote}
            btnImg={["/src/assets/icon/like-icon.svg"]}
            btnAlt={["like-icon"]}
            variant='button-one-icon'
            btnCustomStyles='bg-inherit border border-border-secondary rounded-full'
            btnTextCustomStyles='text-font-secondary font-ibmPlexMono text-[11px]'
          />
          <Link
            to={`/detail-report/${id}/${slug}`}
            className='btn-nav flex flex-col gap-1'>
            Inspect
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
