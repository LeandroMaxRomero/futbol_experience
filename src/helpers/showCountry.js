/* FUNCION PARA MOSTRAR MENSAJE DE BIENVENIDA DESDE SU PAIS */
export function showCountry(coords) {
  let pais;
  let key = "77894d358b535f22b04a3809825e5b62";

  /* A PARTIR DE .JSON CON ISO DE PAISES IMPRIMIR EL PAIS */
  function getCountryName(countryCode) {
    fetch("./paises.json")
      .then((res) => res.json())
      .then((data) => {
        if (countryCode !== "") {
          pais = data[countryCode];
          console.log(pais);
        }
      });
  }

  /* CAPTURA DEL ISO DEL PAIS PARA IMPRIMIR EN PANTALLA */

  if (coords) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        getCountryName(data.sys.country);
      });
  }

  return pais;
}
