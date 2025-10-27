/* =========================================================
   MENÚ MÓVIL (para pantallas pequeñas)
========================================================= */
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const links = navLinks.querySelectorAll("a");

  // Mostrar u ocultar el menú
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Cerrar el menú al hacer clic en cualquier enlace
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});




/* =========================================================
   NAVBAR - Mostrar al hacer scroll o al pasar el cursor
========================================================= */
const navbar = document.querySelector('.navbar');

// Mostrar el navbar al hacer scroll hacia abajo
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});

// Mostrar el navbar al acercar el cursor a la parte superior
document.addEventListener('mousemove', (e) => {
  // Si el cursor está en la parte superior (menos de 100px del borde)
  if (e.clientY < 100) {
    navbar.classList.add('visible');
  }
});

/* =========================================================
   EFECTO DE DESVANECER / ANIMAR ELEMENTOS AL HACER SCROLL
========================================================= */
const memoriaItems = document.querySelectorAll('.memoria-item');

window.addEventListener('scroll', () => {
  memoriaItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemTop < windowHeight - 100) {
      item.classList.add('visible');
    }
  });
});

/* =========================================================
   CARRUSEL AUTOMÁTICO DE IMÁGENES DE PORTADA
========================================================= */
let slides = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

// Cambiar imagen cada 5 segundos
setInterval(showNextSlide, 5000);

/* =========================================================
   MAPA DE GOOGLE
========================================================= */
function initMap() {
  const ubicacion = { lat: -27.4608, lng: -58.9839 }; // Corrientes, Argentina
  const mapa = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: ubicacion,
  });

  new google.maps.Marker({
    position: ubicacion,
    map: mapa,
    title: 'Espacio de Memoria RI9',
  });
}

// Hacer visible el mapa cuando exista el elemento en el DOM
if (document.getElementById('map')) {
  window.initMap = initMap;
}

/* ==== BUSCADOR DE HISTORIAS ==== */
const buscador = document.getElementById('buscador');
const cards = document.querySelectorAll('.historia-card');

buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  cards.forEach(card => {
    const nombre = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = nombre.includes(texto) ? 'block' : 'none';
  });
});

/* ==== MODAL DE HISTORIAS ==== */
const historias = {
  acosta: "Héctor Eduardo Acosta, conocido como 'Pata', fue secuestrado en Paso de los Libres el 22 de marzo de 1976. Tenía 20 años. Su caso es uno de los más recordados en Corrientes por su compromiso con la militancia social.",
  achar: "Carlos Achar (fallecido durante la democracia), su testimonio fue clave para el enjuiciamiento de los ex militares acusados de delitos de lesa humanidad en nuestra Provincia.",
  aguirre: "Juan Carlos Aguirre, conocido como Tito o “Yacaré”. Fue el mayor de 3 hermanos. Correntino de Goya, nacido el 10 de noviembre de 1944. Militares y policías allanaron su vivienda en la calle Piedras N° 710, el 12 de julio de 1976. Se resistió a balazos hasta su muerte. Tenía 31 años.",
  aponte: "Duilio Aponte Fue detenido en noviembre de 1974 hasta el año 1982, el que más tiempo de detención acumuló. Falleció en la democracia.",
  alvarez:"César Héctor Alvarez, conocido como ¨Titi¨. Tenia 31 años. Correntino. Secuestrado-desaparecido el 17 de marzo de 1977 en Capital Federal.",
  areta: "Ignacio Areta, conocido como ¨Iñaki¨. Oriundo de Monte Caseros, Corrientes, Secuestrado-desaparecido el 29 de junio de 1978.",
  arce:"Abel Arce Gómez. Nacido en la Nochebuena de 1954. Agricultor. Delegado de las Ligas Agrarias Correntinas. Desapareció en mayo de 1977 mientras era conscripto.",
  areta_joaquin:"Joaquín Enrique Areta, “La Rubia” y/o “El Correntino” sabían decirle. Oriundo de la ciudad de Monte Caseros, Corrientes donde nació un 15 de agosto de 1955. Desapareció en Buenos Aires en junio de 1978. Saltó a la notoriedad cuando Néstor Kirchner leyó su poesía ¨Quisiera que me recuerden¨.",
  arqueros:"Joaquín Vicente Arqueros, conocido como “Bocha” o “Juampa”. Nació el 8 de septiembre de 1948. Desapareció el 17 de noviembre de 1976",
  artieda:"Rómulo Gregorio Artieda. Nacido en Bella Vista, Corrientes, el 13 de agosto de 1954. Desaparecido el 14 de mayo de 1977. Sus restos permanecieron en un cementerio de Empedrado durante 30 años hasta que fueron indentificados en octubre de 2008.",
  arrue:"Horacio Antonio Arrue, conocido como “Chueco”. Hijo de un legislador justicialista. Licenciado en Economía. 31 años. Desapareció en Tucumán en septiembre de 1976 y murió en Campo de Mayo por las torturas que sufrió.",
  ayala:"Vicente Víctor Ayala, conocido como “Cacho”. era Abogado. Nacido en Corrientes, el 1 de marzo de 1946. Fue detenido por la Policía en la esquina de Moreno y La Rioja el 16 de febrero de 1976 junto con otros 3 compañeros.",
  barozzi:"Julio César Barozzi, conocido como ¨Cacho¨. Nació en Curuzú Cuatiá, provincia de Corrientes el 11 de abril de 1954 y lo vieron por última vez cuando fue detenido por la Policía en la esquina de Moreno y La Rioja el 16 de febrero de 1976 junto con otros 3 compañeros",
  benitez:"Adrián Benitez Sosa. Oriundo de Corrientes, Capital, seminarista, desaparece en Buenos Aires.",
  belsky:"Moisés Belsky. Oriundo de Monte Caseros, fue uno de los que encabezo en el año 1966 el denominado Correntinazo.",
  belaustegui:"Juan Francisco Beláustegui: ”Pablo”. Nacido el 5 de abril de 1936, santafecino, cae combatiendo en la esquina de las calles Teniente Ibáñez y Córdoba de esta Capital el 8 de octubre de 1975.",
  velasquez:"Mirta Beatriz Blanco de Velásquez. Estudiante de Derecho. Militante de JUP y Montoneros. Secuestrada-desaparecida junto a su marido en 1975.",
  bustos:"Miguel Ángel Bustos, Cordobés, murió acribillado en Corrientes Capital, el 8 de octubre de 1975 a la edad de 29 años.",
  bogado:"Listo Ramón Bogado. Desaparecido el 1 de mayo de 1982 , tenía 22 años secuestrado en Corrientes",
  buffa:"Arnaldo Haroldo Buffa. 43 años de Luján (Buenos Aires). Militaba en el Partido Socialista de los Trabajadores, desapareció junto con su esposa en Paso de los Libres, cuando intentaba salir del país.",
  castañeda:"Jorge Aníbal Castañeda. de Mercedes. Solamente se tiene el dato de una carta a la madre desde Rosario. Vivía en Zárate, Bs. As. Octubre 1975 allanan la casa familiar en Mercedes y lo llevan detenido.",
  coutada:"Norma Coutada. Oriunda de Santo Tome, fue detenida en Rosario, eñ 16 de septiembre de 1977, y aún se encuentra desaparecida. Norma o “lluvia”, bautizada así por sus compañeros por su manera de pronunciar la “elle”, era estudiante de Arquitectura y era militante de la Juventud Peronista.",
  coutada_myriam:"Myriam Coutada. Oriunda de Santo Tome, hermana de Norma, tenía 24 años cuando desapareció el 16 de octubre de 1976 en Zárate, Buenos Aires, estudiaba en la UNR, donde militaba en la JUP. Su familia sigue buscando a su hijo.",
  diaz:"Luis Alberto Díaz, conocido como Lucho. Nacido Corrientes, en la ciudad de Mercedes, el 15 de enero de 1951. Desapareció en Sáenz Peña, Chaco.",
  duarte:"Carlos Alberto Duarte, conocido como “El Carau”. Militaba en la JUP y le faltaban pocas materias para ser contador. Detenido a fines de 1975 y asesinado a los 24 años durante la masacre de Margarita Belén.",
  ferraz:"Manuel Ferraz. Oriundo de Santo Tome.",
  fernandez:"Eduardo Fernández, conocido como “Lalo” o “Gallego”. Nacido el 27 de diciembre de 1954 en Córdoba, creció y se educó en Goya, Corrientes. Lo dan como secuestrado y desaparecido el 5 de agosto de 1976, presuntamente murió en la masacre de Margarita Belén.",
  gauna:"Víctor Hugo Gauna. Lugar de origen Corrientes, Capital, legajo de la Conadep 942. Desapareció en 1975.",
  galeano:"Pedro Raúl Galeano: Le decían “Corrientes” y “El Correntino”. Militante de Juventud Universitaria Peronista (JUP) y Montoneros. Estudiante en la Facultad de Ciencias Económicas de la Universidad Nacional de Rosario. Desapareció en julio de 1976. A los 21 años, fue severamente torturado",
  figueredo:"Raúl Antonio Figueredo: “Cacho”. “Ginebrol”. “Pedro”. Nacido el 9 de noviembre de 1942 en Alvear (Corrientes). Secuestrado-desaparecido el 30 de septiembre de 1977 en Alvear.",
  gonzalez:"Alfredo González: “Profe”. “Gonzalito”. Nacido en Bella Vista, Corrientes. Secuestrado a la edad de 39 años, el 4 de marzo de 1978 en calle Sarmiento 213, Posadas, Misiones.",
  gonzalez_argentino: "González, Argentino V: (Chaqueño), Secuestrado-desaparecido el 1° de enero de 1980. Estaba haciendo el servicio militar obligatorio en el Regimiento de Infantería Nº 5 (RI5) con cuartel en Paso de los Libres, Corrientes.",
  gonzalez_delicia: "González, Delicia: Nació en Paraje Cafarreño, departamento Lavalle, Goya, Corrientes, el 22 de septiembre de 1939, asesinada en la “Masacre de Margarita Belén”, Chaco, el 13 de diciembre de ese mismo año, a los 37 años de edad.",
  gonzalez_elpidio: "González, Elpidio: Nació en Loreto, provincia de Corrientes. Maestro rural. Cae en combate –con 28 años– el 13 de noviembre de 1979, estuvo exiliado pero volvió al país.",
  goyeneche: "Goyeneche de Sobko, Elida: Oriunda de Goya, secuestrada el 12 de enero de 1978 en el Club de Pesca de Goya “Doña Goya”, en presencia de sus hijos. Era docente y estudiante de medicina.",
  gervasoni: "Gervasoni, Julio “Cuervo”: Oriundo de Itatí, nace el 22 de mayo de 1941 y es detenido en Santo Tomé el año 1975, cuando ejercía su profesión (abogado). Estuvo preso hasta 1982, pasando por varios centros de detención. Falleció en agosto de 1982.",
  ibarguren: "Ibarguren, Justo César: Secuestrado el 24 de agosto de 1976 por fuerzas conjuntas de Ejército, Policía y Prefectura, en la localidad de Monte Caseros. Fue visto con vida por última vez en el campo de concentración denominado “Vesubio”.",
  lomonaco: "Lomonaco, Víctor Hugo: Oriundo de la localidad de Santa Lucía, desapareció el 8 de octubre en la Ciudad de La Plata, Provincia de Buenos Aires. Era estudiante de Arquitectura en la Universidad de La Plata.",
  martinelli_pablo: "Martinelli, Pablo Alberto: Oriundo de Paso de los Libres y estudiante de Veterinaria en la UNNE. Cayó en un enfrentamiento con fuerzas represivas en Resistencia, Chaco, en 1976.",
  marcon: "Marcón, Carlos Rubén: Nació en Corrientes, en junio de 1980. A los 27 años desapareció en Paso de los Libres mientras intentaba salir del país.",
  martinelli_susana: "Martinelli, Susana de Oliva: Nació el 21 de enero de 1953 en Ramos Mejía. Estudió en el Instituto del Niño Jesús de Paso de los Libres. Desapareció junto a su esposo en agosto de 1976 y fue hallada muerta, con su cuerpo mutilado.",
  mendez: "Méndez, Raúl: Nació en Santa Lucía, Corrientes, el 12 de mayo de 1951. En diciembre de 1976 su familia recibió un llamado anónimo informando que Raúl había sido asesinado en la Masacre de Margarita Belén.",
  meza_marengo: "Meza Marengo, Carlos Alberto “Ramón”: Nacido en Corrientes el 5 de agosto de 1952. Fue asesinado en Plaza Once, Buenos Aires, en febrero de 1977. Sus restos fueron recuperados recién en el año 2000.",
  moresi: "Moresi, Pedro Francisco: Detenido en Corrientes en diciembre de 1977 junto con su esposa, trasladado a la Comisaría de Bella Vista, Buenos Aires, donde fue visto por familiares antes de su desaparición.",
  monzon: "Monzón, Roque: Oriundo de Goya, trabajaba en Corrientes Capital y vivía en una pensión. Fue secuestrado-desaparecido el 1º de enero de 1977, a los 30 años.",
  ojeda: "Ojeda, Rodolfo Amado (Poloncho): Dirigente correntino democristiano detenido durante la dictadura. Profesor en la Facultad de Derecho de la UNNE y abogado de varios compañeros de la JUP, por lo cual fue detenido. Murió de cáncer en los años 80.",
  oliva: "Oliva, Carlos Alberto (Calú): Nacido en Paso de los Libres, Corrientes, el 4 de febrero de 1951. Fue fusilado en Bahía Blanca en diciembre de 1976 junto a su esposa, en un centro clandestino de detención.",
  olivos: "Olivos, Juan Antonio “Tonito”: Campesino peronista y militante de las Ligas Agrarias de Corrientes, vinculado a la Teología de la Liberación. Secuestrado-desaparecido en Perugorría en marzo de 1977, tenía 29 años.",
  pelozo: "Pelozo, Justo José: Nacido el 28 de mayo de 1942 en Tabay, Corrientes. Secuestrado-desaparecido el 15 de febrero de 1977 en Mercedes.",
  peralta: "Peralta, Marcelo: 27 años. Tarefero. Secuestrado-desaparecido el 29 de junio de 1977 en un yerbatal de Gobernador Virasoro, Santo Tomé, Corrientes.",
  perez: "Pérez, Neris Victoriano: 38 años. Tractorista y secretario adjunto de la FATRE. Secuestrado-desaparecido el 2 de junio de 1976 en Gobernador Virasoro, Santo Tomé.",
  perez_rueda: "Pérez Rueda, Carlos (Charli): Correntino, nacido el 24 de enero de 1950. Cayó combatiendo en San Ignacio, Misiones, en un operativo en el que habría participado Aldo Rico.",
  puntin: "Puntín, Héctor Rolando: Oriundo de Perugorría, tractorista. Visto por última vez en las afueras de Posadas en 1976 y luego reconocido en un centro de detención.",
  razo: "Razo, Osvaldo José: Oriundo de Curuzú Cuatiá. Odontólogo, secuestrado, torturado y liberado. Falleció ya recuperada la democracia.",
  ramis: "Ramis, Manuel: Nacido el 1 de enero de 1951 en Santo Tomé, Corrientes.",
  reguera_yolanda: "Reguera Brítez, Yolanda Dolores: Documento Nº 10.568.405. Se “suicidó” en Punta San Sebastián el 4 de junio de 1976. Militante de la Juventud Peronista de Corrientes.",
  rodriguez: "Rodríguez, Griselda (también María Nilda): Oriunda de Monte Caseros.",
  romero: "Romero, Orlando Diego (“Tucumano”): Detenido y desaparecido en febrero de 1976 junto a sus compañeros “Cacho” Ayala, “Cacho” Barozzi y Jorge Saravia Acuña.",
  romero_pantaleon: "Romero, Pantaleón: 46 años. Militante peronista en las Ligas Agrarias, ligado a la Teología de la Liberación. Secuestrado-desaparecido el 16 de marzo de 1977 en Perugorría, Curuzú Cuatiá.",
  schlatter: "Schlatter, Miguel Ángel: Nacido en Villa Ocampo, Santa Fe, el 17 de julio de 1950. Secuestrado-desaparecido a los 26 años, el 17 de enero de 1977 en Corrientes Capital.",
  soto_lila: "Soto, Lila (“Julia”, “Paula”): Nacida en Corrientes Capital el 9 de agosto de 1947. Murió acribillada embarazada de 8 meses el 10 de diciembre de 1976 en Rosario.",
  saravia: "Saravia Acuña, Jorge (“Mario”, “Chino”): Nacido en Buenos Aires en 1946. Secuestrado-desaparecido el 16 de febrero de 1976 en Corrientes, junto a Ayala, Barozzi y Romero.",
  tomasella: "Tomasella, Norma Blanca: Oriunda de Goya. Desaparecida en febrero de 1978 en Buenos Aires. Tenía contacto con las monjas francesas desaparecidas.",
  repetto: "Repetto, Julio Santiago: De Bella Vista. Médico traumatólogo, integrante de la Resistencia Peronista. Estuvo seis años preso durante la dictadura y fue presidente del Partido Peronista Auténtico.",
  vargas_dora: "Vargas, Dora Elena (“Josefina”): Nacida el 20 de mayo de 1953 en Saladas. Secuestrada-desaparecida en Buenos Aires el 12 de noviembre de 1977 mientras esperaba el colectivo para ir a trabajar. Estaba embarazada de tres meses.",
  vargas_juan: "Vargas, Juan Ramón (Mono): Nacido en Saladas el 6 de marzo de 1955. Secuestrado-desaparecido el 20 de noviembre de 1976 en Corrientes. Fue visto en el Regimiento de Infantería 9, esposado, tabicado y torturado.",
  vasquez: "Vázquez de Moresi, Nelly Noemí (“Tana”, “Gringa”): Nacida el 22 de octubre de 1949. Detenida junto a su esposo el 17 de diciembre de 1977. Desaparecida definitivamente el 29 de enero de 1978 en una comisaría de Bella Vista, Buenos Aires.",
  velazquez: "Velázquez, Alfredo Rubén (“Beto”, “Fredy”): Nacido en Corrientes Capital el 16 de mayo de 1950. Trabajador gráfico y aficionado al folclore. Murió en el asalto al Regimiento 29 de Infantería de Monte, Formosa, el 5 de octubre de 1975.",
  vergara: "Vergara de Buffa, Hilda Zulma: 37 años. Secuestrada entre junio y julio de 1976 en Paso de los Libres, Corrientes.",
  veron: "Verón, Ángel Roberto (“Chino Cejas”): Según El Litoral (octubre 1975), detenido acusado de participar en el copamiento al Regimiento de Formosa.",
  vinas: "Viñas, Lorenzo: Hijo del escritor David Viñas. Desaparecido el 26 de julio de 1980 al cruzar el puente internacional de Paso de los Libres, Corrientes.",
  wettengel: "Wettengel, Bauer Máximo (“el alemán”): Desaparecido en Corrientes Capital en junio de 1976. Estuvo detenido en el Regimiento 9. Le dijeron a su familia que fue liberado, pero nunca volvió a ser visto.",
  yedro: "Yedro, Roberto Horacio (“Cuervo”): Nacido en Chaco el 7 de mayo de 1949. Profesor de historia en el Colegio Pio XI de Corrientes, militante de Montoneros. Torturado y asesinado en la “Masacre de Margarita Belén”, Chaco, el 13 de diciembre de 1976."
};

const modal = document.getElementById('modal-historia');
const modalTitulo = document.getElementById('modal-titulo');
const modalTexto = document.getElementById('modal-texto');
const cerrarModal = document.querySelector('.cerrar-modal');

document.querySelectorAll('.btn-leer').forEach(boton => {
  boton.addEventListener('click', () => {
    const id = boton.dataset.id;
    modalTitulo.textContent = boton.parentElement.querySelector('h3').textContent;
    modalTexto.textContent = historias[id] || "Historia en construcción...";
    modal.style.display = 'flex';
  });
});

cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("historias-grid");
  const btnVerMas = document.getElementById("verMasBtn");

  const tarjetas = Array.from(contenedor.querySelectorAll(".historia-card"));
  const limiteInicial = 5;
  let mostrandoTodo = false;

  function actualizarVista() {
    tarjetas.forEach((card, index) => {
      card.style.display = (!mostrandoTodo && index >= limiteInicial) ? "none" : "block";
    });
    btnVerMas.textContent = mostrandoTodo ? "Ver menos" : "Ver más";
  }

  btnVerMas.addEventListener("click", function () {
    mostrandoTodo = !mostrandoTodo;
    actualizarVista();
  });

  actualizarVista();
});


