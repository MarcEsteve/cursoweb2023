-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-06-2023 a las 15:56:00
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_consola`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `CÓDIGOCLIENTE` varchar(50) DEFAULT NULL,
  `EMPRESA` varchar(50) DEFAULT NULL,
  `DIRECCIÓN` varchar(50) DEFAULT NULL,
  `POBLACIÓN` varchar(50) DEFAULT NULL,
  `TELÉFONO` varchar(50) DEFAULT NULL,
  `RESPONSABLE` varchar(50) DEFAULT NULL,
  `HISTORIAL` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`CÓDIGOCLIENTE`, `EMPRESA`, `DIRECCIÓN`, `POBLACIÓN`, `TELÉFONO`, `RESPONSABLE`, `HISTORIAL`) VALUES
('CT01', 'BELTRÁN E HIJOS', 'LAS FUENTES 78', 'MADRID', '914456435', 'ANGEL MARTÍNEZ', ''),
('CT02', 'LA MODERNA', 'LA PALOMA 123', 'OVIEDO', '985323434', 'JUAN GARCÍA', ''),
('CT03', 'EL ESPAÑOLITO', 'MOTORES 34', 'BARCELONA', '934565343', 'ANA FERNÁNDEZ', ''),
('CT04', 'EXPORTASA', 'VALLECAS 34', 'MADRID', '913452378', 'ELVIRA GÓMEZ', ''),
('CT06', 'CONFECCIONES AMPARO', 'LOS MOROS 23', 'GIJÓN', '985754332', 'LUÍS ÁLVAREZ', ''),
('CT07', 'LA CASA DEL JUGUETE', 'AMÉRICA 45', 'MADRID', '912649987', 'ELÍAS PÉREZ', ''),
('CT08', 'JUGUETERÍA SUÁREZ', 'PARIS 123', 'BARCELONA', '933457866', 'JUAN GARCÍA', ''),
('CT09', 'ALMACÉN POPULAR', 'LAS FUENTES 124', 'BILBAO', '942347127', 'JOSÉ ÁLVAREZ', ''),
('CT10', 'FERETERÍA EL CLAVO', 'PASEO DE ÁLAMOS 78', 'MADRID', '914354866', 'MANUEL MENÉNDEZ', ''),
('CT11', 'JUGUETES MARTÍNEZ', 'VIA LAYETANA 245', 'BARCELONA', '936628554', 'FRANCISCO CUEVAS', ''),
('CT12', 'FERNÁNDEZ SL', 'PASEO DEL MAR 45', 'SANTANDER', '942049586', 'ELISA COLLADO', ''),
('CT13', 'CONFECCIONES ARTÍMEZ', 'GENERAL PERÓN 45', 'A CORUÑA', '981345239', 'ESTEBAN PASCUAL', ''),
('CT14', 'DEPORTES GARCÍA', 'GUZMÁN EL BUENO 45', 'MADRID', '913299475', 'ANA JIMÉNEZ', ''),
('CT15', 'EXCLUSIVAS FERNÁNDEZ', 'LLOBREGAT 250', 'BARCELONA', '939558365', 'LUISA FERNÁNDEZ', ''),
('CT16', 'DEPORTES MORÁN', 'AUTONOMÍA 45', 'LUGO', '982986944', 'JOSÉ MANZANO', ''),
('CT17', 'BAZAR FRANCISCO', 'CARMEN 45', 'ZAMORA', '980495288', 'CARLOS BELTRÁN', ''),
('CT18', 'JUGUETES LA SONRISA', 'LA BAÑEZA 67', 'LEÓN', '987945368', 'FAUSTINO PÉREZ', ''),
('CT19', 'CONFECCIONES GALÁN', 'FUENCARRAL 78', 'MADRID', '913859234', 'JUAN GARCÍA', ''),
('CT20', 'LA CURTIDORA', 'OLIVARES 3', 'MÁLAGA', '953756259', 'MARÍA GÓMEZ', ''),
('CT21', 'LÍNEA JOVEN', 'SIERPES 78', 'SEVILLA', '953452567', 'ASUNCIÓN SALADO', ''),
('CT22', 'BAZAR EL BARAT', 'DIAGONAL 56', 'BARCELONA', '936692866', 'ELISA DAPENA', ''),
('CT23', 'EL PALACIO DE LA MODA', 'ORTEGA Y GASSET 129', 'MADRID', '927785235', 'LAURA CARRASCO', ''),
('CT24', 'SÁEZ Y CÍA', 'INFANTA MERCEDS 23', 'SEVILLA', '954869234', 'MANUEL GUERRA', ''),
('CT25', 'DEPORTES EL MADRILEÑO', 'CASTILLA 345', 'ZARAGOZA', '976388934', 'CARLOS GONZÁLEZ', ''),
('CT26', 'FERRETERÍA LA ESCOBA', 'ORENSE 7', 'MADRID', '918459346', 'JOSÉ GARCÍA', ''),
('CT27', 'JUGUETES EL BARATO', 'VÍA AUGUSTA 245', 'BARCELONA', '933486984', 'ELVIRA IGLESIAS', ''),
('CT28', 'CONFECCIONES HERMINIA', 'CORRIDA 345', 'GIJÓN', '985597315', 'ABEL GONZÁLEZ', ''),
('CT30', 'BAZAR EL ARGENTINO', 'ATOCHA 55', 'MADRID', '912495973', 'ADRIÁN ÁLVAREZ', ''),
('CT31', 'LA TIENDA ELEGANTE', 'EL COMENDADOR 67', 'ZARAGOZA', '975694035', 'JOSÉ PASCUAL', ''),
('CT32', 'DEPORTES NAUTICOS GARCÍA', 'JUAN FERNÁNDEZ 89', 'ÁVILA', '920268648', 'JUAN CONRADO', ''),
('CT33', 'CONFECCIONES RUIZ', 'LLOBREGAT 345', 'BARCELONA', '934587615', 'CARLOS SANZ', ''),
('CT34', 'BAZAR LA FARAONA', 'CASTILLA Y LEÓN 34', 'MADRID', '915483627', 'ANGEL SANTAMARÍA', ''),
('CT35', 'FERRETERÍA EL MARTILLO', 'CASTELLANOS 205', 'SALAMANCA', '923548965', 'JOAQUÍN FERNANDEZ', ''),
('CT36', 'JUGUETES EDUCATIVOS SANZ', 'ORENSE 89', 'MADRID', '916872354', 'PEDRO IGLESIAS', ''),
('CT37', 'ALMACENES FERNANDEZ', 'ANTÓN 67', 'TERUEL', '978564025', 'MARIA ARDANZA', ''),
('CT38', 'CONFECCIONES MÓNICA', 'MOTORES 67', 'BARCELONA', '935681245', 'PEDRO SERRANO', ''),
('CT39', 'FERRETERÍA LIMA', 'VALLECAS 45', 'MADRID', '913532785', 'LUIS GARCÍA', ''),
('CT40', 'DEPORTES EL BRASILEÑO', 'ABEL MARTÍNEZ 67', 'SALAMANCA', '921548762', 'CARLOS GÓMEZ', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `CÓDIGOARTÍCULO` varchar(60) DEFAULT NULL,
  `SECCIÓN` varchar(60) DEFAULT NULL,
  `NOMBREARTÍCULO` varchar(60) DEFAULT NULL,
  `PRECIO` double DEFAULT NULL,
  `FECHA` varchar(60) DEFAULT NULL,
  `IMPORTADO` varchar(60) DEFAULT NULL,
  `PAÍSDEORIGEN` varchar(60) DEFAULT NULL,
  `FOTO` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`CÓDIGOARTÍCULO`, `SECCIÓN`, `NOMBREARTÍCULO`, `PRECIO`, `FECHA`, `IMPORTADO`, `PAÍSDEORIGEN`, `FOTO`) VALUES
('AR01', 'FERRETERÍA', 'DESTORNILLADOR', 6.628, '2000-10-22', 'FALSE', 'ESPAÑA', ''),
('AR02', 'CONFECCIÓN', 'TRAJE CABALLERO', 284.5769, '2002-03-11', 'TRUE', 'ITALIA', ''),
('AR03', 'JUGUETERÍA', 'COCHE TELEDIRIGIDO', 159.4462, '2002-05-26', 'TRUE', 'MARRUECOS', ''),
('AR04', 'DEPORTES', 'RAQUETA TENIS', 93.4694, '2000-03-20', 'TRUE', 'USA', ''),
('AR06', 'DEPORTES', 'MANCUERNAS', 60, '2000-09-13', 'TRUE', 'USA', ''),
('AR07', 'CONFECCIÓN', 'SERRUCHO', 30.2045, '2001-03-23', 'TRUE', 'FRANCIA', ''),
('AR08', 'JUGUETERÍA', 'CORREPASILLOS', 103.3356, '2000-04-11', 'TRUE', 'JAPÓN', ''),
('AR09', 'CONFECCIÓN', 'PANTALÓN SEÑORA', 174.231, '2000-01-10', 'TRUE', 'MARRUECOS', ''),
('AR10', 'JUGUETERÍA', 'CONSOLA VIDEO', 442.5444, '2002-09-24', 'TRUE', 'USA', ''),
('AR11', 'CERÁMICA', 'TUBOS', 168.4253, '2000-02-04', 'TRUE', 'CHINA', ''),
('AR12', 'FERRETERÍA', 'LLAVE INGLESA', 24.3986, '2001-05-23', 'TRUE', 'USA', ''),
('AR13', 'CONFECCIÓN', 'CAMISA CABALLERO', 67.1306, '2002-08-11', 'FALSE', 'ESPAÑA', ''),
('AR14', 'JUGUETERÍA', 'TREN ELÉCTRICO', 1505.3766, '2001-07-03', 'TRUE', 'JAPÓN', ''),
('AR15', 'CERÁMICA', 'PLATO DECORATIVO', 54.0911, '2000-06-07', 'TRUE', 'CHINA', ''),
('AR16', 'FERRETERÍA', 'ALICATES', 6.7362, '2000-04-17', 'TRUE', 'ITALIA', ''),
('AR17', 'JUGUETERÍA', 'MUÑECA ANDADORA', 105.0593, '2001-01-04', 'FALSE', 'ESPAÑA', ''),
('AR18', 'DEPORTES', 'PISTOLA OLÍMPICA', 46.7347, '2001-02-02', 'TRUE', 'SUECIA', ''),
('AR19', 'CONFECCIÓN', 'BLUSA SRA.', 101.0566, '2000-03-18', 'TRUE', 'CHINA', ''),
('AR20', 'CERÁMICA', 'JUEGO DE TE', 43.2728, '2001-01-15', 'TRUE', 'CHINA', ''),
('AR21', 'CERÁMICA', 'CENICERO', 19.7468, '2001-07-02', 'TRUE', 'JAPÓN', ''),
('AR22', 'FERRETERÍA', 'MARTILLO', 11.3952, '2001-09-04', 'FALSE', 'ESPAÑA', ''),
('AR23', 'CONFECCIÓN', 'CAZADORA PIEL', 522.693, '2001-07-10', 'TRUE', 'ITALIA', ''),
('AR24', 'DEPORTES', 'BALÓN RUGBY', 111.644, '2000-11-11', 'TRUE', 'USA', ''),
('AR25', 'DEPORTES', 'BALÓN BALONCESTO', 75.2731, '2001-06-25', 'TRUE', 'JAPÓN', ''),
('AR26', 'JUGUETERÍA', 'FUERTE DE SOLDADOS', 143.702, '2000-11-25', 'TRUE', 'JAPÓN', ''),
('AR27', 'CONFECCIÓN', 'ABRIGO CABALLERO', 500000, '2002-04-05', 'TRUE', 'ITALIA', ''),
('AR28', 'DEPORTES', 'BALÓN FÚTBOL', 43.9147, '2002-07-04', 'FALSE', 'ESPAÑA', ''),
('AR29', 'CONFECCIÓN', 'ABRIGO SRA', 360.0736, '2001-05-03', 'TRUE', 'MARRUECOS', ''),
('AR30', 'FERRETERÍA', 'DESTORNILLADOR', 9.0584, '2002-02-20', 'TRUE', 'FRANCIA', ''),
('AR31', 'JUGUETERÍA', 'PISTOLA CON SONIDOS', 57.25, '2001-04-15', 'FALSE', 'ESPAÑA', ''),
('AR32', 'DEPORTES', 'CRONÓMETRO', 439.1764, '2002-01-03', 'TRUE', 'USA', ''),
('AR33', 'CERÁMICA', 'MACETA', 29.0434, '2000-02-23', 'FALSE', 'ESPAÑA', ''),
('AR34', 'OFICINA', 'PIE DE LÁMPARA', 39.7606, '2001-05-27', 'TRUE', 'TURQUÍA', ''),
('AR35', 'FERRETERÍA', 'LIMA GRANDE', 22.0692, '2002-08-10', 'FALSE', 'ESPAÑA', ''),
('AR36', 'FERRETERÍA', 'JUEGO DE BROCAS', 15.095, '2002-07-04', 'TRUE', 'TAIWÁN', ''),
('AR37', 'CONFECCIÓN', 'CINTURÓN DE PIEL', 4.3273, '2002-05-12', 'FALSE', 'ESPAÑA', ''),
('AR38', 'DEPORTES', 'CAÑA DE PESCA', 270, '2000-02-14', 'TRUE', 'USA', ''),
('AR39', 'CERÁMICA', 'JARRA CHINA', 127.7704, '2002-09-02', 'TRUE', 'CHINA', ''),
('AR40', 'DEPORTES', 'BOTA ALPINISMO', 144, '2002-05-05', 'FALSE', 'ESPAÑA', ''),
('AR41', 'DEPORTES', 'PALAS DE PING PONG', 21.6, '2002-02-02', 'FALSE', 'ESPAÑA', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`) VALUES
(1, 'Marc', 'marc@pr0j3ct.com'),
(2, 'pepito', 'pepito@correo.com'),
(3, 'Cristina', 'cristina@pr0j3ct.com'),
(4, 'Rafael', 'rafael@correo.com'),
(5, 'Manuel', 'manuel@correo.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
