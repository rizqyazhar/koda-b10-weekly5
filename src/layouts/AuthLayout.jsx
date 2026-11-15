export default function AuthLayout(props) {
  const { children } = props;
  return (
    <div className='absolute z-20 w-full min-h-dvh top-0 inset-0 bg-[rgba(19,35,27,0.55)]'>
      <div className='fixed w-full min-h-dvh flex justify-center items-start lg:items-center pt-[5%]md:pt-[10%]'>
        {children}
      </div>
    </div>
  );
}
