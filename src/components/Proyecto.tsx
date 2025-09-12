function Proyecto({ id }: { id: string }) {
  return (
    <div id={id} className='h-dvh flex items-center justify-center bg-green-200 min-w-[50%] border-b border-l'>
      <div className='flex flex-col bg-main-black w-fit items-center'>
        <h3 className='text-[39.06px] text-main-white font-semibold text-center'>Nombre Proyecto</h3>
        <p className='text-xl text-translucent-white -mt-2'>Mauris non urna id nibh mattis vulputate at at velit.</p>
      </div>
    </div>
  )
}
export default Proyecto