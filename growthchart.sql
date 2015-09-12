-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 12, 2015 at 12:53 AM
-- Server version: 5.5.44-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `growthchart`
--

-- --------------------------------------------------------

--
-- Table structure for table `p_bmi`
--

CREATE TABLE IF NOT EXISTS `p_bmi` (
  `bmi_id` int(5) NOT NULL AUTO_INCREMENT,
  `id` int(5) NOT NULL,
  `bmi` float DEFAULT NULL,
  `bmi_per` int(5) DEFAULT NULL,
  `hc_per` float DEFAULT NULL,
  `wfa_per` float DEFAULT NULL,
  `lfa_per` float DEFAULT NULL,
  PRIMARY KEY (`bmi_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=23 ;

--
-- Dumping data for table `p_bmi`
--

INSERT INTO `p_bmi` (`bmi_id`, `id`, `bmi`, `bmi_per`, `hc_per`, `wfa_per`, `lfa_per`) VALUES
(5, 1, 20, 1, NULL, 0.939337, 0.276421),
(7, 2, 20, 1, NULL, 0.939337, 0.276421),
(22, 0, NULL, NULL, 0, 0.999966, 0.093967);

-- --------------------------------------------------------

--
-- Table structure for table `p_child`
--

CREATE TABLE IF NOT EXISTS `p_child` (
  `child_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `unit` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `gender` int(5) NOT NULL,
  `age` int(15) NOT NULL,
  `weight_lbs` int(10) DEFAULT NULL,
  `weight_ounces` int(5) DEFAULT NULL,
  `weight_kg` int(10) DEFAULT NULL,
  `length_inches` int(10) DEFAULT NULL,
  `length_cm` int(10) DEFAULT NULL,
  `hair_circumference_inches` int(10) DEFAULT NULL,
  `hair_circumference_cm` int(10) DEFAULT NULL,
  `id` int(5) NOT NULL,
  PRIMARY KEY (`child_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `p_child`
--

INSERT INTO `p_child` (`child_id`, `name`, `unit`, `gender`, `age`, `weight_lbs`, `weight_ounces`, `weight_kg`, `length_inches`, `length_cm`, `hair_circumference_inches`, `hair_circumference_cm`, `id`) VALUES
(1, 'asdf', 'metric', 1, 48, NULL, NULL, 20, NULL, 100, NULL, 24, 1),
(2, 'asdf', 'metric', 1, 48, NULL, NULL, 20, NULL, 100, NULL, 24, 1);

-- --------------------------------------------------------

--
-- Table structure for table `p_users`
--

CREATE TABLE IF NOT EXISTS `p_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `p_users`
--

INSERT INTO `p_users` (`id`, `email`, `password`) VALUES
(2, 'donghuyin@gmail.com', 'asdf');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
