import Copyright from '../../components/copyright'
import Footer from '../../components/footer'
import HeaderCart from '../../components/headerCart'
import { StyledPrivacyPolicyPage } from './style'

export const PrivacyPolicyPage = () => {

    return(
        <StyledPrivacyPolicyPage>
            <div className="organization">
                <HeaderCart />
                <div className='container'>
                    <h3 className="container__title">POLÍTICA E PRIVACIDADE</h3>
                    <div className='text'>
                        <p>Nossa política de privacidade é uma forma importante de proteger sua privacidade e cumprir todas as leis aplicáveis relacionadas à proteção de dados pessoais (LGPD). Essa política demonstra como lidamos com suas informações pessoais e, antes de continuar usando nosso site, solicitamos que você leia atentamente este texto para entender melhor como coletamos, usamos, armazenamos e tratamos seus dados pessoais. Esta política de privacidade faz parte dos nossos termos e condições de uso e se aplica a todos os usuários do site, independentemente de estarem cadastrados ou não. Se tiver dúvidas, entre em contato conosco através dos canais indicados nos termos.
                        </p>
                        <p>Para se cadastrar no site, você precisa fornecer alguns dados pessoais, como nome, endereço de e-mail, número de telefone, entre outros dados que permitam sua identificação. Além das informações fornecidas no cadastro, também podemos coletar informações sobre suas medidas de roupas e preferências de consumo de vestuário, além de dados demográficos não identificáveis, como idade, sexo e tipo de roupa que você pretende utilizar. Também podemos obter informações sobre as seções e páginas acessadas e sua forma de uso do site, além de informações como seu tipo de navegador da Internet, aparelho, conjuntos de hardware e software ou configuração de sistema utilizada para acessar o site. Não teremos acesso a dados pessoais adicionais, a menos que você os forneça voluntariamente.
                        </p>
                        <p>Os dados e informações inseridos no site são armazenados em servidores de propriedade do Brechó da IT ou de seus parceiros localizados fisicamente no Brasil e nos Estados Unidos da América. O Brechó da IT poderá, no futuro, realocar as informações para servidores em outros países para hospedagem, armazenamento, respaldo e/ou backup.</p>
                        <p>Usamos os dados obtidos pelo site exclusivamente para fins específicos, como para administrar a segurança e confiabilidade das contas dos usuários, facilitar a identificação dos usuários, validar as transações, entregar os produtos, enviar comunicações relevantes, personalizar o site e conduzir pesquisas e medições.</p>
                    </div>
                </div>
            </div>
            <div className="organization">
                <Footer />
                <Copyright />
            </div>
        </StyledPrivacyPolicyPage>
    )
}
