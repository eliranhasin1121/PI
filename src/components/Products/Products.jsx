import React from 'react';
import { ProductWrapper,ProductsWrapper,Image,CryptoWrapper, CryptoTextWrapper, ReadMoreButton,JasminWrapper, BigText } from './Products.styled';
import jasmin from '../../assets/jasmin.png';
import cohen from '../../assets/cohenKaye.png';
import useMedia from '../../customHooks/UseMedia';

export default function Products({history}){

  const handlePath = path => history.push(path);
  const { isDevice } = useMedia();

  const Crypto = () => (
    <ProductWrapper> 
        <CryptoWrapper>
           <CryptoTextWrapper>
             <BigText>investing in
             Cryptocurrency made easy</BigText>
             <ReadMoreButton>READ MORE</ReadMoreButton>
           </CryptoTextWrapper>
        </CryptoWrapper>
    </ProductWrapper>
  )

  const Cohen = () => (
    <ProductWrapper>
    <JasminWrapper>
      <Image className="image featured large" src={cohen}/>
    </JasminWrapper>
    </ProductWrapper>
  )

  const Jasmin = () => (
    <ProductWrapper>
    <JasminWrapper>
    <Image className="image featured large" src={jasmin}/>
    </JasminWrapper>
    </ProductWrapper>
  )

  const CohenText = () => (
    <ProductWrapper> 
    <CryptoWrapper>
       <CryptoTextWrapper>
         <BigText>We believe in the 
         future</BigText>
         <ReadMoreButton onClick={()=>handlePath('/cohen-and-kaye')}>READ MORE</ReadMoreButton>
       </CryptoTextWrapper>
    </CryptoWrapper>
    </ProductWrapper>
  )
    return(
      <div className="row">
        {
          isDevice ? (
            <>
            <ProductsWrapper className="col-6 col-12-medium">
             <Jasmin/>
             <Crypto/>
          </ProductsWrapper>
          <ProductsWrapper className="col-6 col-12-medium">
            <Cohen/>
            <CohenText/>
         </ProductsWrapper>
         </>
          ) : (
            <>
            <ProductsWrapper className="col-6 col-12-medium">
            <Crypto/>
             <Cohen/>
          </ProductsWrapper>
          <ProductsWrapper className="col-6 col-12-medium">
            <Jasmin/>
            <CohenText/>
         </ProductsWrapper>
         </>
          )
        }
      </div>
    )
}

