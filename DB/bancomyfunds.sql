-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-07-2020 a las 18:42:28
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bancomyfunds`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_empresa`
--

CREATE TABLE `tb_empresa` (
  `idempresa` int(11) NOT NULL,
  `NitEmpresa` int(11) NOT NULL,
  `N_Empresa` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Direccion_Empresa` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Telefono_Empresa` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Correo_Empresa` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tb_empresa`
--

INSERT INTO `tb_empresa` (`idempresa`, `NitEmpresa`, `N_Empresa`, `Direccion_Empresa`, `Telefono_Empresa`, `Correo_Empresa`) VALUES
(2, 2345, 'Rancho el Cafetero', 'carrea 23# 56-92', '03145789521', 'aasd@gmail.com'),
(3, 345, 'Calzado Rubi', 'calle 92 # 12-24', '3207412563', 'aasd@gmail.com'),
(4, 4574, 'Pruebas Saber', 'undefined', 'undefined', 'prueba@gmail.com'),
(5, 1234124, 'ARMANDO COMPANY', 'CALLE 45#49-123', '123213', 'ARMANDO.COMPANY@GMAIL.COM'),
(6, 1020486, 'SEBASTIAN INDUSTRYS', 'calle 31 #58a-33', '3187933267', 'SEBASTIAN.MARTINEZ@GMAIL.COM'),
(7, 40774078, 'compunet', 'cale35 #45-62', '310457210', 'cpompu@gmail.com'),
(8, 45621, 'floristeria la mejor', 'calle 25 # 23-89', '3201478569', 'flores@yahoo.es');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_personanatural`
--

CREATE TABLE `tb_personanatural` (
  `id_persona` int(11) NOT NULL,
  `Nombre` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Apellido` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Direccion` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `FechaNacimiento` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Telefono` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `CorreElectronico` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `identificacion` varchar(11) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tb_personanatural`
--

INSERT INTO `tb_personanatural` (`id_persona`, `Nombre`, `Apellido`, `Direccion`, `FechaNacimiento`, `Telefono`, `CorreElectronico`, `identificacion`) VALUES
(2, 'favio', 'castro', 'calle32 #45-15', '8-12-1987', '3124598796', 'favio1254@gmail.com', '2345'),
(3, 'pedrop', 'castro reyes', 'calle32 #55-15', '8-12-1987', '3124598796', 'favio1254@gmail.com', '40778954'),
(4, 'mairon', 'martinez', 'calle 31 #58a-33', '2020-06-01', '3002913341', 'maironapm@hotmail.com', '123213'),
(5, 'willian Andres', 'martinez castro', 'calle 32 #52a-31', '2010-06-02', '3002913341', 'willianpm@hotmail.com', '123456'),
(6, 'favio', 'castro', 'calle32 #45-15', '8-12-1987', '3124598796', 'favio1254@gmail.com', '2345');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_empresa`
--
ALTER TABLE `tb_empresa`
  ADD PRIMARY KEY (`idempresa`);

--
-- Indices de la tabla `tb_personanatural`
--
ALTER TABLE `tb_personanatural`
  ADD PRIMARY KEY (`id_persona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_empresa`
--
ALTER TABLE `tb_empresa`
  MODIFY `idempresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tb_personanatural`
--
ALTER TABLE `tb_personanatural`
  ADD CONSTRAINT `Nombre` FOREIGN KEY (`id_persona`) REFERENCES `tb_empresa` (`idempresa`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
