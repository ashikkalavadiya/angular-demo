-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 28, 2014 at 10:29 AM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `phone_desc`
--
CREATE DATABASE IF NOT EXISTS test;
USE test;
CREATE TABLE IF NOT EXISTS `phone_desc` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `phone_desc`
--

INSERT INTO `phone_desc` (`id`, `name`, `description`) VALUES
(1, 'nexus', 'Google Nexus 4 has a 1.5GHz quad-core Snapdragon S4 Pro with Krait CPUs (meaning this thing should be crazy fast), a 4.7-inch WXGA True HD IPS Plus (1280 x 768 pixels) display with Zerogap Touch technology and Corning Gorilla Glass 2, 2GB of RAM, an 8MP rear camera, a 1.3MP front camera, and a 2100 mAh battery rated for upwards of 15.3 hours of talk time. The device has NFC as expected, and will support wireless charging. It will run Android 4.2 Jelly Bean.'),
(2, 'iphone', 'Apple iPhone is unique phone with slim profile and no keys - it has 3.5 inches touch display that uses multi-touch technology for navigation. A sensor controls the orientation of the display, and iPhone OS controls the smartphone''s functionality. It is a quad-band GSM/EDGE device with WiFi and Bluetooth, and features 16/8/4GB of memory. Among its features there are YouTube and Google Maps applications, excellent internet browser called Safari and iPOD music/video player with CoverFlow technology, showing large album covers.');
