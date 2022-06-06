-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2022 a las 23:01:49
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pioneros`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtener_lista_propietarios` ()  NO SQL
    SQL SECURITY INVOKER
    COMMENT 'obtiene el listado de identificaciones de propietarios'
SELECT propietarios_vehiculos.cedula FROM propietarios_vehiculos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `obtener_marca_llanta_referencia` (IN `referencia_llanta` VARCHAR(50))  NO SQL
    SQL SECURITY INVOKER
    COMMENT 'obtiene marca de las llantas segun una referencia'
SELECT DISTINCT repuestos.marca FROM repuestos WHERE repuestos.referencia = referencia_llanta$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `obtener_usuario` (IN `cedula` VARCHAR(50))  NO SQL
    SQL SECURITY INVOKER
SELECT usuarios.tipo_documento, usuarios.numero_documento, usuarios.nombres, usuarios.apellidos, usuarios.direccion, usuarios.telefono, usuarios.email, usuarios.password_usuario, usuarios.id_estado, usuarios.id_rol, usuarios.intentos, preguntas_seguridad.pregunta, detalles_preguntas_usuarios.respuesta_pregunta FROM usuarios, detalles_preguntas_usuarios, preguntas_seguridad WHERE usuarios.numero_documento = detalles_preguntas_usuarios.cedula_usuario AND detalles_preguntas_usuarios.id_pregunta = preguntas_seguridad.id AND usuarios.numero_documento = cedula AND usuarios.id_estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrar_llantas_4` (IN `placa` VARCHAR(50), IN `frente_i` VARCHAR(50), IN `frente_d` VARCHAR(50), IN `trasera_i` VARCHAR(50), IN `trasera_d` VARCHAR(50))  NO SQL
    SQL SECURITY INVOKER
    COMMENT 'registra 4 llantas de vehiculo'
INSERT INTO detalle_repuesto_vehiculos(codigo_repuesto, placa_vehiculo, ubicacion) 
VALUES 
(frente_i, placa, "frente izquierda"),
(frente_d, placa, "frente derecha"),
(trasera_i, placa, "trasera exterior izquierda"),
(trasera_d, placa, "frente exterior izquierda")$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrar_llantas_6` (IN `placa` VARCHAR(50), IN `frente_i` VARCHAR(50), IN `frente_d` VARCHAR(50), IN `trasera_ex_i` VARCHAR(50), IN `trasera_in_i` VARCHAR(50), IN `trasera_ex_d` VARCHAR(50), IN `trasera_in_d` VARCHAR(50))  NO SQL
    SQL SECURITY INVOKER
    COMMENT 'registra llantas de vehiculo de 6 llantas'
INSERT INTO detalle_repuesto_vehiculos(codigo_repuesto, placa_vehiculo, ubicacion) 
VALUES 
(frente_i, placa,"frente izquierda"),
(frente_d, placa,"frente derecha"),
(trasera_ex_i, placa,"frente izquierda exterior"),
(trasera_in_i, placa,"frente izquierda interior"),
(trasera_ex_d, placa,"frente exterior derecha"),
(trasera_in_d, placa,"frente interior derecha")$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrar_repuestos_vehiculos` (IN `placa_v` VARCHAR(50), IN `aceite_motor` VARCHAR(50), IN `aceite_transmision` VARCHAR(50), IN `frenos_delanteros` VARCHAR(50), IN `frenos_traseros` VARCHAR(50), IN `bateria_principal` VARCHAR(50), IN `bateria_secundaria` VARCHAR(50), IN `suspencion_delantera` VARCHAR(50), IN `suspencion_trasera` VARCHAR(50))  NO SQL
    SQL SECURITY INVOKER
    COMMENT 'registra los repuestos del vehiculo'
INSERT INTO detalle_repuesto_vehiculos (detalle_repuesto_vehiculos.codigo_repuesto, detalle_repuesto_vehiculos.placa_vehiculo, detalle_repuesto_vehiculos.ubicacion)
 VALUES (aceite_motor, placa_v, "MOTOR"), (aceite_transmision, placa_v, "TRANSMISION"), (frenos_delanteros, placa_v, "FRONTAL"), (frenos_traseros, placa_v, "POSTERIOR"), (bateria_principal, placa_v, "N/A"), (bateria_secundaria, placa_v, "N/A"), (suspencion_delantera, placa_v, "FRONTAL"), (suspencion_trasera, placa_v, "POSTERIOR")$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrar_revisiones` (IN `numero_tecnomecanica` VARCHAR(100), IN `fecha_vencimiento_tecnomecanica` DATE, IN `costo_tecnomecanica` INT(11), IN `numero_bimensual` VARCHAR(100), IN `fecha_vencimiento_bimensual` DATE, IN `costo_bimensual` INT(11), IN `placa` VARCHAR(50))  NO SQL
    SQL SECURITY INVOKER
    COMMENT 'registra los seguros en la base de datos'
INSERT INTO documentos (documentos.numero_documento, documentos.codigo_tipo_documento, documentos.costo, documentos.fecha, documentos.placa_vehiculo) 
VALUES
(numero_tecnomecanica, "D0001", costo_tecnomecanica, fecha_vencimiento_tecnomecanica, placa),
(numero_bimensual, "D0002", costo_bimensual, fecha_vencimiento_bimensual, placa)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrar_seguros` (IN `numero_soat` VARCHAR(100), IN `fecha_vencimiento_soat` DATE, IN `costo_soat` INT(11), IN `numero_rcc` VARCHAR(100), IN `fecha_vencimiento_rcc` DATE, IN `costo_rcc` INT(11), IN `placa` VARCHAR(50))  NO SQL
    SQL SECURITY INVOKER
    COMMENT 'registra los seguros en la base de datos'
INSERT INTO documentos (documentos.numero_documento, documentos.codigo_tipo_documento, documentos.costo, documentos.fecha, documentos.placa_vehiculo) VALUES
(numero_soat, "D0003", costo_soat, fecha_vencimiento_soat, placa),
(numero_rcc, "D0004", costo_rcc, fecha_vencimiento_rcc, placa)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrar_usuarios` (IN `tipo_documento` VARCHAR(50), IN `numero_documento` VARCHAR(20), IN `nombres` VARCHAR(20), IN `apellidos` VARCHAR(20), IN `direccion` VARCHAR(20), IN `telefono` VARCHAR(20), IN `email` VARCHAR(100), IN `password_usuario` VARCHAR(200), IN `estado` INT(11), IN `rol` INT(11), IN `id_pregunta` INT(11), IN `respuesta_pregunta` VARCHAR(100))  NO SQL
    SQL SECURITY INVOKER
BEGIN
INSERT INTO usuarios(tipo_documento, numero_documento, nombres, apellidos, direccion, telefono, email, password_usuario, id_estado, id_rol, fecha_bloqueo, intentos) VALUES (tipo_documento, numero_documento, nombres, apellidos, direccion, telefono, email, password_usuario, estado, rol, "", 0);
INSERT INTO detalles_preguntas_usuarios(id_pregunta, cedula_usuario, respuesta_pregunta) VALUES (id_pregunta, numero_documento, respuesta_pregunta);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrar_vehiculo` (IN `placa_v` VARCHAR(50), IN `avaluo_v` INT, IN `impuestos_v` INT, IN `modelo_v` VARCHAR(50), IN `propietario_v` VARCHAR(50), IN `tipo_combustible_v` VARCHAR(50), IN `consumo_combustible_v` INT, IN `licencia_transito_v` VARCHAR(50), IN `tarjeta_operaciones_v` VARCHAR(50), IN `tipo_vehiculo_v` VARCHAR(50))  NO SQL
    SQL SECURITY INVOKER
    COMMENT 'registra la informacion general del vehiculo'
INSERT INTO vehiculos (vehiculos.placa, vehiculos.modelo, vehiculos.tipo_combustible, vehiculos.consumo_combustible, vehiculos.impuesto_vehiculo, vehiculos.avaluo, vehiculos.licencia_transito, vehiculos.tarjeta_operaciones, vehiculos.cedula_propietario, vehiculos.tipo_vehiculo) VALUES (placa_v, modelo_v, tipo_combustible_v, consumo_combustible_v, impuestos_v, avaluo_v, licencia_transito_v, tarjeta_operaciones_v, propietario_v, tipo_vehiculo_v)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrar_vehiculos` (IN `placa_v` VARCHAR(50), IN `avaluo_v` INT, IN `impuestos_v` INT, IN `modelo_v` VARCHAR(50), IN `propietario_v` VARCHAR(50), IN `tipo_combustible_v` VARCHAR(50), IN `consumo_combustible_v` INT, IN `licencia_transito_v` VARCHAR(50), IN `tarjeta_operaciones_v` VARCHAR(50), IN `tipo_vehiculo_v` INT, IN `aceite_motor` VARCHAR(50), IN `aceite_transmision` VARCHAR(50), IN `frenos_delanteros` VARCHAR(50), IN `frenos_traseros` VARCHAR(50), IN `bateria_principal` VARCHAR(50), IN `bateria_secundaria` VARCHAR(50), IN `suspencion_delantera` VARCHAR(50), IN `suspencion_trasera` VARCHAR(50))  NO SQL
    SQL SECURITY INVOKER
    COMMENT 'registra la informacion del vehiculo'
BEGIN
CALL registrar_repuestos_vehiculos(placa_v, aceite_motor, aceite_transmision,frenos_delanteros, frenos_traseros,bateria_principal,bateria_secundaria, suspencion_delantera, suspencion_trasera);
CALL registrar_vehiculo( placa_v,  avaluo_v,  impuestos_v,  modelo_v, propietario_v, tipo_combustible_v,  consumo_combustible_v,  licencia_transito_v,  tarjeta_operaciones_v, tipo_vehiculo_v); 
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_preguntas_usuarios`
--

CREATE TABLE `detalles_preguntas_usuarios` (
  `id` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `cedula_usuario` varchar(50) NOT NULL,
  `respuesta_pregunta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalles_preguntas_usuarios`
--

INSERT INTO `detalles_preguntas_usuarios` (`id`, `id_pregunta`, `cedula_usuario`, `respuesta_pregunta`) VALUES
(1, 1, '23857345', 'milu'),
(2, 1, '098429372', 'mateo'),
(3, 2, '19821972', 'Cali'),
(4, 2, '1107099814', 'CARLOS MARIO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_repuesto_vehiculos`
--

CREATE TABLE `detalle_repuesto_vehiculos` (
  `id` int(11) NOT NULL,
  `codigo_repuesto` varchar(20) NOT NULL,
  `costo_repuesto` int(11) NOT NULL,
  `placa_vehiculo` varchar(20) NOT NULL,
  `ubicacion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalle_repuesto_vehiculos`
--

INSERT INTO `detalle_repuesto_vehiculos` (`id`, `codigo_repuesto`, `costo_repuesto`, `placa_vehiculo`, `ubicacion`) VALUES
(1, 'RP0003', 25000, 'VYT098', 'MOTOR'),
(2, 'RP0004', 70000, 'VYT098', 'TRANSMISION'),
(3, 'RP0007', 762000, 'VYT098', 'FRONTAL'),
(4, 'RP0007', 762000, 'VYT098', 'POSTERIOR'),
(5, 'RP0014', 328000, 'VYT098', 'N/A'),
(6, 'RP0014', 328000, 'VYT098', 'N/A'),
(7, 'RP0009', 3500000, 'VYT098', 'FRONTAL'),
(8, 'RP0010', 1500000, 'VYT098', 'POSTERIOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos`
--

CREATE TABLE `documentos` (
  `numero_documento` varchar(20) NOT NULL,
  `codigo_tipo_documento` varchar(20) NOT NULL,
  `costo` double NOT NULL,
  `fecha` date NOT NULL,
  `placa_vehiculo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id` int(11) NOT NULL,
  `nombre_estado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `nombre_estado`) VALUES
(1, 'Activo'),
(2, 'Bloqueado'),
(3, 'Inactivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas_seguridad`
--

CREATE TABLE `preguntas_seguridad` (
  `id` int(11) NOT NULL,
  `pregunta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preguntas_seguridad`
--

INSERT INTO `preguntas_seguridad` (`id`, `pregunta`) VALUES
(1, '¿Cuál es el nombre de tu mascota?'),
(2, '¿En qué ciudad nació?');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propietarios_vehiculos`
--

CREATE TABLE `propietarios_vehiculos` (
  `cedula` varchar(50) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `email` varchar(250) NOT NULL,
  `id_responsable` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `propietarios_vehiculos`
--

INSERT INTO `propietarios_vehiculos` (`cedula`, `nombres`, `apellidos`, `direccion`, `telefono`, `email`, `id_responsable`) VALUES
('1371976979', 'Maria', 'Miranda', 'Transversal 2 # 3-98', '6549799', 'mariamiranda@correo.com', '1107099814'),
('1971358468', 'Alberto', 'Velez', 'Carrera 12 #4-56', '6574932', 'albertovelez@correo.com', '1107099814'),
('4813816817', 'Juan', 'Paez', 'Calle 34 # 4-56', '3549789', 'juanpaez@correo.com', '1107099814'),
('6161976169', 'Raul', 'Santos', 'Diagonal 45 # 9-08', '3216479876', 'raulsantos@correo.com', '1107099814');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repuestos`
--

CREATE TABLE `repuestos` (
  `codigo_repuesto` varchar(20) NOT NULL,
  `referencia` varchar(20) NOT NULL,
  `marca` varchar(20) NOT NULL,
  `costo` double NOT NULL,
  `vida_util` varchar(20) NOT NULL,
  `tipo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `repuestos`
--

INSERT INTO `repuestos` (`codigo_repuesto`, `referencia`, `marca`, `costo`, `vida_util`, `tipo`) VALUES
('RP0001', '0W30', 'CASTROL', 15000, '4000', 'TRP0001'),
('RP0002', '5W30', 'CASTROL', 20000, '5000', 'TRP0001'),
('RP0003', '20W50', 'CASTROL', 25000, '3000', 'TRP0001'),
('RP0004', 'XT-5-QMC', 'MOTORCRAFT', 70000, '80000', 'TRP0002'),
('RP0005', 'XT-6-QSP', 'MOTORCRAFT', 80000, '80000', 'TRP0002'),
('RP0006', 'XT-11-QDC', 'MOTORCRAFT', 100000, '80000', 'TRP0002'),
('RP0007', 'SDB000624', 'BREMBO', 762000, '50000', 'TRP0003'),
('RP0008', 'M235I', 'BREMBO', 2300000, '45000', 'TRP0003'),
('RP0009', 'SP55819', 'SAMPA', 3500000, '300000', 'TRP0004'),
('RP0010', '207.335-01', 'ZM', 1500000, '300000', 'TRP0004'),
('RP0011', '185/80R14', 'MICHELIN', 328000, '100000', 'TRP0005'),
('RP0012', '265/70R19.5', 'MICHELIN', 400000, '100000', 'TRP0005'),
('RP0013', '305/70R19.5', 'MICHELIN', 500000, '150000', 'TRP0005'),
('RP0014', '24900MC', 'MAC', 328000, '100000', 'TRP0006'),
('RP0015', '24R1150MG', 'MAC', 400000, '100000', 'TRP0006'),
('RP0016', '24R900MC', 'MAC', 500000, '150000', 'TRP0006'),
('RP0017', '185/80R14', 'GOODYEAR', 300000, '100000', 'TRP0005');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre_rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre_rol`) VALUES
(1, 'Gerente'),
(2, 'Coordinador de Rutas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `codigo_ruta` varchar(20) NOT NULL,
  `codigo_viaje` varchar(20) NOT NULL,
  `nombre_ruta` varchar(20) NOT NULL,
  `recorrido` double NOT NULL,
  `distancia_recorrido` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_documentos`
--

CREATE TABLE `tipos_documentos` (
  `codigo_tipo_documento` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipos_documentos`
--

INSERT INTO `tipos_documentos` (`codigo_tipo_documento`, `nombre`) VALUES
('D0001', 'Revision tecnico mecanica'),
('D0002', 'Revision bimensual'),
('D0003', 'Seguro Obligatorio'),
('D0004', 'Seguro de responsabidad civil');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_repuestro`
--

CREATE TABLE `tipos_repuestro` (
  `codigo_tipo` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipos_repuestro`
--

INSERT INTO `tipos_repuestro` (`codigo_tipo`, `nombre`) VALUES
('TRP0001', 'ACEITE DE MOTOR'),
('TRP0002', 'ACEITE DE TRASMISION'),
('TRP0003', 'FRENOS'),
('TRP0004', 'SUSPENSION'),
('TRP0005', 'BATERIA'),
('TRP0006', 'LLANTA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `tipo_documento` varchar(50) NOT NULL,
  `numero_documento` varchar(20) NOT NULL,
  `nombres` varchar(20) NOT NULL,
  `apellidos` varchar(20) NOT NULL,
  `direccion` varchar(20) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_usuario` varchar(250) NOT NULL,
  `id_estado` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `fecha_bloqueo` varchar(250) NOT NULL,
  `intentos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `tipo_documento`, `numero_documento`, `nombres`, `apellidos`, `direccion`, `telefono`, `email`, `password_usuario`, `id_estado`, `id_rol`, `fecha_bloqueo`, `intentos`) VALUES
(1, 'C.C', '1107099814', 'Carlos', 'Gomez', 'Calle 13 # 6-69', '6849161', 'carlos@correo.com', '$2b$10$8RQfSoTcTeRTrQtuAl49VeSL18LWrmz7XmsJEgU3.VoSa8yhSivq2', 1, 1, '', 0),
(2, 'C.C', '1107099813', 'Mario', 'Gomez', 'Calle 13 # 6-69', '6849161', 'mario@correo.com', '$2b$10$8RQfSoTcTeRTrQtuAl49VeSL18LWrmz7XmsJEgU3.VoSa8yhSivq2', 2, 2, '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `placa` varchar(20) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `tipo_combustible` varchar(20) NOT NULL,
  `consumo_combustible` double NOT NULL,
  `impuesto_vehiculo` double NOT NULL,
  `avaluo` double NOT NULL,
  `licencia_transito` varchar(20) NOT NULL,
  `tarjeta_operaciones` varchar(20) NOT NULL,
  `cedula_propietario` varchar(20) NOT NULL,
  `tipo_vehiculo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`placa`, `modelo`, `tipo_combustible`, `consumo_combustible`, `impuesto_vehiculo`, `avaluo`, `licencia_transito`, `tarjeta_operaciones`, `cedula_propietario`, `tipo_vehiculo`) VALUES
('VYT098', '2012', 'GASOLINA', 70, 150000, 30000000, '654916919', '167197964796', '1371976979', 'Bus');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

CREATE TABLE `viajes` (
  `codigo_viaje` varchar(20) NOT NULL,
  `origen` varchar(20) NOT NULL,
  `destino` varchar(20) NOT NULL,
  `placaVehiculo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detalles_preguntas_usuarios`
--
ALTER TABLE `detalles_preguntas_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_repuesto_vehiculos`
--
ALTER TABLE `detalle_repuesto_vehiculos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `documentos`
--
ALTER TABLE `documentos`
  ADD PRIMARY KEY (`numero_documento`);

--
-- Indices de la tabla `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `preguntas_seguridad`
--
ALTER TABLE `preguntas_seguridad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `propietarios_vehiculos`
--
ALTER TABLE `propietarios_vehiculos`
  ADD PRIMARY KEY (`cedula`);

--
-- Indices de la tabla `repuestos`
--
ALTER TABLE `repuestos`
  ADD PRIMARY KEY (`codigo_repuesto`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD PRIMARY KEY (`codigo_ruta`);

--
-- Indices de la tabla `tipos_documentos`
--
ALTER TABLE `tipos_documentos`
  ADD PRIMARY KEY (`codigo_tipo_documento`);

--
-- Indices de la tabla `tipos_repuestro`
--
ALTER TABLE `tipos_repuestro`
  ADD PRIMARY KEY (`codigo_tipo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numero_documento` (`numero_documento`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`placa`);

--
-- Indices de la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD PRIMARY KEY (`codigo_viaje`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detalles_preguntas_usuarios`
--
ALTER TABLE `detalles_preguntas_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `detalle_repuesto_vehiculos`
--
ALTER TABLE `detalle_repuesto_vehiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `preguntas_seguridad`
--
ALTER TABLE `preguntas_seguridad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
