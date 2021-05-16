import React from 'react';
import PiNovelLOGO from '../../assets/pi-logo.png'
import { StyledPiNovelIcon } from './StyledHome';

const Home = ({homeIcon}) => {
    return (
        <div>
            <section>
                <a href="#" class="image featured"><img src={homeIcon} alt="" /></a>

            </section>
           
        </div>
    )
}

export default Home;