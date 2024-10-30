import { LuUserCircle2 } from 'react-icons/lu'
import logoTMB from '../../assets/tmb-logo-dark.png'

export const Header = () => {
  return (
    <header className="flex justify-center py-4">
      <section className="flex justify-center lg:justify-between w-full">
        <img src={logoTMB} alt="Logo da TMB" className="hidden lg:block" />
        <div className="flex flex-col items-center gap-2 lg:flex-row-reverse lg:gap-8">
          <div className="flex gap-1 lg:gap-8">
            <a
              href="#"
              className="bg-tmb-black text-tmb-white flex justify-center items-center gap-2 w-32 p1 text-sm"
            >
              <LuUserCircle2 size={21} />
              <span>Login</span>
            </a>
            <a
              href="#"
              className="bg-tmb-white text-tmb-black flex justify-center items-center p-1 w-32 text-sm border-2 border-tmb-black border-opacity-50 "
            >
              Produtor
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <img src={logoTMB} alt="Logo da TMB" className="w-20 lg:hidden" />
            <nav className="flex gap-2 opacity-80 text-sm tracking-widest lg:text-lg lg:gap-8">
              <a href="#quem-somos">Quem somos</a>
              <a href="#solucoes">Soluções</a>
              <a href="https://api.whatsapp.com/send?phone=5512997761183" target='_blank'>Contato</a>
            </nav>
          </div>
        </div>
      </section>
    </header>
  )
}
