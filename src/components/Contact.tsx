type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Contact({ children, ...props }: Props) {
  return (
    <a
      className='flex p-m lg:p-l justify-center items-center rounded-full border border-neutral-primary lg:hover:bg-neutral-inverse-secondary'
      {...props}
    >
      {children}
    </a>
  );
}
export default Contact;
