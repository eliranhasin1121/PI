import React from 'react';
import { ProductWrapper,ProductsWrapper,Image,CryptoWrapper, CryptoTextWrapper, ReadMoreButton,JasminWrapper, BigText } from './Products.styled';
import jasmin from '../../assets/jasmin.png';
import cohen from '../../assets/cohenKaye.png';

export default function Products({history}){

  const handlePath = path => history.push(path);
    return(
        <div className="row">
        <ProductsWrapper className="col-6 col-12-medium">
        <ProductWrapper> 
        <CryptoWrapper>
           <CryptoTextWrapper>
             <BigText>investing in
             Cryptocurrency made easy</BigText>
             <ReadMoreButton>READ MORE</ReadMoreButton>
           </CryptoTextWrapper>
        </CryptoWrapper>
        </ProductWrapper>
        <ProductWrapper>
        <JasminWrapper>
          <Image className="image featured" src={cohen}/>
        </JasminWrapper>
        </ProductWrapper>
        </ProductsWrapper>
        <ProductsWrapper className="col-6 col-12-medium">
        <ProductWrapper>
        <JasminWrapper>
        <Image className="image featured" src={jasmin}/>
        </JasminWrapper>
        </ProductWrapper>
        <ProductWrapper> 
            <CryptoWrapper>
               <CryptoTextWrapper>
                 <BigText>We believe in the 
                 future</BigText>
                 <ReadMoreButton onClick={()=>handlePath('/cohen-and-kaye')}>READ MORE</ReadMoreButton>
               </CryptoTextWrapper>
            </CryptoWrapper>
            </ProductWrapper>
      </ProductsWrapper>
        </div>
    )
}

