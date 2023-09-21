import logo from '../../../Assets/images/logo.svg'

// Components
import { Button } from '../Buttons/Button'

export function Navigation() {
  return (
    <nav className='p-4 flex items-center justify-between'>
      <img src={logo} alt="logo" />
      <div className='flex items-center justify-evenly gap-8 text-white mobile:hidden max-mobile:hidden'>
        <Button text={"About"} />
        <Button text={"Services"} />
        <Button text={"Projects"} />
        <Button text={"Contact"} />
      </div>
    </nav>
  )
}