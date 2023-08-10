import { useContext } from "react";
import { LenguaContext } from "../../../context/LenguaProvider";
import { Link } from "react-router-dom";

export const SocialBox = () => {

    const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <div className="container-social">
        {
          lang==='castellano'
            ?
            <p className="logo-texto">Conocenos</p>
            :
            <p className="logo-texto">Follow us</p>
        }
        <Link to={{pathname:"https://instagram.com/"}} target="_blank">
          <svg width="3.5rem" height="3.6rem" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Instagram">
            <g id="instagram">
            <g id="Group 4546">
            <path id="Vector" d="M25.8323 9.1161C25.6664 9.1161 25.5073 9.05021 25.39 8.93292C25.2727 8.81563 25.2068 8.65654 25.2068 8.49067C25.2068 8.32479 25.2727 8.16571 25.39 8.04842C25.5073 7.93113 25.6664 7.86523 25.8323 7.86523" stroke="white" strokeWidth="2.08478" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_2" d="M25.8328 9.1161C25.9987 9.1161 26.1578 9.05021 26.2751 8.93292C26.3924 8.81563 26.4583 8.65654 26.4583 8.49067C26.4583 8.32479 26.3924 8.16571 26.2751 8.04842C26.1578 7.93113 25.9987 7.86523 25.8328 7.86523" stroke="white" strokeWidth="2.08478" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path id="Rectangle 2" d="M2.14489 8.58345C2.14489 6.87626 2.8226 5.23899 4.02893 4.03183C5.23526 2.82466 6.87139 2.14648 8.57739 2.14648H25.7324C26.5771 2.14648 27.4136 2.31298 28.194 2.63647C28.9744 2.95996 29.6835 3.4341 30.2809 4.03183C30.8782 4.62956 31.352 5.33916 31.6752 6.12013C31.9985 6.9011 32.1649 7.73814 32.1649 8.58345V25.7504C32.1649 27.4576 31.4872 29.0948 30.2809 30.302C29.0745 31.5092 27.4384 32.1873 25.7324 32.1873H8.57489C6.86889 32.1873 5.23276 31.5092 4.02643 30.302C2.8201 29.0948 2.1424 27.4576 2.1424 25.7504V8.58095L2.14489 8.58345Z" stroke="white" strokeWidth="2.08478" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Ellipse 11" d="M10.7802 17.167C10.7802 18.0048 10.9451 18.8343 11.2655 19.6083C11.5859 20.3823 12.0554 21.0856 12.6474 21.678C13.2394 22.2703 13.9422 22.7403 14.7156 23.0608C15.4891 23.3814 16.318 23.5465 17.1552 23.5465C17.9924 23.5465 18.8214 23.3814 19.5948 23.0608C20.3683 22.7403 21.071 22.2703 21.663 21.678C22.255 21.0856 22.7246 20.3823 23.0449 19.6083C23.3653 18.8343 23.5302 18.0048 23.5302 17.167C23.5302 15.4751 22.8586 13.8525 21.663 12.6561C20.4675 11.4597 18.846 10.7876 17.1552 10.7876C15.4645 10.7876 13.843 11.4597 12.6474 12.6561C11.4519 13.8525 10.7802 15.4751 10.7802 17.167Z" stroke="white" strokeWidth="2.08478" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            </g>
          </svg>
        </Link> 
    </div>
  )
}
