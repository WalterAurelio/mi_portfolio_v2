type ProyectoProps = {
  id?: string;
  className?: string;
  nombreProyecto?: string;
  description?: string;
}

function Proyecto({ id, className, nombreProyecto, description }: ProyectoProps) {
  return (
    <div id={id ?? undefined} className={`h-dvh flex items-center justify-center bg-main-black ${className}`}>
      <div className='bg-[url(./assets/img/StockSnap_YPGOEJM7JO.jpg)] absolute w-full h-full bg-cover bg-center opacity-20'></div>
      <div className='flex flex-col w-fit items-center z-10 cursor-pointer'>
        <h3 className='text-[39.06px] text-main-white font-semibold text-center'>{nombreProyecto ?? 'Nombre Proyecto'}</h3>
        <p className='text-xl text-translucent-white-60 -mt-2'>{description ?? 'Mauris non urna id nibh mattis vulputate at at velit.'}</p>
      </div>
    </div>
  )
}
export default Proyecto