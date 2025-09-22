type LenguajeTechProps = {
  description?: string;
  className?: string;
  uppercase?: boolean;
}

function LenguajeTech({ description='Lorem ipsum', className, uppercase=false, ...props }: LenguajeTechProps) {
  return (
    <div className={`flex w-[283px] h-85 p-5.5 flex-col items-center border border-translucent-grey-30 bg-[#eeeeee] hover:scale-110 transition-all cursor-pointer -rotate-3 hover:rotate-0 ${className}`} {...props}>
      <div className='flex w-full aspect-square border border-translucent-grey-30 overflow-clip relative'>
        <div className='bg-[url(./assets/img/1758489818892.jpg)] bg-cover absolute w-108 h-108 -rotate-33 -top-37 -right-37 polaroid'></div>
      </div>
      <div className={`flex justify-center items-center self-stretch text-main-black font-gloria-hallelujah text-xl h-full ${uppercase && 'uppercase'}`}>
        {description}
      </div>
    </div>
  )
}
export default LenguajeTech

{/* <div className={`w-60 h-48 border rounded-[20px] flex justify-center items-center font-semibold text-xl text-main-black border-translucent-grey-30 bg-purple-500 ${className}`} {...props}>
      Lorem ipsum
    </div> */}