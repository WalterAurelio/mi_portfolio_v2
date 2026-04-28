type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  prefix?: string;
};

function NavAnchor({ prefix = '01', children = 'Nav Anchor', ...props }: Props) {
  return (
    <a
      className='inline-flex justify-center items-center gap-s text-h5 font-bold text-neutral-inverse-tertiary'
      {...props}
    >
      {prefix}
      <span className='text-neutral-primary'>{children}</span>
    </a>
  );
}
export default NavAnchor;
