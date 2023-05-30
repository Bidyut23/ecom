import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HeroSlider = ({ myData }) => {
  const sliderRef = useRef(null);
  useEffect(() => {

  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  return (
    <Wrapper>
    <div className="container">
      <div className="hero-slider">
        <div className="slick-prev" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="slick-next" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src="/images/image1.jpg" alt="Product A" />
          </div>
          <div>
            <img src="/images/image2.jpg" alt="Product B" />
          </div>
          <div>
            <img src="/images/image3.jpg" alt="Product C" />
          </div>
        </Slider>
      </div>
    </div>
  </Wrapper>
);
};

const Wrapper = styled.section`
  .container {
    max-width: 1800px;
    margin: 0 auto;
    padding: 0 15px;
    max-height: auto;
  }

  .hero-slider {
    position: relative;
    margin-top: 2px;

    ${'' /* .slick-prev,
    .slick-next {
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      background-color: transparent;
      border: none;
      font-size: 24px;
      color: #555;
      transition: color 0.3s ease;

      &:hover {
        color: #333;
      }
    } */}

    .slick-prev {
      left: -30px;
      
    }

    .slick-next {
      right: -30px;
     
    }

    .slick-dots {
      bottom: -30px;

      li {
        button {
          &:before {
            color: gray;
            font-size: 12px;
          }
        }

        &.slick-active {
          button:before {
            color: blue;
          }
        }
      }
    }

    img {
      width: 100%;
      height: 50%;
      border-radius: 5px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 768px) {
    .hero-slider .slick-prev,
    .hero-slider .slick-next {
      display: none;
    }

    .hero-slider .slick-dots {
      bottom: -15px;
    }

    .hero-slider img {
      max-height: 50%;
    }
  }
`;


// const Wrapper = styled.section`
//   .hero-slider {
//     margin-top: 1px
  

//     .slick-prev,
//     .slick-next {
//       top: 50%;
//       transform: translateY(-50%);
//       z-index: 1;
//     }

//     .slick-prev {
//       left: -30px;
//     }

//     .slick-next {
//       right: -30px;
//     }
//     @media (max-width: 768px) {
//       .slick-prev,
//       .slick-next {
//         display: none;
//       }

//     .slick-dots {
//       bottom: -30px;

//       li {
//         button:before {
//           color: gray;
//           font-size: 12px;
//         }

//         &.slick-active {
//           button:before {
//             color: Blue;
//           }
//         }
//       }
//     }
//   }

//   .hero-slider img {
//     width: 100%;
//     height: auto;
//     background-size: cover;
// `

// const Wrapper = styled.section`
//   .hero-slider {
//     margin-top: 1px;
//     position: relative;

//     .slick-prev,
//     .slick-next {
//       top: 50%;
//       transform: translateY(-50%);
//       z-index: 1;
//       background-color: transparent;
//       border: none;
//       font-size: 17px;
//       color: #555;
//       transition: color 0.3s ease;

//       &:hover {
//         color: #333;
//       }
//     }

//     .slick-prev {
//       left: -30px;
//     }

//     .slick-next {
//       right: -30px;
//     }

//     .slick-dots {
//       bottom: -30px;

//       li {
//         button {
//           &:before {
//             color: gray;
//             font-size: 12px;
//           }
//         }

//         &.slick-active {
//           button:before {
//             color: blue;
//           }
//         }
//       }
//     }

//     img {
//       width: 100%;
//       height: auto;
//       border-radius: 5px;
//       box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
//     }
//   }

//   @media (max-width: 768px) {
//     .hero-slider .slick-prev,
//     .hero-slider .slick-next {
//       display: none;
//     }

//     .hero-slider .slick-dots {
//       bottom: -15px;
//     }

//     .hero-slider img {
//       max-height: 300px;
//     }
//   }
// `;


export default HeroSlider;
