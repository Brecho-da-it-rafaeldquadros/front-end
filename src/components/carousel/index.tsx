import { StyledCarousel, Header, ButtonLink, ButtonCarousel } from './style'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from "react-router-dom"
import { ReactNode, useState } from 'react';
import { memo } from 'react';
import Button from '../button';
import Icons from '../../services/icons/icons';

interface IPropsCarousel {
  products:ReactNode[]
  onSearchAll?:() => Promise<void>
  title:string
}

const Carousel = ( props:IPropsCarousel ) => {

  const [ position, setPosition ] = useState(0)
  const navigate = useNavigate()

  return (
    <StyledCarousel
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{duration:0.3}}
      exit={{ opacity:0 }}
    >
      <Header>
        <h3>
          {props?.title?.toUpperCase()}
        </h3>

        <ButtonLink
          onClick={async ()=>{

          await (props?.onSearchAll&&props?.onSearchAll())

            navigate("/produtos")
          }}
        >
          VER TODOS
        </ButtonLink>
      </Header>

      <AliceCarousel 
        disableDotsControls
        items={props?.products}
        renderKey={0}
        activeIndex={position}
        animationType="slide"
        animationDuration={200}
        renderPrevButton={(e)=>
          <ButtonCarousel
            className="button__left"
            type="button"
            disabled={e.isDisabled}
            onClick={()=>!e.isDisabled&&setPosition( position - 1 )}
          >
            <Icons.Left/>
          </ButtonCarousel>
        }
        renderNextButton={( e )=>
          <ButtonCarousel
            className="button__right"
            type="button"
            disabled={ e.isDisabled }
            onClick={()=>!e.isDisabled&&setPosition( position + 1 )}
          >
            <Icons.Right/>
          </ButtonCarousel>
        }
        disableSlideInfo
        ssrSilentMode
        responsive={{
          320: {
            items: 1
          },
          480: {
            items: 2
          },
          900: {
            items: 3
          },
          1250: {
            items: 4
          },
          1400: {
            items: 5
          },
          1650: {
            items: 5
          },
          1800: {
            items: 6
          },
          1950: {
            items: 7
          },
        }}  
      />
    </StyledCarousel>
  )
}

export default memo(Carousel)
