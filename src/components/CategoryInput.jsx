export default function CategoryInput(props) {
  const { item, ...rest } = props;

  return (
    <label
      htmlFor={item.forHtml}
      className='relative h-34 flex flex-col gap-2.25 p-3.75 rounded-xl border border-border-primary has-checked:bg-bg-quaternary has-checked:border has-checked:border-bg-primary cursor-pointer'>
      <input
        {...rest}
        name='cat'
        type='radio'
        value={item.category}
        id={item.forHtml}
        className='w-full absolute top-0 opacity-0'
      />
      <div className='flex items-center gap-2'>
        <div className={`${item.iconName} bg-bg-primary`}></div>
        <div className='w-full flex justify-between'>
          <p className='font-publicSans font-semibold text-[13px] text-font-primary'>
            {item.category}
          </p>
          <span className='flex justify-center items-center py-0.75 px-1.75 rounded-full bg-bg-quaternary text-font-quinary font-ibmPlexMono font-normal text-[10px]'>
            {item.tagText}
          </span>
        </div>
      </div>
      <p className='font-publicSans font-medium text-sm text-font-secondary'>
        {item.categoryTitle}
      </p>
      <p className='font-publicSans font-normal text-sm text-font-tertiary'>
        {item.categoryDesc}
      </p>
    </label>
  );
}
