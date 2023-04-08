import { StyledBenefits } from './style'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Competence from './competence';
import Icons from '../../services/icons/icons';

const items = [
  <Competence
    icon={Icons.Diamond}
    title="Qualidade em primeiro lugar"
    description="Todas as nossas roupas passam por um rigoroso processo de seleção para garantir a melhor qualidade."
  />,
  <Competence
    icon={Icons.Dollar}
    title="Preços justos para moda incrível"
    description="Compre roupas de alta qualidade por preços acessíveis e justos."
  />,
  <Competence
    icon={Icons.Face}
    title="Experiência excepcional de compra"
    description="Estamos aqui para oferecer um atendimento personalizado e uma experiência de compra excepcional."
  />,
  <Competence
    icon={Icons.Sustentable}
    title="Moda sustentável para um futuro melhor"
    description="Compre roupas e faça sua parte para promover práticas de consumo consciente e sustentável."
  />,
  <Competence
    icon={Icons.MercadoPago}
    title="Pagamento com Mercado Pago"
    description="Faça pagamentos seguros por meio do Mercado Pago."
  />
];

const Benefits = () => {
  return (
    <StyledBenefits>
      <AliceCarousel 
        mouseTracking 
        items={items} 
        controlsStrategy="responsive"
        responsive={{
          320: {
              items: 1

          },
          780: {
            items: 2
          },
          1024: {
              items: 3

          },
          1400: {
            items: 4
         },
          1800: {
            items: 5
          },
        }}
        autoPlay
        autoPlayStrategy="none"
        disableDotsControls
        disableButtonsControls
        infinite
        autoPlayInterval={10000}
      />
    </StyledBenefits>
  )
}

export default Benefits
