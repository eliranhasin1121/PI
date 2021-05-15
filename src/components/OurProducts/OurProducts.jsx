import React from 'react';
import { MainText } from '../About/StyledAbout';
import { ProductHeader, SecondaryText,ProductsWrapper,ProductWrapper,Image } from './OurProduct.styled';
import productA from '../../assets/productA.png';
import productB from '../../assets/productB.png';
import productC from '../../assets/productC.png';
import useMedia from '../../customHooks/UseMedia';

export default function OurProducts(){

    const {isMobile} = useMedia();
    return(
        <>
            <ProductHeader>
             <MainText>OUR PRODUCTS</MainText>
             <SecondaryText>HEDGE FUNDS</SecondaryText>
            </ProductHeader>
            <ProductsWrapper className="row">
              <ProductWrapper className="col-4 col-12-small">
               <Image style={{width:isMobile ? 80 : 150,height:isMobile ? 80 : 150}} className="image featured" src={productA}/>
               <SecondaryText>PI NOVEL</SecondaryText>
              </ProductWrapper>
              <ProductWrapper  className="col-4 col-12-small">
              <Image style={{width:isMobile ? 80 : 150,height:isMobile ? 80 : 150}} className="image featured" src={productB}/>
              <SecondaryText>PI EMERGING MARKETS</SecondaryText>
             </ProductWrapper>
             <ProductWrapper className="col-4 col-12-small"> 
             <Image style={{width:isMobile ? 80 : 150,height:isMobile ? 80 : 150}} className="image featured" src={productC}/>
             <SecondaryText>PI OPPORTUNITIES</SecondaryText>
            </ProductWrapper>
            </ProductsWrapper>
        </>
    )
}