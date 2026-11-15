export default function ReportFlowCard(props) {
  const { number, title, description } = props.item;
  return (
    <div className='flex flex-col gap-2.5 px-4.5 py-5 border border-border-primary rounded-[18px] bg-bg-tertiary'>
      <div className='w-8.5 h-8.5 p-2.5 flex justify-center items-center rounded-full border border-border-tertiary bg-bg-quaternary text-font-quinary font-ibmPlexMono font-semibold text-xs'>
        {number}
      </div>
      <div className='flex flex-col gap-1.25'>
        <p className='font-semibold text-font-primary font-fraunces text-sm lg:text-base'>
          {title}
        </p>
        <p className='font-normal text-font-secondary font-publicSans text-xs'>
          {description}
        </p>
      </div>
    </div>
  );
}
