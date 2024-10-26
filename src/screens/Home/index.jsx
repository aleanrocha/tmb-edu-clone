import { Fragment } from 'react'
import { Header } from '../../components/Header'

export const Home = () => {
  return (
    <Fragment>
      <section
        className="bg-tmb-banner-home-m lg:bg-tmb-banner-home bg-no-repeat min-h-96  "
        style={{ backgroundPosition: '50% 0' }}
      >
        <div className="max-w-96 lg:max-w-screen-lg px-4 mx-auto ">
          <Header />
          <div className="max-w-96 mt-60 lg:mt-28 lg:pb-48">
            <h1 className="text-3xl tracking-wider lg:text-3xl mb-4">
              Dobre o faturamento <br /> da sua empresa como
              <span className="text-tmb-light-blue"> boleto parcelado</span>.
            </h1>
            <p className="opacity-50 mb-8 leading-7">
              Você não precisa investir mais em tráfego ou mudar a estratégia
              para faturar mais. Use o boleto parcelado e veja suas vendas
              crescerem. Clique em “saiba mais” e converse com a nossa equipe.
            </p>
            <a className="bg-tmb-light-blue block text-center text-tmb-white font-bold p-4 w-full  uppercase cursor-pointer lg:max-w-56">
              Saiba mais
            </a>
          </div>
        </div>
      </section>
      <main>
        <h1>Hello World</h1>
      </main>
    </Fragment>
  )
}
