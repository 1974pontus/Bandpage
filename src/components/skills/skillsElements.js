import styled, { keyframes } from 'styled-components';


const barSlide = keyframes`
    0%{
      width: 0px;
    }
    100%{
      width: 100%;
    }
  `


export const SkillsContainer = styled.div`
    background: #161616;
    height: 100vh;
    width: 100%;
    border: solid #fff 2rem;
`
export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`
export const SkillsRow = styled.div`
max-width: 600px;
   
`
export const ArrowRow = styled.div`
    float: left;
`

export const Skillbar = styled.div`
    display: flex;
   
    width: 500px;
    line-height: 30px;
    font-size: 16px;
    color: whitesmoke;
    padding: 0;
    position: relative;
    margin-bottom: 2.5rem;
    
    &:before{
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    height: 10px;
    top: 0;
    z-index: 1;
    background: #E5E5E5;
    }

    &:after{
    content: '';
    background: #F3827C;    
    height: 10px;
    transition: 0.7s;
    display: block;     
    width: 100%;     
    animation: ${barSlide} 1 1.8s;     
    position: absolute;
    top: 0;
    left: 0;     
    z-index: 2;
    ${props => props.addCSS}
    }
    
`

// .bar{
//     display: flex;
//     height: 10px;
//     width: 100%;
//     line-height: 30px;
//     font-size: 16px;
//     color: whitesmoke;
//     padding: 0 0 0 0px;
//     position: relative;
//   }
//   .bar::after{
//     content: '';
//     background: lightblue;;
//     height: 10px;
//     transition: 0.7s;
//     display: block;
//     width: 100%;
//     -webkit-animation: bar-before 1 1.8s;
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 2;
//   }
//   .bar1::after{
//     max-width: 90%;

//   }
//   .bar2::after{
//     max-width: 60%;
//   }
//   .bar3::after{
//     max-width: 50%;
//   }
//   .bar4::after{
//     max-width: 30%;
//   }
//   .bar5::after{
//     max-width: 40%;
//   }
//   .bar6::after{
//     max-width: 20%;
//   }
//   .bar7::after{
//     max-width: 20%;
//   }
//   .bar8::after{
//     max-width: 95%;
//   }
//   .bar9::after{
//     max-width: 60%;
//   }
//   .bar10::after{
//     max-width: 80%;
//   }

//   @-webkit-keyframes bar-before{
//     0%{
//       width: 0px;
//     }
//     100%{
//       width: 100%;
//     }
//   }

{/* <div id='o' class='wrapper'>
    <div class='flexbox'>
        <div class='graph-cont'>
            <h3>HTML&CSS</h3>
            <div class='bar bar1'></div>
        </div>
    </div>
</div> */}
