import logoTMB from '../../assets/tmb-logo-dark.png'

export const Header = () => {
  return (
    <header className="flex justify-center p-4">
      <section className="flex justify-center lg:justify-around w-full max-w-screen-xl">
        <img src={logoTMB} alt="Logo da TMB" className="hidden lg:block" />
        <div className="flex flex-col items-center gap-2 lg:flex-row-reverse lg:gap-8">
          <div className="flex gap-1 lg:gap-8">
            <a
              href="#"
              className="bg-tmb-black text-tmb-white flex justify-end items-center w-32 py-1 px-4 text-sm lg:justify-center lg:py-2"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-tmb-white text-tmb-black flex justify-center items-center w-32 py-1 px-4 lg:py-2 text-sm border-2 border-tmb-black border-opacity-50 "
            >
              Produtor
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <img src={logoTMB} alt="Logo da TMB" className="w-24 lg:hidden" />
            <nav className="flex gap-2 opacity-80 lg:text-xl lg:gap-8">
              <a href="#">Quem somos</a>
              <a href="#">Soluções</a>
              <a href="#">Contato</a>
            </nav>
          </div>
        </div>
      </section>
    </header>
  )
}
