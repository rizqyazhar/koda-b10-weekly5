export default function Input(props) {
  const { labelText, ...rest } = props;
  return (
    <label htmlFor='complaint-reference-id-input' class='flex flex-col gap-1.5'>
      <span className='font-ibmPlexMono font-medium text-[10px] uppercase text-font-secondary tracking-[0.5px]'>
        {labelText}
      </span>
      <input
        {...rest}
        className='border border-border-secondary rounded-xl text-[13px] font-normal text-font-tertiary py-2.5 px-3.5 placeholder:font-ibmPlexMono'
      />
    </label>
  );
}
