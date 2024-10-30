import { Link } from 'react-router-dom'

import tmbLogoBlue from '../../assets/tmb-logo-blue.jpg'
import { InputGlobal, InputSubmit } from '../../components/InputsForm'

export const Login = () => {
  return (
    <main className="bg-tmb-bg w-full min-h-screen flex justify-center items-center">
      <section className="w-full p-4 md:max-w-screen-lg md:flex md:justify-between md:items-center md:gap-4">
        <div className="md: mr-24">
          <Link to={'/'} className="inline-block">
            <img
              src={tmbLogoBlue}
              alt="Logo azul da TMB"
              className="py-4 block mx-auto w-48 mb-8 lg:mx-0 md:w-36 md:py-2"
            />
          </Link>
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="text-xl font-bold tracking-wider md:text-4xl">
              Bem vindo(a)
            </h1>
            <p className="text-xl font-light opacity-90 md:text-3xl">
              ao portal do cliente 😄
            </p>
            <p className="text-sm opacity-65">
              Caso seja novo aqui, você recebeu um acesso por e-mail e caso não
              tenha encontrado,{' '}
              <Link
                to={'/recuperarSenha'}
                className="text-blue-600 underline font-semibold"
              >
                clique aqui
              </Link>{' '}
              para receber uma nova senha.
            </p>
          </div>
        </div>
        <div className="bg-tmb-white w-full p-8 mt-8 rounded-lg shadow-2xl md:mt-0 md:max-w-[409px]">
          <h3 className="text-2xl text-center mb-8">Acesso ao Portal</h3>
          <form className="flex flex-col gap-6">
            <InputGlobal inputType="text" inputPlaceholder="CPF" />
            <InputGlobal inputType="password" inputPlaceholder="Senha" />
            <InputSubmit inputType="submit" inputValue="Entrar" />
          </form>
          <p className="text-center opacity-80 mt-6">
            Esqueceu a senha?{' '}
            <Link to={'/recuperarSenha'} className="text-blue-600 underline">
              Clique aqui
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
