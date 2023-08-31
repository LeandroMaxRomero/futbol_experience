
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { LenguaContext } from '../../context/LenguaProvider';
import { useContext } from 'react';

export default function PrestacionesSlides() {
    const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <div className='contenedor-prestaciones-Mobile'>
        {
            lang ==='castellano'
            ?
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              centeredSlides={false}
              slidesPerGroupSkip={2}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                650: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
              }}
              scrollbar={false}
              navigation={false}
              pagination={{
                clickable: true,
              }}
              modules={[Keyboard, Scrollbar, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
              <div className="prestaciones-box prestacionesUno">
                <img src="img/experiencia1.png" alt="Experiencia inolvidable" className="imagen-fondo-prestaciones"/>
                  <p>Experiencia<br></br>inolvidable</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="prestaciones-box prestacionesDos">
                  <img src="img/experiencia2.png" alt="Camiseta de la selección argentina de regalo" className="imagen-fondo-prestaciones"/>
                    <p>Camiseta<br></br>de regalo</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="prestaciones-box prestacionesTres">
                  <img src="img/experiencia3.png" alt="Comida local" className="imagen-fondo-prestaciones"/>
                  <p>Comida<br></br>local</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="prestaciones-box prestacionesCuatro">
                <img src="img/experiencia4.png" alt="Transporte incluido" className="imagen-fondo-prestaciones"/>
                  <p>Transporte<br></br>incluido</p>
                </div>
              </SwiperSlide>
            </Swiper>
            :
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              centeredSlides={true}
              slidesPerGroupSkip={2}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                650: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
              }}
              scrollbar={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Keyboard, Scrollbar, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
              <div className="prestaciones-box prestacionesUno">
                <img src="img/experiencia1.png" alt="Experiencia inolvidable" className="imagen-fondo-prestaciones"/>
                <p>Unforgetable<br></br>experience</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="prestaciones-box prestacionesDos">
                  <img src="img/experiencia2.png" alt="Camiseta de la selección argentina de regalo" className="imagen-fondo-prestaciones"/>
                  <p>Gift<br></br>t-shirt</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="prestaciones-box prestacionesTres">
                  <img src="img/experiencia3.png" alt="Comida local" className="imagen-fondo-prestaciones"/>
                  <p>Local<br></br>foods</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="prestaciones-box prestacionesCuatro">
                <img src="img/experiencia4.png" alt="Transporte incluido" className="imagen-fondo-prestaciones"/>
                <p>Transportation<br></br>included</p>
                </div>
              </SwiperSlide>
            </Swiper>
        }
    </div>
  );
}



// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         centeredSlides={false}
//         slidesPerGroupSkip={1}
//         grabCursor={true}
//         keyboard={{
//           enabled: true,
//         }}
//         breakpoints={{
//           769: {
//             slidesPerView: 2,
//             slidesPerGroup: 2,
//           },
//         }}
//         scrollbar={true}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Keyboard, Scrollbar, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

