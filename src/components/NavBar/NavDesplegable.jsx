import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Link } from 'react-router-dom';
import { LenguaContext } from '../../context/LenguaProvider';
import { useContext } from 'react';

function NavDesplegable() {
    const useLengua = () => useContext(LenguaContext);
  const {  changeLang } = useLengua();
  return (
    <Dropdown className='container-navDesplegable'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.58398 5.95239H29.2269V8.69049H4.58398V5.95239ZM4.58398 15.5357H29.2269V18.2738H4.58398V15.5357ZM4.58398 25.1191H29.2269V27.8572H4.58398V25.1191Z" fill="#0B2933"/>
        </svg>
      </Dropdown.Toggle>

      <Dropdown.Menu className='menu-desplegable'>

      <Dropdown.Header>
      <svg width="186" height="32" viewBox="0 0 186 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0525 7.77817C13.9579 7.87282 13.8443 7.91929 13.7118 7.91929H5.08318C4.94895 7.91929 4.88184 7.9864 4.88184 8.12063V15.7047C4.88184 15.8389 4.94895 15.906 5.08318 15.906H10.1788C10.313 15.906 10.4266 15.9525 10.5195 16.0471C10.6124 16.1418 10.6606 16.2553 10.6606 16.3879V19.4786C10.6606 19.6128 10.6142 19.7264 10.5195 19.8193C10.4249 19.914 10.3113 19.9604 10.1788 19.9604H5.08318C4.94895 19.9604 4.88184 20.0276 4.88184 20.1618V31.518C4.88184 31.6523 4.83537 31.7659 4.74073 31.8588C4.64608 31.9534 4.5325 31.9999 4.39999 31.9999H0.710369C0.576139 31.9999 0.462558 31.9534 0.36963 31.8588C0.27498 31.7659 0.228516 31.6523 0.228516 31.518V4.38628C0.228516 4.25204 0.27498 4.13846 0.36963 4.04553C0.462558 3.95261 0.576139 3.90442 0.710369 3.90442H13.7118C13.846 3.90442 13.9596 3.95088 14.0525 4.04553C14.1455 4.14018 14.1936 4.25377 14.1936 4.38628V7.43572C14.1936 7.56995 14.1455 7.68353 14.0525 7.77817Z" fill="#447980"/>
          <path d="M14.1562 7.43584V4.3864C14.1562 4.25217 14.2027 4.13859 14.2974 4.04566C14.392 3.95273 14.5056 3.90454 14.6381 3.90454H27.6808C27.8151 3.90454 27.9286 3.95101 28.0216 4.04566C28.1162 4.14031 28.1627 4.25389 28.1627 4.3864V31.513C28.1627 31.6472 28.1162 31.7608 28.0216 31.8537C27.9286 31.9484 27.8151 31.9949 27.6808 31.9949H14.6381C14.5039 31.9949 14.3903 31.9484 14.2974 31.8537C14.2044 31.7608 14.1562 31.6472 14.1562 31.513V28.4636C14.1562 28.3293 14.2027 28.2157 14.2974 28.1228C14.392 28.0299 14.5056 27.9817 14.6381 27.9817H23.3063C23.4405 27.9817 23.5076 27.9146 23.5076 27.7804V20.155C23.5076 20.0208 23.4405 19.9537 23.3063 19.9537H18.1694C18.0352 19.9537 17.9216 19.9072 17.8287 19.8126C17.7357 19.7196 17.6875 19.6061 17.6875 19.4718V16.3845C17.6875 16.2503 17.734 16.1367 17.8287 16.0438C17.9233 15.9509 18.0369 15.9027 18.1694 15.9027H23.3063C23.4405 15.9027 23.5076 15.8356 23.5076 15.7013V8.11731C23.5076 7.98308 23.4405 7.91597 23.3063 7.91597H14.6381C14.5039 7.91597 14.3903 7.8695 14.2974 7.77485C14.2027 7.68364 14.1562 7.57007 14.1562 7.43584Z" fill="#0B2933"/>
          <path d="M50.0631 5.861C50.015 5.90918 49.9565 5.93328 49.8893 5.93328H45.4735C45.4047 5.93328 45.3702 5.9677 45.3702 6.03653V9.91717C45.3702 9.986 45.4047 10.0204 45.4735 10.0204H48.0807C48.1495 10.0204 48.2063 10.0445 48.2545 10.0927C48.3027 10.1409 48.3268 10.1994 48.3268 10.2665V11.848C48.3268 11.9169 48.3027 11.9754 48.2545 12.0218C48.2063 12.07 48.1478 12.0941 48.0807 12.0941H45.4735C45.4047 12.0941 45.3702 12.1285 45.3702 12.1974V18.0089C45.3702 18.0777 45.3462 18.1362 45.298 18.1827C45.2498 18.2309 45.1913 18.2549 45.1242 18.2549H43.2363C43.1675 18.2549 43.109 18.2309 43.0625 18.1827C43.0143 18.1345 42.9902 18.076 42.9902 18.0089V4.12805C42.9902 4.05922 43.0143 4.0007 43.0625 3.95424C43.1107 3.90605 43.1692 3.88196 43.2363 3.88196H49.8893C49.9582 3.88196 50.015 3.90605 50.0631 3.95424C50.1113 4.00242 50.1354 4.06094 50.1354 4.12805V5.68891C50.1354 5.7543 50.1113 5.81281 50.0631 5.861Z" fill="#0B2933"/>
          <path d="M52.281 17.2779C51.5754 16.5172 51.2227 15.5157 51.2227 14.2697V4.12673C51.2227 4.05789 51.2468 3.99938 51.2949 3.95292C51.3431 3.90473 51.4016 3.88064 51.4687 3.88064H53.3583C53.4271 3.88064 53.4839 3.90473 53.5321 3.95292C53.5803 4.0011 53.6044 4.05961 53.6044 4.12673V14.5175C53.6044 15.0648 53.7403 15.5105 54.0157 15.853C54.2893 16.1954 54.6524 16.3658 55.1033 16.3658C55.5542 16.3658 55.9173 16.1954 56.1909 15.853C56.4645 15.5105 56.6022 15.0665 56.6022 14.5175V4.12673C56.6022 4.05789 56.6263 3.99938 56.6745 3.95292C56.7227 3.90473 56.7812 3.88064 56.8483 3.88064H58.7378C58.8067 3.88064 58.8635 3.90473 58.9117 3.95292C58.9598 4.0011 58.9839 4.05961 58.9839 4.12673V14.2697C58.9839 15.5157 58.6277 16.519 57.917 17.2779C57.2045 18.0385 56.2666 18.4171 55.1033 18.4171C53.9262 18.4171 52.9849 18.0368 52.281 17.2779ZM53.9537 2.48327C53.9124 2.4282 53.9193 2.35936 53.9744 2.27848L55.1859 0.163488C55.241 0.0533501 55.3425 0 55.4939 0H56.9722C57.0823 0 57.1494 0.0309777 57.177 0.0929303C57.2045 0.154883 57.1908 0.227161 57.1357 0.308043L55.6161 2.42304C55.5473 2.51941 55.4526 2.56759 55.3287 2.56759H54.1585C54.0639 2.56587 53.995 2.53834 53.9537 2.48327Z" fill="#0B2933"/>
          <path d="M68.4605 3.95119C68.5087 3.99937 68.5328 4.05788 68.5328 4.12499V5.68585C68.5328 5.75469 68.5087 5.8132 68.4605 5.85967C68.4123 5.90785 68.3538 5.93194 68.2867 5.93194H65.6795C65.6107 5.93194 65.5763 5.96636 65.5763 6.0352V18.0058C65.5763 18.0746 65.5522 18.1332 65.504 18.1796C65.4558 18.2278 65.3973 18.2519 65.3302 18.2519H63.4406C63.3718 18.2519 63.3133 18.2278 63.2668 18.1796C63.2186 18.1314 63.1945 18.0729 63.1945 18.0058V6.0352C63.1945 5.96636 63.1601 5.93194 63.0913 5.93194H60.6269C60.5581 5.93194 60.4996 5.90785 60.4531 5.85967C60.405 5.81148 60.3809 5.75297 60.3809 5.68585V4.12499C60.3809 4.05616 60.405 3.99765 60.4531 3.95119C60.5013 3.903 60.5598 3.87891 60.6269 3.87891H68.2867C68.3538 3.87891 68.4123 3.903 68.4605 3.95119Z" fill="#0B2933"/>
          <path d="M76.7155 17.2263C75.9824 17.9113 75.029 18.2537 73.8502 18.2537H70.2363C70.1675 18.2537 70.109 18.2296 70.0625 18.1814C70.0143 18.1333 69.9902 18.0747 69.9902 18.0076V4.12683C69.9902 4.05799 70.0143 3.99948 70.0625 3.95301C70.1107 3.90483 70.1692 3.88074 70.2363 3.88074H73.4802C74.7812 3.88074 75.8 4.20943 76.54 4.86681C77.28 5.5242 77.6483 6.48274 77.6483 7.74244C77.6483 9.15186 77.1492 10.1586 76.1493 10.7609C76.0805 10.8022 76.0667 10.8435 76.108 10.8848C76.6415 11.2273 77.0597 11.685 77.3609 12.2598C77.662 12.8346 77.8117 13.5195 77.8117 14.3128C77.8135 15.5708 77.4469 16.5414 76.7155 17.2263ZM72.372 6.03531V9.85399C72.372 9.92283 72.4064 9.95724 72.4752 9.95724H73.5232C74.0843 9.95724 74.5231 9.78688 74.838 9.44442C75.1529 9.10196 75.3095 8.61667 75.3095 7.98682C75.3095 7.32943 75.1512 6.82348 74.838 6.46726C74.5231 6.11103 74.0843 5.93377 73.5232 5.93377H72.4752C72.4064 5.93205 72.372 5.96647 72.372 6.03531ZM74.9602 15.6035C75.2751 15.2198 75.4317 14.6794 75.4317 13.9807C75.4317 13.2683 75.2734 12.7107 74.9602 12.308C74.6453 11.9036 74.2133 11.7022 73.6661 11.7022H72.4752C72.4064 11.7022 72.372 11.7367 72.372 11.8055V16.0768C72.372 16.1456 72.4064 16.18 72.4752 16.18H73.6661C74.2133 16.1783 74.6436 15.9873 74.9602 15.6035Z" fill="#0B2933"/>
          <path d="M80.1027 17.3504C79.3833 16.638 79.0254 15.6949 79.0254 14.5161V7.617C79.0254 6.4399 79.3851 5.49512 80.1027 4.78267C80.822 4.07021 81.7685 3.71399 82.9473 3.71399C84.1244 3.71399 85.0761 4.07021 85.8023 4.78267C86.5285 5.49512 86.8899 6.43818 86.8899 7.617V14.5161C86.8899 15.6932 86.5268 16.638 85.8023 17.3504C85.0761 18.0629 84.1244 18.4174 82.9473 18.4174C81.7702 18.4174 80.822 18.0612 80.1027 17.3504ZM84.0762 15.8808C84.3636 15.559 84.5082 15.1391 84.5082 14.6176V7.51375C84.5082 6.99403 84.3636 6.57241 84.0762 6.2506C83.7888 5.92879 83.412 5.76875 82.9473 5.76875C82.481 5.76875 82.1092 5.93051 81.8287 6.2506C81.5482 6.57241 81.4071 6.99403 81.4071 7.51375V14.6176C81.4071 15.1373 81.5465 15.559 81.8287 15.8808C82.1092 16.2026 82.4827 16.3626 82.9473 16.3626C83.412 16.3644 83.7888 16.2026 84.0762 15.8808Z" fill="#0B2933"/>
          <path d="M88.7285 18.1814C88.6804 18.1333 88.6562 18.0747 88.6562 18.0076V4.12683C88.6562 4.05799 88.6804 3.99948 88.7285 3.95301C88.7767 3.90483 88.8352 3.88074 88.9023 3.88074H90.7919C90.8607 3.88074 90.9175 3.90483 90.9657 3.95301C91.0139 4.0012 91.038 4.05971 91.038 4.12683V16.0974C91.038 16.1663 91.0724 16.2007 91.1412 16.2007H95.576C95.6448 16.2007 95.7016 16.2248 95.7498 16.273C95.798 16.3211 95.8221 16.3797 95.8221 16.4468V18.0076C95.8221 18.0765 95.798 18.135 95.7498 18.1814C95.7016 18.2296 95.6431 18.2537 95.576 18.2537H88.9023C88.8335 18.2537 88.7767 18.2296 88.7285 18.1814Z" fill="#0B2933"/>
          <path d="M107.969 5.86161C107.92 5.90979 107.862 5.93389 107.795 5.93389H103.36C103.291 5.93389 103.257 5.96831 103.257 6.03714V9.91778C103.257 9.98661 103.291 10.021 103.36 10.021H105.988C106.057 10.021 106.113 10.0451 106.162 10.0933C106.21 10.1415 106.234 10.2 106.234 10.2671V11.8486C106.234 11.9175 106.21 11.976 106.162 12.0224C106.113 12.0706 106.055 12.0947 105.988 12.0947H103.36C103.291 12.0947 103.257 12.1291 103.257 12.198V16.0993C103.257 16.1681 103.291 16.2025 103.36 16.2025H107.795C107.864 16.2025 107.92 16.2266 107.969 16.2748C108.017 16.323 108.041 16.3815 108.041 16.4486V18.0095C108.041 18.0783 108.017 18.1368 107.969 18.1833C107.92 18.2315 107.862 18.2556 107.795 18.2556H101.121C101.052 18.2556 100.994 18.2315 100.947 18.1833C100.899 18.1351 100.875 18.0766 100.875 18.0095V4.12866C100.875 4.05983 100.899 4.00131 100.947 3.95485C100.995 3.90666 101.054 3.88257 101.121 3.88257H107.795C107.864 3.88257 107.92 3.90666 107.969 3.95485C108.017 4.00303 108.041 4.06155 108.041 4.12866V5.68952C108.041 5.75491 108.017 5.81342 107.969 5.86161Z" fill="#0B2933"/>
          <path d="M109.128 18.171C109.101 18.1159 109.101 18.0471 109.128 17.9662L111.942 11.1291C111.956 11.0878 111.956 11.0465 111.942 11.0052L109.128 4.16802C109.114 4.14048 109.107 4.09918 109.107 4.04411C109.107 3.93397 109.176 3.87891 109.312 3.87891H111.262C111.398 3.87891 111.487 3.94774 111.529 4.08369L113.172 8.53911C113.186 8.58041 113.207 8.60106 113.234 8.60106C113.262 8.60106 113.282 8.58041 113.296 8.53911L114.919 4.08369C114.96 3.94774 115.048 3.87891 115.186 3.87891H117.117C117.213 3.87891 117.273 3.90644 117.301 3.96151C117.328 4.01658 117.328 4.08542 117.301 4.1663L114.487 11.0034C114.473 11.0447 114.473 11.0861 114.487 11.1274L117.301 17.9645C117.314 17.992 117.321 18.0333 117.321 18.0884C117.321 18.1985 117.252 18.2519 117.117 18.2519H115.206C115.055 18.2519 114.96 18.1831 114.919 18.0471L113.296 13.6123C113.282 13.571 113.262 13.5504 113.234 13.5504C113.207 13.5504 113.186 13.571 113.172 13.6123L111.529 18.0471C111.487 18.1848 111.391 18.2519 111.241 18.2519H109.312C109.218 18.2536 109.156 18.2261 109.128 18.171Z" fill="#0B2933"/>
          <path d="M124.847 4.39188C125.401 4.74811 125.833 5.24717 126.141 5.89079C126.449 6.5344 126.602 7.26751 126.602 8.08838C126.602 9.32054 126.277 10.3135 125.626 11.0655C124.976 11.8193 124.117 12.1945 123.05 12.1945H121.305C121.236 12.1945 121.202 12.2289 121.202 12.2977V18.0059C121.202 18.0748 121.178 18.1333 121.13 18.1798C121.082 18.2279 121.023 18.252 120.956 18.252H119.066C118.998 18.252 118.939 18.2279 118.893 18.1798C118.844 18.1316 118.82 18.0731 118.82 18.0059V4.10449C118.82 4.03565 118.844 3.97886 118.893 3.93067C118.941 3.88249 118.999 3.8584 119.066 3.8584H122.926C123.653 3.8584 124.293 4.03737 124.847 4.39188ZM123.759 9.74216C124.067 9.35152 124.222 8.82148 124.222 8.15033C124.222 7.46541 124.067 6.9216 123.759 6.51719C123.451 6.11278 123.043 5.91144 122.537 5.91144H121.305C121.236 5.91144 121.202 5.94585 121.202 6.01469V10.224C121.202 10.2929 121.236 10.3273 121.305 10.3273H122.537C123.043 10.3273 123.451 10.1311 123.759 9.74216Z" fill="#0B2933"/>
          <path d="M135.113 5.861C135.065 5.90918 135.006 5.93328 134.939 5.93328H130.503C130.434 5.93328 130.399 5.9677 130.399 6.03653V9.91717C130.399 9.986 130.434 10.0204 130.503 10.0204H133.13C133.199 10.0204 133.256 10.0445 133.304 10.0927C133.352 10.1409 133.376 10.1994 133.376 10.2665V11.848C133.376 11.9169 133.352 11.9754 133.304 12.0218C133.256 12.07 133.197 12.0941 133.13 12.0941H130.503C130.434 12.0941 130.399 12.1285 130.399 12.1974V16.0987C130.399 16.1675 130.434 16.2019 130.503 16.2019H134.937C135.006 16.2019 135.063 16.226 135.111 16.2742C135.159 16.3224 135.183 16.3809 135.183 16.448V18.0089C135.183 18.0777 135.159 18.1362 135.111 18.1827C135.063 18.2309 135.004 18.2549 134.937 18.2549H128.264C128.195 18.2549 128.136 18.2309 128.09 18.1827C128.042 18.1345 128.018 18.076 128.018 18.0089V4.12805C128.018 4.05922 128.042 4.0007 128.09 3.95424C128.138 3.90605 128.197 3.88196 128.264 3.88196H134.937C135.006 3.88196 135.063 3.90605 135.111 3.95424C135.159 4.00242 135.183 4.06094 135.183 4.12805V5.68891C135.185 5.7543 135.161 5.81281 135.113 5.861Z" fill="#0B2933"/>
          <path d="M142.165 18.0471L140.42 12.153C140.392 12.0979 140.358 12.0704 140.317 12.0704H139.229C139.16 12.0704 139.126 12.1048 139.126 12.1737V18.0058C139.126 18.0746 139.102 18.1332 139.054 18.1796C139.005 18.2278 138.947 18.2519 138.88 18.2519H136.99C136.921 18.2519 136.863 18.2278 136.816 18.1796C136.768 18.1314 136.744 18.0729 136.744 18.0058V4.12499C136.744 4.05616 136.768 3.99765 136.816 3.95119C136.865 3.903 136.923 3.87891 136.99 3.87891H140.85C141.575 3.87891 142.217 4.05272 142.771 4.40206C143.325 4.75141 143.757 5.24358 144.065 5.88032C144.373 6.51705 144.526 7.24671 144.526 8.06758C144.526 8.91599 144.363 9.6491 144.034 10.2652C143.705 10.8813 143.247 11.3459 142.659 11.6608C142.604 11.6746 142.583 11.7159 142.597 11.7847L144.609 17.9662C144.622 17.9938 144.629 18.0282 144.629 18.0695C144.629 18.1934 144.554 18.2536 144.404 18.2536H142.432C142.296 18.2536 142.206 18.1848 142.165 18.0471ZM139.126 6.0352V10.1206C139.126 10.1895 139.16 10.2239 139.229 10.2239H140.482C140.974 10.2239 141.375 10.0329 141.683 9.6491C141.991 9.26533 142.146 8.74562 142.146 8.08824C142.146 7.43085 141.993 6.90769 141.683 6.51705C141.375 6.1264 140.974 5.93194 140.482 5.93194H139.229C139.16 5.93194 139.126 5.96636 139.126 6.0352Z" fill="#0B2933"/>
          <path d="M146.076 18.1814C146.028 18.1333 146.004 18.0747 146.004 18.0076V4.12683C146.004 4.05799 146.028 3.99948 146.076 3.95301C146.124 3.90483 146.183 3.88074 146.25 3.88074H148.14C148.208 3.88074 148.265 3.90483 148.313 3.95301C148.362 4.0012 148.386 4.05971 148.386 4.12683V18.0076C148.386 18.0765 148.362 18.135 148.313 18.1814C148.265 18.2296 148.207 18.2537 148.14 18.2537H146.25C146.183 18.2537 146.124 18.2296 146.076 18.1814Z" fill="#0B2933"/>
          <path d="M157.498 5.861C157.45 5.90918 157.391 5.93328 157.324 5.93328H152.889C152.82 5.93328 152.786 5.9677 152.786 6.03653V9.91717C152.786 9.986 152.82 10.0204 152.889 10.0204H155.517C155.586 10.0204 155.644 10.0445 155.691 10.0927C155.739 10.1409 155.763 10.1994 155.763 10.2665V11.848C155.763 11.9169 155.739 11.9754 155.691 12.0218C155.643 12.07 155.584 12.0941 155.517 12.0941H152.889C152.82 12.0941 152.786 12.1285 152.786 12.1974V16.0987C152.786 16.1675 152.82 16.2019 152.889 16.2019H157.324C157.393 16.2019 157.45 16.226 157.498 16.2742C157.546 16.3224 157.57 16.3809 157.57 16.448V18.0089C157.57 18.0777 157.546 18.1362 157.498 18.1827C157.45 18.2309 157.391 18.2549 157.324 18.2549H150.65C150.582 18.2549 150.523 18.2309 150.477 18.1827C150.428 18.1345 150.404 18.076 150.404 18.0089V4.12805C150.404 4.05922 150.428 4.0007 150.477 3.95424C150.525 3.90605 150.583 3.88196 150.65 3.88196H157.324C157.393 3.88196 157.45 3.90605 157.498 3.95424C157.546 4.00242 157.57 4.06094 157.57 4.12805V5.68891C157.568 5.7543 157.544 5.81281 157.498 5.861Z" fill="#0B2933"/>
          <path d="M165.032 3.95119C165.08 3.903 165.138 3.87891 165.207 3.87891H167.076C167.145 3.87891 167.202 3.903 167.25 3.95119C167.298 3.99937 167.322 4.05788 167.322 4.12499V18.0058C167.322 18.0746 167.298 18.1332 167.25 18.1796C167.202 18.2278 167.143 18.2519 167.076 18.2519H164.92C164.784 18.2519 164.694 18.1831 164.653 18.0471L161.593 9.34106C161.579 9.29976 161.555 9.28254 161.521 9.28942C161.487 9.29631 161.469 9.32041 161.469 9.36171L161.49 18.0058C161.49 18.0746 161.466 18.1332 161.418 18.1796C161.37 18.2278 161.311 18.2519 161.244 18.2519H159.375C159.306 18.2519 159.248 18.2278 159.201 18.1796C159.153 18.1314 159.129 18.0729 159.129 18.0058V4.12499C159.129 4.05616 159.153 3.99765 159.201 3.95119C159.249 3.903 159.308 3.87891 159.375 3.87891H161.49C161.626 3.87891 161.715 3.94774 161.757 4.08369L164.837 12.7278C164.851 12.7691 164.875 12.7863 164.909 12.7794C164.944 12.7725 164.961 12.7484 164.961 12.7071V4.12328C164.959 4.05788 164.983 3.99937 165.032 3.95119Z" fill="#0B2933"/>
          <path d="M170.144 17.3587C169.439 16.6531 169.086 15.7187 169.086 14.5553V7.55297C169.086 6.37587 169.439 5.44142 170.144 4.74962C170.85 4.05782 171.784 3.71191 172.948 3.71191C174.125 3.71191 175.07 4.05782 175.782 4.74962C176.494 5.44142 176.851 6.37587 176.851 7.55297V7.79906C176.851 7.8679 176.827 7.92985 176.778 7.9832C176.73 8.03827 176.672 8.0658 176.605 8.0658L174.694 8.14841C174.531 8.14841 174.448 8.0658 174.448 7.90231V7.38948C174.448 6.91107 174.312 6.52043 174.037 6.21927C173.763 5.91811 173.4 5.7684 172.949 5.7684C172.511 5.7684 172.156 5.91983 171.882 6.21927C171.609 6.52043 171.471 6.91107 171.471 7.38948V14.7412C171.471 15.2213 171.607 15.6102 171.882 15.9114C172.156 16.2126 172.512 16.3623 172.949 16.3623C173.402 16.3623 173.763 16.2126 174.037 15.9114C174.311 15.6102 174.448 15.2196 174.448 14.7412V14.2284C174.448 14.1595 174.472 14.1027 174.521 14.0545C174.569 14.0064 174.627 13.9823 174.694 13.9823L176.605 14.0649C176.673 14.0649 176.73 14.089 176.778 14.1372C176.827 14.1853 176.851 14.2438 176.851 14.311V14.5571C176.851 15.7204 176.494 16.6548 175.782 17.3604C175.07 18.066 174.126 18.417 172.948 18.417C171.783 18.417 170.848 18.0642 170.144 17.3587Z" fill="#0B2933"/>
          <path d="M185.607 5.861C185.559 5.90918 185.501 5.93328 185.433 5.93328H180.999C180.93 5.93328 180.895 5.9677 180.895 6.03653V9.91717C180.895 9.986 180.93 10.0204 180.999 10.0204H183.626C183.695 10.0204 183.754 10.0445 183.8 10.0927C183.848 10.1409 183.873 10.1994 183.873 10.2665V11.848C183.873 11.9169 183.848 11.9754 183.8 12.0218C183.752 12.07 183.694 12.0941 183.626 12.0941H180.999C180.93 12.0941 180.895 12.1285 180.895 12.1974V16.0987C180.895 16.1675 180.93 16.2019 180.999 16.2019H185.433C185.502 16.2019 185.559 16.226 185.607 16.2742C185.655 16.3224 185.68 16.3809 185.68 16.448V18.0089C185.68 18.0777 185.655 18.1362 185.607 18.1827C185.559 18.2309 185.501 18.2549 185.433 18.2549H178.76C178.691 18.2549 178.632 18.2309 178.586 18.1827C178.538 18.1345 178.514 18.076 178.514 18.0089V4.12805C178.514 4.05922 178.538 4.0007 178.586 3.95424C178.634 3.90605 178.693 3.88196 178.76 3.88196H185.433C185.502 3.88196 185.559 3.90605 185.607 3.95424C185.655 4.00242 185.68 4.06094 185.68 4.12805V5.68891C185.68 5.7543 185.655 5.81281 185.607 5.861Z" fill="#0B2933"/>
          <path d="M46.9802 24.5002C47.0043 24.5243 47.0164 24.5536 47.0164 24.588V25.371C47.0164 25.4054 47.0043 25.4347 46.9802 25.4588C46.9561 25.4829 46.9269 25.4949 46.8925 25.4949H45.5846C45.5502 25.4949 45.5329 25.5121 45.5329 25.5466V31.5508C45.5329 31.5852 45.5209 31.6145 45.4968 31.6386C45.4727 31.6627 45.4435 31.6747 45.409 31.6747H44.4608C44.4264 31.6747 44.3972 31.6627 44.3731 31.6386C44.349 31.6145 44.3369 31.5852 44.3369 31.5508V25.5466C44.3369 25.5121 44.3197 25.4949 44.2853 25.4949H43.0497C43.0153 25.4949 42.986 25.4829 42.9619 25.4588C42.9378 25.4347 42.9258 25.4054 42.9258 25.371V24.588C42.9258 24.5536 42.9378 24.5243 42.9619 24.5002C42.986 24.4762 43.0153 24.4641 43.0497 24.4641H46.8907C46.9269 24.4641 46.9561 24.4762 46.9802 24.5002Z" fill="#0B2933"/>
          <path d="M54.0964 24.5002C54.1205 24.4762 54.1498 24.4641 54.1842 24.4641H55.1324C55.1668 24.4641 55.1961 24.4762 55.2202 24.5002C55.2443 24.5243 55.2563 24.5536 55.2563 24.588V31.5491C55.2563 31.5835 55.2443 31.6127 55.2202 31.6368C55.1961 31.6609 55.1668 31.673 55.1324 31.673H54.1842C54.1498 31.673 54.1205 31.6609 54.0964 31.6368C54.0723 31.6127 54.0603 31.5835 54.0603 31.5491V28.6356C54.0603 28.6012 54.0431 28.584 54.0087 28.584H52.7008C52.6664 28.584 52.6492 28.6012 52.6492 28.6356V31.5491C52.6492 31.5835 52.6371 31.6127 52.613 31.6368C52.5889 31.6609 52.5597 31.673 52.5252 31.673H51.577C51.5426 31.673 51.5134 31.6609 51.4893 31.6368C51.4652 31.6127 51.4531 31.5835 51.4531 31.5491V24.588C51.4531 24.5536 51.4652 24.5243 51.4893 24.5002C51.5134 24.4762 51.5426 24.4641 51.577 24.4641H52.5252C52.5597 24.4641 52.5889 24.4762 52.613 24.5002C52.6371 24.5243 52.6492 24.5536 52.6492 24.588V27.4929C52.6492 27.5273 52.6664 27.5445 52.7008 27.5445H54.0087C54.0431 27.5445 54.0603 27.5273 54.0603 27.4929V24.588C54.0603 24.5536 54.0723 24.5243 54.0964 24.5002Z" fill="#0B2933"/>
          <path d="M63.4846 25.4568C63.4605 25.4809 63.4313 25.493 63.3968 25.493H61.1734C61.139 25.493 61.1218 25.5102 61.1218 25.5446V27.4909C61.1218 27.5253 61.139 27.5426 61.1734 27.5426H62.4916C62.5261 27.5426 62.5553 27.5546 62.5794 27.5787C62.6035 27.6028 62.6156 27.632 62.6156 27.6665V28.4598C62.6156 28.4942 62.6035 28.5235 62.5794 28.5476C62.5553 28.5717 62.5261 28.5837 62.4916 28.5837H61.1734C61.139 28.5837 61.1218 28.6009 61.1218 28.6353V30.592C61.1218 30.6264 61.139 30.6436 61.1734 30.6436H63.3968C63.4313 30.6436 63.4605 30.6557 63.4846 30.6798C63.5087 30.7039 63.5208 30.7331 63.5208 30.7675V31.5505C63.5208 31.585 63.5087 31.6142 63.4846 31.6383C63.4605 31.6624 63.4313 31.6744 63.3968 31.6744H60.0497C60.0153 31.6744 59.986 31.6624 59.9619 31.6383C59.9378 31.6142 59.9258 31.585 59.9258 31.5505V24.5895C59.9258 24.5551 59.9378 24.5258 59.9619 24.5017C59.986 24.4776 60.0153 24.4656 60.0497 24.4656H63.3968C63.4313 24.4656 63.4605 24.4776 63.4846 24.5017C63.5087 24.5258 63.5208 24.5551 63.5208 24.5895V25.3725C63.5208 25.4035 63.5087 25.4327 63.4846 25.4568Z" fill="#0B2933"/>
          <path d="M77.0487 31.1568C76.6822 31.501 76.2021 31.6714 75.6118 31.6714H73.7997C73.7653 31.6714 73.736 31.6593 73.7119 31.6352C73.6878 31.6112 73.6758 31.5819 73.6758 31.5475V24.5864C73.6758 24.552 73.6878 24.5227 73.7119 24.4987C73.736 24.4746 73.7653 24.4625 73.7997 24.4625H75.4277C76.0799 24.4625 76.591 24.6277 76.9627 24.9564C77.3344 25.2851 77.5186 25.767 77.5186 26.3985C77.5186 27.1058 77.2673 27.6101 76.7665 27.9129C76.7321 27.9336 76.7252 27.9542 76.7459 27.9749C77.0143 28.147 77.2226 28.3759 77.374 28.665C77.5254 28.9541 77.6012 29.2965 77.6012 29.6941C77.5994 30.3274 77.417 30.8144 77.0487 31.1568ZM74.8718 25.545V27.4603C74.8718 27.4948 74.889 27.512 74.9234 27.512H75.4483C75.7288 27.512 75.9491 27.4259 76.1074 27.2538C76.2657 27.0817 76.3449 26.8391 76.3449 26.5224C76.3449 26.192 76.2657 25.9391 76.1074 25.7601C75.9491 25.5811 75.7305 25.4916 75.4483 25.4916H74.9234C74.889 25.4933 74.8718 25.5106 74.8718 25.545ZM76.1694 30.3446C76.3277 30.1518 76.4069 29.8817 76.4069 29.5306C76.4069 29.1744 76.3277 28.8939 76.1694 28.6908C76.011 28.4877 75.7959 28.3862 75.5206 28.3862H74.9234C74.889 28.3862 74.8718 28.4034 74.8718 28.4378V30.5803C74.8718 30.6148 74.889 30.632 74.9234 30.632H75.5206C75.7942 30.632 76.011 30.5356 76.1694 30.3446Z" fill="#0B2933"/>
          <path d="M85.5549 25.4571C85.5308 25.4812 85.5016 25.4932 85.4672 25.4932H83.2437C83.2093 25.4932 83.1921 25.5104 83.1921 25.5448V27.4912C83.1921 27.5256 83.2093 27.5428 83.2437 27.5428H84.562C84.5964 27.5428 84.6256 27.5548 84.6497 27.5789C84.6738 27.603 84.6859 27.6323 84.6859 27.6667V28.46C84.6859 28.4945 84.6738 28.5237 84.6497 28.5478C84.6256 28.5719 84.5964 28.584 84.562 28.584H83.2437C83.2093 28.584 83.1921 28.6012 83.1921 28.6356V30.5922C83.1921 30.6267 83.2093 30.6439 83.2437 30.6439H85.4672C85.5016 30.6439 85.5308 30.6559 85.5549 30.68C85.579 30.7041 85.5911 30.7334 85.5911 30.7678V31.5508C85.5911 31.5852 85.579 31.6145 85.5549 31.6386C85.5308 31.6626 85.5016 31.6747 85.4672 31.6747H82.12C82.0856 31.6747 82.0563 31.6626 82.0322 31.6386C82.0081 31.6145 81.9961 31.5852 81.9961 31.5508V24.5897C81.9961 24.5553 82.0081 24.5261 82.0322 24.502C82.0563 24.4779 82.0856 24.4658 82.12 24.4658H85.4672C85.5016 24.4658 85.5308 24.4779 85.5549 24.502C85.579 24.5261 85.5911 24.5553 85.5911 24.5897V25.3727C85.5911 25.4037 85.579 25.433 85.5549 25.4571Z" fill="#0B2933"/>
          <path d="M90.4032 31.239C90.0521 30.8966 89.8783 30.4457 89.8783 29.8898V29.6214C89.8783 29.5869 89.8904 29.5577 89.9144 29.5336C89.9385 29.5095 89.9678 29.4975 90.0022 29.4975H90.9401C90.9745 29.4975 91.0038 29.5095 91.0279 29.5336C91.052 29.5577 91.064 29.5869 91.064 29.6214V29.8279C91.064 30.0963 91.1311 30.3115 91.2654 30.4767C91.3996 30.6419 91.5734 30.7245 91.7851 30.7245C91.9985 30.7245 92.1723 30.647 92.31 30.4921C92.4476 30.3373 92.5165 30.1342 92.5165 29.8795C92.5165 29.7005 92.4786 29.5474 92.4029 29.4166C92.3272 29.2858 92.2205 29.1619 92.0845 29.0466C91.9468 28.9296 91.7283 28.7609 91.4254 28.5424C91.0812 28.2945 90.8059 28.076 90.5959 27.8833C90.386 27.6905 90.2122 27.4599 90.0711 27.188C89.9299 26.9161 89.8594 26.6029 89.8594 26.2467C89.8594 25.6771 90.0315 25.2245 90.3739 24.8872C90.7164 24.5516 91.1707 24.3829 91.7334 24.3829C92.3031 24.3829 92.7625 24.5602 93.1136 24.913C93.463 25.2675 93.6385 25.7356 93.6385 26.319V26.5668C93.6385 26.6012 93.6264 26.6304 93.6023 26.6545C93.5782 26.6786 93.549 26.6907 93.5146 26.6907H92.587C92.5526 26.6907 92.5233 26.6786 92.4992 26.6545C92.4752 26.6304 92.4631 26.6012 92.4631 26.5668V26.2983C92.4631 26.0298 92.396 25.8164 92.2618 25.6547C92.1275 25.4929 91.9503 25.412 91.7317 25.412C91.5252 25.412 91.3583 25.486 91.2275 25.634C91.0967 25.782 91.0313 25.9851 91.0313 26.2467C91.0313 26.4945 91.1019 26.7027 91.243 26.8748C91.3841 27.0469 91.6594 27.2827 92.0725 27.5855C92.4906 27.8936 92.8073 28.1466 93.019 28.3427C93.2324 28.5389 93.3958 28.7523 93.5129 28.9864C93.6299 29.2204 93.6884 29.4975 93.6884 29.821C93.6884 30.4044 93.5129 30.8725 93.1635 31.227C92.8124 31.5815 92.353 31.757 91.7834 31.757C91.212 31.7536 90.7525 31.5832 90.4032 31.239Z" fill="#0B2933"/>
          <path d="M101.847 24.5002C101.872 24.5243 101.884 24.5536 101.884 24.588V25.371C101.884 25.4054 101.872 25.4347 101.847 25.4588C101.823 25.4829 101.794 25.4949 101.76 25.4949H100.452C100.417 25.4949 100.4 25.5121 100.4 25.5466V31.5508C100.4 31.5852 100.388 31.6145 100.364 31.6386C100.34 31.6627 100.311 31.6747 100.276 31.6747H99.328C99.2936 31.6747 99.2643 31.6627 99.2402 31.6386C99.2162 31.6145 99.2041 31.5852 99.2041 31.5508V25.5466C99.2041 25.5121 99.1869 25.4949 99.1525 25.4949H97.9169C97.8825 25.4949 97.8532 25.4829 97.8291 25.4588C97.805 25.4347 97.793 25.4054 97.793 25.371V24.588C97.793 24.5536 97.805 24.5243 97.8291 24.5002C97.8532 24.4762 97.8825 24.4641 97.9169 24.4641H101.758C101.794 24.4641 101.823 24.4762 101.847 24.5002Z" fill="#0B2933"/>
          <path d="M115.769 24.5002C115.793 24.5243 115.805 24.5536 115.805 24.588V25.371C115.805 25.4054 115.793 25.4347 115.769 25.4588C115.745 25.4829 115.716 25.4949 115.682 25.4949H114.374C114.339 25.4949 114.322 25.5121 114.322 25.5466V31.5508C114.322 31.5852 114.31 31.6145 114.286 31.6386C114.262 31.6627 114.233 31.6747 114.198 31.6747H113.25C113.215 31.6747 113.186 31.6627 113.162 31.6386C113.138 31.6145 113.126 31.5852 113.126 31.5508V25.5466C113.126 25.5121 113.109 25.4949 113.074 25.4949H111.839C111.804 25.4949 111.775 25.4829 111.751 25.4588C111.727 25.4347 111.715 25.4054 111.715 25.371V24.588C111.715 24.5536 111.727 24.5243 111.751 24.5002C111.775 24.4762 111.804 24.4641 111.839 24.4641H115.68C115.718 24.4641 115.745 24.4762 115.769 24.5002Z" fill="#0B2933"/>
          <path d="M120.415 31.2185C120.056 30.8623 119.875 30.3873 119.875 29.797V26.3363C119.875 25.746 120.056 25.2728 120.415 24.9148C120.775 24.5586 121.252 24.3796 121.842 24.3796C122.432 24.3796 122.909 24.5586 123.274 24.9148C123.637 25.2711 123.819 25.746 123.819 26.3363V29.797C123.819 30.3873 123.637 30.8606 123.274 31.2185C122.909 31.5747 122.432 31.7537 121.842 31.7537C121.252 31.7537 120.777 31.5765 120.415 31.2185ZM122.408 30.482C122.553 30.3202 122.625 30.1103 122.625 29.8487V26.2847C122.625 26.0231 122.553 25.8132 122.408 25.6514C122.264 25.4896 122.074 25.4087 121.842 25.4087C121.608 25.4087 121.422 25.4896 121.281 25.6514C121.14 25.8132 121.069 26.0248 121.069 26.2847V29.8487C121.069 30.1103 121.14 30.3202 121.281 30.482C121.422 30.6437 121.608 30.7246 121.842 30.7246C122.076 30.7246 122.264 30.6437 122.408 30.482Z" fill="#0B2933"/>
          <path d="M128.901 31.1827C128.547 30.8023 128.371 30.2981 128.371 29.6734V24.5864C128.371 24.552 128.383 24.5227 128.407 24.4987C128.431 24.4746 128.461 24.4625 128.495 24.4625H129.443C129.478 24.4625 129.507 24.4746 129.531 24.4987C129.555 24.5227 129.567 24.552 129.567 24.5864V29.7973C129.567 30.0727 129.636 30.2947 129.774 30.4668C129.911 30.6388 130.092 30.7249 130.319 30.7249C130.546 30.7249 130.727 30.6388 130.865 30.4668C131.002 30.2947 131.071 30.0727 131.071 29.7973V24.5864C131.071 24.552 131.083 24.5227 131.107 24.4987C131.131 24.4746 131.161 24.4625 131.195 24.4625H132.142C132.176 24.4625 132.205 24.4746 132.229 24.4987C132.253 24.5227 132.265 24.552 132.265 24.5864V29.6734C132.265 30.2981 132.087 30.8006 131.73 31.1827C131.374 31.5647 130.903 31.754 130.319 31.754C129.727 31.754 129.256 31.5647 128.901 31.1827Z" fill="#0B2933"/>
          <path d="M139.656 31.5697L138.78 28.6149C138.767 28.5874 138.749 28.5736 138.729 28.5736H138.183C138.149 28.5736 138.132 28.5908 138.132 28.6253V31.5491C138.132 31.5835 138.12 31.6127 138.095 31.6368C138.071 31.6609 138.042 31.673 138.008 31.673H137.059C137.025 31.673 136.996 31.6609 136.972 31.6368C136.948 31.6127 136.936 31.5835 136.936 31.5491V24.588C136.936 24.5536 136.948 24.5243 136.972 24.5002C136.996 24.4762 137.025 24.4641 137.059 24.4641H138.995C139.359 24.4641 139.68 24.5519 139.959 24.7274C140.238 24.9029 140.453 25.149 140.608 25.4691C140.763 25.7892 140.84 26.154 140.84 26.5653C140.84 26.9904 140.758 27.3587 140.592 27.6667C140.427 27.9748 140.198 28.2088 139.902 28.3671C139.875 28.374 139.865 28.3947 139.871 28.4291L140.88 31.5284C140.887 31.5422 140.89 31.5594 140.89 31.58C140.89 31.642 140.852 31.673 140.777 31.673H139.789C139.72 31.673 139.677 31.6386 139.656 31.5697ZM138.132 25.5448V27.5944C138.132 27.6289 138.149 27.6461 138.183 27.6461H138.811C139.059 27.6461 139.259 27.5497 139.414 27.3587C139.569 27.1676 139.646 26.9061 139.646 26.5757C139.646 26.247 139.569 25.9837 139.414 25.7875C139.259 25.5913 139.059 25.4932 138.811 25.4932H138.183C138.149 25.4932 138.132 25.5104 138.132 25.5448Z" fill="#0B2933"/>
          <path d="M151.36 31.2444C151.007 30.9054 150.83 30.4528 150.83 29.8901V26.2452C150.83 25.6825 151.007 25.2316 151.36 24.8909C151.713 24.5501 152.183 24.3815 152.766 24.3815C153.349 24.3815 153.821 24.5518 154.182 24.8909C154.542 25.2299 154.723 25.6859 154.723 26.2555V26.6565C154.723 26.6909 154.711 26.7202 154.687 26.7443C154.663 26.7684 154.633 26.7804 154.599 26.7804H153.652C153.618 26.7804 153.589 26.7684 153.565 26.7443C153.54 26.7202 153.528 26.6909 153.528 26.6565V26.2349C153.528 25.9871 153.458 25.7892 153.317 25.6377C153.176 25.4863 152.993 25.4106 152.766 25.4106C152.539 25.4106 152.358 25.4863 152.221 25.6377C152.083 25.7892 152.014 25.9888 152.014 26.2349V29.9004C152.014 30.1482 152.083 30.3461 152.221 30.4976C152.358 30.649 152.541 30.7247 152.766 30.7247C152.992 30.7247 153.176 30.649 153.317 30.4976C153.458 30.3461 153.528 30.1482 153.528 29.9004V28.9126C153.528 28.8782 153.511 28.861 153.477 28.861H152.849C152.814 28.861 152.785 28.8489 152.761 28.8248C152.737 28.8008 152.725 28.7715 152.725 28.7371V27.985C152.725 27.9506 152.737 27.9214 152.761 27.8973C152.785 27.8732 152.814 27.8611 152.849 27.8611H154.599C154.633 27.8611 154.663 27.8732 154.687 27.8973C154.711 27.9214 154.723 27.9506 154.723 27.985V29.8901C154.723 30.4528 154.542 30.9037 154.182 31.2444C153.823 31.5835 153.349 31.7538 152.766 31.7538C152.183 31.7538 151.715 31.5852 151.36 31.2444Z" fill="#0B2933"/>
          <path d="M159.803 31.1827C159.449 30.8023 159.273 30.2981 159.273 29.6734V24.5864C159.273 24.552 159.285 24.5227 159.31 24.4987C159.334 24.4746 159.363 24.4625 159.397 24.4625H160.346C160.38 24.4625 160.409 24.4746 160.433 24.4987C160.457 24.5227 160.469 24.552 160.469 24.5864V29.7973C160.469 30.0727 160.538 30.2947 160.676 30.4668C160.814 30.6388 160.994 30.7249 161.221 30.7249C161.449 30.7249 161.629 30.6388 161.767 30.4668C161.905 30.2947 161.974 30.0727 161.974 29.7973V24.5864C161.974 24.552 161.986 24.5227 162.01 24.4987C162.034 24.4746 162.063 24.4625 162.097 24.4625H163.044C163.078 24.4625 163.108 24.4746 163.132 24.4987C163.156 24.5227 163.168 24.552 163.168 24.5864V29.6734C163.168 30.2981 162.989 30.8006 162.633 31.1827C162.276 31.5647 161.805 31.754 161.221 31.754C160.63 31.754 160.158 31.5647 159.803 31.1827Z" fill="#0B2933"/>
          <path d="M167.88 31.6368C167.856 31.6127 167.844 31.5835 167.844 31.5491V24.588C167.844 24.5536 167.856 24.5243 167.88 24.5002C167.904 24.4762 167.933 24.4641 167.968 24.4641H168.916C168.95 24.4641 168.98 24.4762 169.004 24.5002C169.028 24.5243 169.04 24.5536 169.04 24.588V31.5491C169.04 31.5835 169.028 31.6127 169.004 31.6368C168.98 31.6609 168.95 31.673 168.916 31.673H167.968C167.933 31.673 167.904 31.6609 167.88 31.6368Z" fill="#0B2933"/>
          <path d="M173.79 31.6368C173.766 31.6127 173.754 31.5835 173.754 31.5491V24.588C173.754 24.5536 173.766 24.5243 173.79 24.5002C173.814 24.4762 173.843 24.4641 173.878 24.4641H175.638C176.229 24.4641 176.7 24.6431 177.055 24.9993C177.407 25.3573 177.585 25.8339 177.585 26.4311V29.706C177.585 30.3031 177.407 30.7798 177.055 31.1378C176.702 31.4957 176.229 31.673 175.638 31.673H173.878C173.843 31.673 173.814 31.6609 173.79 31.6368ZM175 30.6421L175.618 30.6318C175.845 30.6318 176.027 30.5406 176.168 30.3582C176.309 30.1758 176.383 29.9349 176.39 29.632V26.5034C176.39 26.1953 176.32 25.9492 176.179 25.7668C176.038 25.5844 175.847 25.4932 175.607 25.4932H175C174.965 25.4932 174.948 25.5104 174.948 25.5448V30.5905C174.948 30.6249 174.965 30.6421 175 30.6421Z" fill="#0B2933"/>
          <path d="M185.735 25.4571C185.711 25.4812 185.681 25.4932 185.647 25.4932H183.423C183.389 25.4932 183.372 25.5104 183.372 25.5448V27.4912C183.372 27.5256 183.389 27.5428 183.423 27.5428H184.742C184.776 27.5428 184.805 27.5548 184.829 27.5789C184.853 27.603 184.866 27.6323 184.866 27.6667V28.46C184.866 28.4945 184.853 28.5237 184.829 28.5478C184.805 28.5719 184.776 28.584 184.742 28.584H183.423C183.389 28.584 183.372 28.6012 183.372 28.6356V30.5922C183.372 30.6267 183.389 30.6439 183.423 30.6439H185.647C185.681 30.6439 185.711 30.6559 185.735 30.68C185.759 30.7041 185.771 30.7334 185.771 30.7678V31.5508C185.771 31.5852 185.759 31.6145 185.735 31.6386C185.711 31.6626 185.681 31.6747 185.647 31.6747H182.3C182.265 31.6747 182.236 31.6626 182.212 31.6386C182.188 31.6145 182.176 31.5852 182.176 31.5508V24.5897C182.176 24.5553 182.188 24.5261 182.212 24.502C182.236 24.4779 182.265 24.4658 182.3 24.4658H185.647C185.681 24.4658 185.711 24.4779 185.735 24.502C185.759 24.5261 185.771 24.5553 185.771 24.5897V25.3727C185.771 25.4037 185.759 25.433 185.735 25.4571Z" fill="#0B2933"/>
          <path d="M35.9902 31.6734H35.1779C35.0833 31.6734 35.0059 31.596 35.0059 31.5013V4.05466C35.0059 3.96001 35.0833 3.88257 35.1779 3.88257H35.9902C36.0849 3.88257 36.1623 3.96001 36.1623 4.05466V31.4996C36.1623 31.596 36.0866 31.6734 35.9902 31.6734Z" fill="#0B2933"/>
        </svg>
      </Dropdown.Header>

        <Dropdown.Item className='contenedor-item-burguer'>
                  <Link to="/" className="dropdown-item-burguer">
                    Home
                  </Link>
        </Dropdown.Item>
        <Dropdown.Item className='contenedor-item-burguer'>
                  <Link to="/experiencia-maradona" className="dropdown-item-burguer">
                    Experiencia Maradona
                  </Link>
        </Dropdown.Item>
        <Dropdown.Item className='contenedor-item-burguer'>
                  <Link to="/experiencia-boca-river" className="dropdown-item-burguer">
                    Experiencia River - Boca
                  </Link>
        </Dropdown.Item>
        <Dropdown.Item className='contenedor-item-burguer'>
                  <Link to="/contact" className="dropdown-item-burguer">
                    Contacto
                  </Link>
        </Dropdown.Item>
        <Dropdown.Item className='contenedor-item-burguer'>
                  <Link to="/nosotros" className="dropdown-item-burguer">
                    Nosotros
                  </Link>
        </Dropdown.Item>
        <Dropdown.Item className='contenedor-item-burguer'>
                  <Link to="/" className="dropdown-item-burguer">
                    Reserva tu experiencia
                  </Link>
        </Dropdown.Item>
        <Dropdown.Item className='contenedor-item-burguer'>
                  <Link to="/" className="dropdown-item-burguer redes">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.714 6.25117C17.6003 6.25117 17.4912 6.20599 17.4108 6.12556C17.3303 6.04513 17.2852 5.93604 17.2852 5.8223C17.2852 5.70856 17.3303 5.59947 17.4108 5.51905C17.4912 5.43862 17.6003 5.39343 17.714 5.39343" stroke="#446168" strokeWidth="2.08478" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.7148 6.25117C17.8286 6.25117 17.9377 6.20599 18.0181 6.12556C18.0985 6.04513 18.1437 5.93604 18.1437 5.8223C18.1437 5.70856 18.0985 5.59947 18.0181 5.51905C17.9377 5.43862 17.8286 5.39343 17.7148 5.39343" stroke="#446168" strokeWidth="2.08478" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.47046 5.88584C1.47046 4.7152 1.93518 3.5925 2.76237 2.76473C3.58957 1.93696 4.71149 1.47192 5.88132 1.47192H17.6448C18.224 1.47192 18.7976 1.58609 19.3327 1.80791C19.8679 2.02973 20.3541 2.35486 20.7637 2.76473C21.1733 3.1746 21.4982 3.66119 21.7199 4.19671C21.9415 4.73223 22.0556 5.3062 22.0556 5.88584V17.6574C22.0556 18.8281 21.5909 19.9508 20.7637 20.7786C19.9365 21.6063 18.8146 22.0714 17.6448 22.0714H5.87961C4.70978 22.0714 3.58786 21.6063 2.76066 20.7786C1.93346 19.9508 1.46875 18.8281 1.46875 17.6574V5.88413L1.47046 5.88584Z" stroke="#446168" strokeWidth="2.08478" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.39258 11.7717C7.39258 12.3461 7.50565 12.915 7.72533 13.4457C7.94502 13.9765 8.26702 14.4587 8.67294 14.8649C9.07886 15.2711 9.56077 15.5933 10.0911 15.8132C10.6215 16.033 11.1899 16.1461 11.764 16.1461C12.3381 16.1461 12.9065 16.033 13.4369 15.8132C13.9672 15.5933 14.4491 15.2711 14.8551 14.8649C15.261 14.4587 15.583 13.9765 15.8027 13.4457C16.0224 12.915 16.1354 12.3461 16.1354 11.7717C16.1354 10.6115 15.6749 9.49884 14.8551 8.67847C14.0353 7.8581 12.9234 7.39722 11.764 7.39722C10.6046 7.39722 9.49274 7.8581 8.67294 8.67847C7.85314 9.49884 7.39258 10.6115 7.39258 11.7717Z" stroke="#446168" strokeWidth="2.08478" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        <p>Conocenos</p>
                  </Link>
        </Dropdown.Item>
        <DropdownItem className='contenedor-item-burguer'>
        <div className="idiomas">
        <button className="btn-idioma burguer" onClick={() => changeLang("castellano")}>
          ESPAÑOL
        </button>
      </div>
        </DropdownItem>
        <DropdownItem className='contenedor-item-burguer'>
        <div className="idiomas">
        <button className="btn-idioma burguer" onClick={() => changeLang("english")}>
          ENGLISH
        </button>
      </div>
        </DropdownItem>

        </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavDesplegable;