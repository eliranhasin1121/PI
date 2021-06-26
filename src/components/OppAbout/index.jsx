import React from 'react';
import styled from 'styled-components';
import AboutIcon from '../../assets/opp-sectionC.png';
import sectionB from '../../assets/opp-sectionB.png'
import {
    Image, MainText, StyledAbout, StyledAboutImgSection,
    StyledAboutText, StyledAboutTextSection, Text
} from '../../components/About/StyledAbout';
import useMedia from '../../customHooks/UseMedia';

export default function About() {
    const {isMobile} = useMedia();
 

    return (
        <div>
            <section>
                <StyledAbout className="row">
                <StyledAboutTextSection className="col-6 col-12-small">
                <StyledAboutText>
                הקרן הינה קרן הזדמנויות המכוונת לנטרל סיכוני שוק ולהעניק תשואה חיובית בכל מצב שוק
                </StyledAboutText>
            </StyledAboutTextSection>
                    <StyledAboutImgSection className="col-6 col-12-small">
                        <img  class="image featured" src={sectionB}></img>
                    </StyledAboutImgSection>
                    
                   
                </StyledAbout>
            </section>

            <section>
                <div className="row"  style={{paddingRight:15,backgroundColor:'lightgrey'}}>
                    <div className="col-6 col-12-small">
                      <Image className="image featured" src={AboutIcon}></Image>
                    </div>
                    <div className="col-6 col-12-small" style={{textAlign:'right'}}>
                        <MainText>אסטרטגיית הקרן</MainText>
                        <WrappedText>
                        הקרן הינה קרן הזדמנויות מסוג TOTAL RETURN, שמטרתה להשיג תשואות חיוביות כל שנה בכל מצב שוק.
הקרן משיגה מטרה זו באמצעות אסטרטגיות לונג/שורט בנכסים פיננסיים כגון מניות ואג"ח קונצרני, פעילות בשוק הראשוני הנפקות/הרחבות סדרה/הפצות, ניצול מצבים מיוחדים וכשלי שוק הנובעים מהצעות רכש, הסדרי חוב, מאבקי שליטה, תנועות הון חריגות ועיוותי רגולציה, כל זאת תוך ניתוח המצב העסקי והפיננסי של החברות.
הקרן תפתח פוזיציות אשר נראות לה הזדמנותיות, תוך ניטרול חלקי/מלא של הסיכון ותשאף להקטין ככל האפשר את סיכון השוק.

אין באמור לעיל כדי להגביל את מדיניות ההשקעות של הקרן או לצמצם את גורמי הסיכון הנלווים להשקעה בקרן, כפי שהם מופיעים בהסכם השותפות.
                        </WrappedText>
                    </div>
                </div>
            </section>
        </div>
    )
}

const WrappedText = styled(Text)`
text-align:right;
`