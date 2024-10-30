import tmbLogoBlue from '../../assets/tmb-logo-blue.jpg'
import { InputGlobal, InputSubmit } from '../../components/InputsForm'

export const ForgotPassword = () => {
  return (
    <main className="bg-tmb-bg w-full min-h-screen flex justify-center items-center">
      <section className="w-full max-w-[420px] p-6 flex flex-col items-center md:max-w-screen-lg md:flex-row md:justify-around md:gap-4">
        <div className="w-full max-w-96">
          <img
            src={tmbLogoBlue}
            alt="Logo azul da TMB"
            className="block mx-auto w-28 mb-4 lg:mx-0 md:w-32 md:py-2"
          />
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="text-xl font-bold tracking-wider md:text-3xl">
              Recuperar Senha
            </h1>
            <p className="text-xl font-light mb-4 opacity-90 md:text-2xl">
              Para recuperar sua senha informe o seu CPF.
            </p>
          </div>
        </div>
        <div className="bg-tmb-white w-full px-8 py-10 mt-8 rounded-lg shadow-2xl md:mt-0 md:max-w-80">
          <h3 className="text-2xl text-center mb-8">Recuperar Senha</h3>
          <form className="flex flex-col gap-6">
            <InputGlobal inputType="text" inputPlaceholder="CPF" />
            <InputSubmit inputType="submit" inputValue="Enviar nova senha" />
          </form>
        </div>
      </section>
    </main>
  )
}
