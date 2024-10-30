import tmbLogoBlue from '../../assets/tmb-logo-blue.jpg'
export const Login = () => {
  return (
    <main className="bg-tmb-bg w-full min-h-screen flex justify-center items-center">
      <section className="w-full p-4 md:max-w-screen-lg md:flex md:justify-between md:items-center md:gap-4">
        <div className="md: mr-24">
          <img
            src={tmbLogoBlue}
            alt="Logo azul da TMB"
            className="py-4 block mx-auto w-48 mb-8 lg:mx-0 md:w-36 md:py-2"
          />
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
              <a href="#" className="text-blue-600 underline font-semibold">
                clique aqui
              </a>{' '}
              para receber uma nova senha.
            </p>
          </div>
        </div>
        <div className="bg-tmb-white w-full p-8 mt-8 rounded-lg shadow-2xl md:mt-0 md:max-w-[409px]">
          <h3 className="text-2xl text-center mb-8">Acesso ao Portal</h3>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="CPF"
              required
              className="py-3 px-4 border-none outline-2 outline-zinc-200 rounded-md outline-none focus:outline-4 focus:outline-tmb-highlight focus:opacity-60"
            />
            <input
              type="text"
              placeholder="Senha"
              required
              className="py-3 px-4 border-none outline-2 outline-zinc-200 rounded-md outline-none focus:outline-4 focus:outline-tmb-highlight focus:opacity-60"
            />
            <input
              type="submit"
              value="Entrar"
              className="bg-tmb-gradient-btn text-tmb-white p-4 border-none border-2 border-zinc-200 rounded-full outline-none cursor-pointer"
            />
          </form>
          <p className="text-center opacity-80 mt-6">
            Esqueceu a senha?{' '}
            <a href="#" className="text-blue-600 underline">
              Clique aqui
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
