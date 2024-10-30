import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { MdOutlinePhoneAndroid } from 'react-icons/md'

import tmbLogo from '../../assets/tmb-logo-light.png'

export const Footer = () => {
  return (
    <footer className="w-full max-w-96 lg:max-w-screen-lg mx-auto flex flex-col gap-8 pt-16 px-8">
      <div className="lg:flex justify-between">
        <div className="mb-24 lg:mb-12">
          <img src={tmbLogo} alt="Logo da TMB" className="mb-16" />
          <div className="flex flex-col gap-3 text-lg">
            <div className="flex items-center gap-2">
              <FaInstagram size={22} />
              <a
                href="https://www.instagram.com/tmb.temmaisnoboleto/"
                target="_blank"
              >
                @tmb.temmaisnoboleto
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaFacebook size={22} />
              <a
                href="https://www.facebook.com/profile.php?id=100092874093156"
                target="_blank"
              >
                @tmb.temmaisnoboleto
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin size={22} />
              <a
                href="https://www.linkedin.com/company/tmb-educa%C3%A7%C3%A3o/"
                target="_blank"
              >
                @tmb-educação
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="pb-8">Entre em contato:</p>
          <div className="flex gap-6">
            <MdOutlinePhoneAndroid className="text-3xl" />
            <div>
              <p className="text-tmb-light-blue font-semibold mb-1 lg:text-lg lg:font-medium">
                Para suporte de aluno:
              </p>
              <h3 className="text-lg font-bold lg:text-3xl">
                +55 12 9 9661.5215
              </h3>
              <p className="text-tmb-light-blue font-semibold mb-1  lg:text-lg lg:font-medium">
                Para suporte ao produtor:
              </p>
              <h3 className="text-lg font-bold lg:text-3xl">
                +55 12 9 9776.1183
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-12">
            <FaEnvelope size={22} />
            <a
              href="mailto:relacionamento@tmbeducacao.com.br"
              className="lg:text-2xl"
            >
              relacionamento@tmbeducacao.com.br
            </a>
          </div>
        </div>
        <span className="bg-tmb-white block w-full h-[0.1rem] mt-24 lg:hidden"></span>
      </div>
      <p className="text-center text-sm font-light opacity-60 mt-20 mb-56 lg:text-base lg:mt-6 lg:mb-32">
        TMB Educação e Serviços Ltda – 40.151.455/0001-22
      </p>
    </footer>
  )
}
