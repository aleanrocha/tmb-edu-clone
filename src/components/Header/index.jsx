import { LuUserCircle2 } from 'react-icons/lu'
import { Link } from 'react-router-dom'

import logoTMB from '../../assets/tmb-logo-dark.png'

export const Header = () => {
  return (
    <header className="flex py-4 lg:justify-between">
      <section className="flex justify-between w-full">
        <img src={logoTMB} alt="Logo da TMB" className="hidden lg:block" />
        <div className="w-full flex flex-col items-center gap-2 lg:flex-row-reverse lg:gap-8 lg:w-auto">
          <div className="flex gap-1 lg:gap-8">
            <Link
              to={'/login'}
              className="bg-tmb-black text-tmb-white flex justify-center items-center gap-2 w-32 p-1 text-sm"
            >
              <LuUserCircle2 size={21} />
              <span>Login</span>
            </Link>
            <Link
              to={'/produtor'}
              className="bg-tmb-white text-tmb-black flex justify-center items-center p-1 w-32 text-sm border-2 border-tmb-black border-opacity-50 "
            >
              Produtor
            </Link>
          </div>
          <div className="flex items-center justify-between gap-4 w-full">
            <img src={logoTMB} alt="Logo da TMB" className="w-20 lg:hidden" />
            <nav className="flex gap-2 opacity-80 text-[0.78rem] tracking-widest lg:text-lg lg:gap-8">
              <a href="#quem-somos">Quem somos</a>
              <a href="#solucoes">Soluções</a>
              <a
                href="https://api.whatsapp.com/send?phone=5512997761183"
                target="_blank"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      </section>
    </header>
  )
}
