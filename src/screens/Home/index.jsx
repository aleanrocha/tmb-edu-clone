import { Fragment } from 'react'

import tmbAboutDesktop from '../../assets/tmb-about.png'
import tmbCode from '../../assets/tmb-code-about.png'
import tmbSuperCode from '../../assets/tmb-super-code.png'
import tmbIconLaptop from '../../assets/tmb-icon-laptop.svg'
import tmbIconMoney from '../../assets/tmb-icon-money.svg'
import tmbIconRocket from '../../assets/tmb-icon-rocket.svg'
import tmbCodeFaqMobile from '../../assets/tmb-code-faq-mobile.png'
import tmbCodeFaq from '../../assets/tmb-logo-faq.png'

import { Header } from '../../components/Header'
import { TmbCheck } from '../../components/TmbCheck'
import { InfluencersCarousel } from '../../components/InfluencersCarousel'
import { Faq } from '../../components/Faq'
import { faq as faqData } from '../../data/faq'

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
      <section className="mt-8 mb-36">
        <div className="max-w-96 lg:max-w-screen-lg px-4 mx-auto flex flex-col gap-12 lg:gap-28">
          <h2 className="text-left text-2xl lg:text-3xl">
            O que tem mais com a <br /> TMB?
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex flex-col gap-4 items-start">
              <img
                src={tmbIconLaptop}
                alt="Icone de laptop"
                className="lg:mx-auto"
              />
              <h3 className="text-2xl">MAIS ACESSO</h3>
              <p className="opacity-50 leading-7">
                Não poder acessar algo que pode mudar o rumo de nossas vidas é
                muito frustrante. Por isso a TMB oferece crédito para quem
                aposta no digital para se reinventar e crescer.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <img
                src={tmbIconMoney}
                alt="Icone de dinheiro"
                className="lg:mx-auto"
              />
              <h3 className="text-2xl">MAIS RESULTADO</h3>
              <p className="opacity-50 leading-7">
                Todo negócio que se preze visa o máximo de retorno. E que tal
                dobrar o faturamento de seus lançamentos e infoprodutos fazendo
                uso do boleto? Então conte com a gente!
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <img
                src={tmbIconRocket}
                alt="Icone de foguete"
                className="lg:mx-auto"
              />
              <h3 className="text-2xl">MAIS AGILIDADE</h3>
              <p className="opacity-50 leading-7">
                Dentro da nossa plataforma, você tem autonomia para criar
                ofertas e realizar diversos processos. Dessa forma, você ganha
                agilidade dentro do seu próprio processo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 bg-tmb-black text-tmb-white">
        <div className="max-w-96 lg:max-w-screen-lg mx-auto flex flex-col gap-8 lg:gap-36 py-20 lg:py-32 px-4 lg:flex-row lg:items-center">
          <div className="lg:max-w-[520px]">
            <h2 className="text-3xl mb-6">
              A gente cuida de toda burocracia para você ter tempo de
              <span className="text-tmb-light-blue"> produzir mais</span>
            </h2>
            <p className="leading-7 lg:pr-16">
              Você não precisa se preocupar com os processos chatos. A TMB faz
              todo o procedimento de análise dos clientes para que tenhamos mais
              segurança, assim como toda a gestão de pagamentos. Dessa forma,
              você pode direcionar a sua atenção para outros assuntos, mas
              sempre terá controle sobre seus projetos por meio da nossa
              plataforma.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <TmbCheck text="Analise do documento" />
            <TmbCheck text="Analise anti fraude" />
            <TmbCheck text="Criação de contrato" />
            <TmbCheck text="Gestão de cobrança" />
            <TmbCheck text="Antecipação de recebimento" />
          </div>
        </div>
        <InfluencersCarousel />
      </section>
      <section>
        <div className="max-w-96 lg:max-w-screen-lg mx-auto flex flex-col gap-8 py-8 px-4">
          <div className='mb-16'>
            <img src={tmbCodeFaqMobile} alt="Imagem código de barras mobile" className='lg:hidden' />
            <img src={tmbCodeFaq} alt="Imagem código de barras desktop" className='hidden lg:block' />
          </div>
          <section className="flex flex-col gap-12 p-4 w-full">
            <div>
              <h2 className="text-3xl text-center uppercase mb-6 lg:text-4xl">Faq</h2>
              <p className="text-center text-md text-tmb-light-blue">
                Perguntas frequentes
              </p>
            </div>
            <div>
              {faqData &&
                faqData.map((faq) => (
                  <Faq
                    key={faq.id}
                    title={faq.title}
                    description={faq.description}
                  />
                ))}
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  )
}
