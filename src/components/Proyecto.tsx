type ProyectoProps = {
  id?: string;
  className?: string;
}

function Proyecto({ id, className }: ProyectoProps) {
  return (
    <div id={id ?? undefined} className={`h-dvh flex items-center justify-center bg-green-200 ${className}`}>
      <div className='flex flex-col bg-main-black w-fit items-center'>
        <h3 className='text-[39.06px] text-main-white font-semibold text-center'>Nombre Proyecto</h3>
        <p className='text-xl text-translucent-white -mt-2'>Mauris non urna id nibh mattis vulputate at at velit.</p>
      </div>
    </div>
  )
}
export default Proyecto