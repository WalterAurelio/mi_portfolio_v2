type Props = React.HTMLAttributes<HTMLHeadingElement>;

function MiscTitle({ children = 'Misc Title', ...props }: Props) {
  return (
    <h4
      className='text-neutral-inverse-primary text-center font-misc font-bold text-h4 lg:text-h1 leading-[100%] uppercase'
      {...props}
    >
      {children}
    </h4>
  );
}
export default MiscTitle;
