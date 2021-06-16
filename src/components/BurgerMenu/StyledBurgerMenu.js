import Styled from 'styled-components';


export const StyledBurderMenuContianer = Styled.div`
    background-color:${({isOpp}) => isOpp ? 'black' : '#D8D8D8'};
    height: 80px;
    z-index: 9999;
    width: 100%;
    position: fixed;
    opacity:0.7;

`

export const StyledMenuText = Styled.label`
    position: relative;
    left: 72px;
    color: black;
    font-weight:600;
`

export const StyledMenuIcon = Styled.img`
    height: 63px;
    width: 40px !important;
    position: relative;
    bottom: 44px;
    left: 93%;
    @media (max-width: 735px) {
        left: 91%;
    }
    @media (max-width: 600px) {
        left: 88%;
    }
    @media (max-width: 400px) {
        left: 85%;
    }
}
`

export const InsideBurgerIcon = Styled.img`
    height: 100px;
    width: 60px !important;
    position: relative;
    right: 108px;
    bottom: 122px;
`


export const StyledBurderMenu = Styled.nav`

a{
  color: white !important;
}

a:hover
{
  font-weight: bold;
}

body
{
  margin: 0;
  padding: 0;
  
  /* make it look decent enough */
  background:#232323;
  color: #cdcdcd;
  font-family: "Avenir Next", "Avenir", sans-serif;
}

#menuToggle
{
  display: block;
  position: relative;
  top: 28px;
  left: 25px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: tomato;
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  
  background: ${({isOpp}) => isOpp ? '#cdcdcd' : 'black'};
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */

.circle {
    display: ${(props)=> !props.isOpen ? 'none' : ''};
    position: absolute;
    bottom: -5px;
    left: -8px;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;
    border: 2px solid #fff;
    color: #666;
    text-align: center;
    font: 32px Arial, sans-serif;
    z-index: 1;
    animation: showBlock 0s 0.2s forwards;
    visibility: hidden;

}
 
@keyframes showBlock {
    to { visibility: visible; }
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #fff;

}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  background-color: #031233;
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding-left: 145px;
  padding-top: 125px;
  

  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
  color: white;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}


`