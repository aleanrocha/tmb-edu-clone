import { Link } from 'react-router-dom'

import tmbCodeProducer from '../../assets/tmb-code-producer.svg'
import tmbLogoLight from '../../assets/tmb-logo-light.png'

export const Producer = () => {
  return (
    <main className="bg-tmb-black text-tmb-white min-h-screen">
      <section>
        <div className="lg:flex">
          <div className="bg-tmb-mulher bg-center bg-cover bg-no-repeat h-44 flex justify-center items-center  shadow-sh-producer-mobile lg:h-screen lg:shadow-sh-producer-desktop">
            <img
              src={tmbCodeProducer}
              alt="Imagem de um código de barras"
              className="w-3/4 max-w-screen-md mx-auto mt-20"
            />
          </div>
          <div className="max-w-screen-md mx-auto flex flex-col gap-4 justify-center items-center p-4">
            <Link to="/">
              <img src={tmbLogoLight} alt="Logo da TMB" className="mt-8" />
            </Link>
            <h1 className="text-3xl font-medium">Seja bem-vindo!</h1>
            <p className="text-sm font-light mb-4 text-center">
              Insira seus dados abaixo para acessar o portal do infoprodutor:
            </p>
            <form className="w-full max-w-96">
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  className="bg-transparent border-[0.1rem] border-tmb-white outline-none px-4 py-3 rounded-md focus:border-tmb-light-blue"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  required
                  className="bg-transparent border-[0.1rem] border-tmb-white outline-none px-4 py-3 rounded-md focus:border-tmb-light-blue"
                />
              </div>
              <p className="py-2 text-sm text-right font-light">
                Não tem conta?{' '}
                <a
                  href="#"
                  className="font-semibold"
                  onClick={() => alert('Puts, não fiz! 😅')}
                >
                  Click aqui.
                </a>{' '}
              </p>
              <div>
                <input
                  type="submit"
                  value="Entrar"
                  className="p-3 bg-zinc-300 w-full rounded-md text-tmb-dark-blue font-bold mt-8 transition cursor-pointer hover:bg-zinc-800 hover:text-tmb-white"
                />
              </div>
              <a
                href="#"
                className="text-sm font-light block text-center my-6 transition hover:scale-105 hover:font-normal"
                onClick={() => alert('Puts, não fiz! 😅')}
              >
                Esqueceu a senha?
              </a>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
