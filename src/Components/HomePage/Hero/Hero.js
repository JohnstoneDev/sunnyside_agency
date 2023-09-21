
export function Hero() {
  return (
    <div className="relative flex flex-col text-heading font-heading uppercase tracking-wider text-white text-center desktop:p-40 tablet:p-40 mobile:p-20 max-mobile:p-20">
        <h1 className="text-[50px]">We are creatives</h1>
        <div className='p-16 flex flex-col items-center justify-between'>
          <svg
            width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 3v100M3 95.484l15 15 15-15"/></g>
          </svg>
        </div>
    </div>
  )
}