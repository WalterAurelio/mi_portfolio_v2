type LenguajeTechProps = {
  className?: string;
}

function LenguajeTech({ className, ...props }: LenguajeTechProps) {
  return (
    <div className={`w-60 h-48 border rounded-[20px] flex justify-center items-center font-semibold text-xl text-main-black border-translucent-grey bg-purple-500 ${className}`} {...props}>
      Lorem ipsum
    </div>
  )
}
export default LenguajeTech