import { Link } from "react-router";

export default function FeedContentCard(props) {
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
    relevantOfficer,
    problemCategory,
    reportDate,
    numberOfProof,
    numberOfUpVote,
  } = props.item;
  return (
    <div className='w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-3.5 py-4 px-4.5 border-b border-border-primary'>
      {srcImg && (
        <div className='group w-full h-62.5 lg:w-19 lg:h-19 rounded-xl overflow-hidden bg-cover bg-center bg-bg-secondary border border-border-primary'>
          <img
            src={srcImg}
            alt={altImg}
            className='w-full h-full group-hover:scale-120 group-hover:transition-all group-hover:duration-500 ease'
          />
        </div>
      )}
      <div className='flex-1 flex flex-col gap-1.5 text-bg-primary'>
        <div className='flex justify-between flex-wrap lg:flex-nowrap whitespace-nowrap lg:whitespace-normal lg:justify-start lg:items-center gap-2'>
          <span className={`tag ${variantTag}`}>
            <img src={srcIconTag} alt={altIconTag} />
            {textTag}
          </span>
          <span className='text-[13px] font-normal font-ibmPlexMono text-font-tertiary'>
            {codeReport}
          </span>
          <span className='middle-dot text-[16px] text-font-tertiary font-publicSans'>
            &#xb7;
          </span>
          <span className='font-semibold text-[13px] font-publicSans text-font-primary whitespace-normal lg:whitespace-normal'>
            {relevantOfficer}
          </span>
        </div>
        <p className='title'>{titleReport}</p>
        <div className='flex flex-wrap md:flex-nowrap gap-1 font-publicSans'>
          <div className='location-icon'></div>
          <p className='text-xs text-font-tertiary description'>{address}</p>
          <span className='middle-dot'>&#xb7;</span>
          <span className='text-xs text-font-tertiary'>{problemCategory}</span>
        </div>
      </div>
      <div className='flex items-center gap-3 font-normal font-ibmPlexMono'>
        <button className='flex items-center gap-1 md:gap-1.75 text-[10px] md:text-xs rounded-full btn-like'>
          <span>
            <img src='/src/assets/icon/like-icon.svg' alt='like-icon' />
          </span>
          {numberOfUpVote}
        </button>
        <span className='flex items-center gap-1 text-[11px] text-font-secondary'>
          <img src='/src/assets/icon/report-icon.svg' alt='report-icon' />
          {numberOfProof} proof
        </span>
        <span className='text-font-tertiary text-[13px]'>{reportDate}</span>
        <Link
          to={`/detail-report/${id}/${slug}`}
          className='btn-nav flex items-center gap-1'>
          Track
          <span className='proof-number'>
            <img
              src='/src/assets/icon/arrow-right-icon-green.svg'
              alt='arrow-right-icon-green'
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
