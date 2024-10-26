import { Fragment } from 'react'

import tmbAboutDesktop from '../../assets/tmb-about.png'
import tmbCode from '../../assets/tmb-code-about.png'
import tmbSuperCode from '../../assets/tmb-super-code.png'

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
      <section
        className="bg-tmb-about-m lg:bg-none bg-no-repeat py-8 mt-10 h-112"
        style={{ backgroundPosition: '50% 0' }}
      >
        <div className="max-w-96 lg:max-w-screen-lg px-4 mx-auto lg:flex items-center justify-center gap-24">
          <img
            src={tmbAboutDesktop}
            alt="Imagem de uma mulher segurando um cartão"
            className="hidden lg:block"
          />
          <div className="pt-96 lg:pt-0 flex flex-col gap-6">
            <h2 className="text-3xl tracking-wider max-w-96">
              Que tal dar mais acesso ao seu infoproduto?
            </h2>
            <p className="opacity-50 leading-7">
              Para ter mais resultado, tudo o que você precisar fazer é dar
              oportunidade a quem precisa. Muitas pessoas gostariam de comprar o
              seu infoproduto, mas são conseguem por conta de meios de
              pagamentos engessados. No Brasil, 78% da população está endividada
              e o limite médio do cartão de crédito é R$1.400,00.
            </p>
            <p className="opacity-50 leading-7">
              Por isso, um público muito grande é deixado de lado, seja por não
              ter crédito ou não poder comprometer o seu limite. Mas quando
              existe uma forma de pagamento parcelada e facilitada, você vai
              mais longe. O boleto parcelado dá oportunidade a essas pessoas que
              querem acesso ao aprendizado e traz mais faturamento para o seu
              bolso!
            </p>
            <img
              src={tmbCode}
              alt="Imagem de um código de barras"
              className="max-w-64"
            />
          </div>
        </div>
        <img
          src={tmbSuperCode}
          alt="Imagem de um código de barras gigante"
          className="hidden lg:flex max-w-96 lg:max-w-screen-lg lg:my-20 lg:mx-auto "
        />
      </section>
    </Fragment>
  )
}
