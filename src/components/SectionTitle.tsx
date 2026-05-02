type Props = React.HTMLAttributes<HTMLHeadingElement>;

function SectionTitle({ children = 'Section Title', ...props }: Props) {
  return (
    <h2
      className='h1-bold'
      {...props}
    >
      {children}
    </h2>
  );
}
export default SectionTitle;
