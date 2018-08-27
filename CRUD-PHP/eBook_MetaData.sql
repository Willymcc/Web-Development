-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 22, 2018 at 07:58 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Assignment 3`
--

-- --------------------------------------------------------

--
-- Table structure for table `eBook_MetaData`
--

CREATE TABLE `eBook_MetaData` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `Creator` varchar(50) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Identifier` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Language` varchar(50) NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eBook_MetaData`
--

INSERT INTO `eBook_MetaData` (`ID`, `Creator`, `Title`, `Type`, `Identifier`, `Date`, `Language`, `Description`) VALUES
(65, 'J.R.R Tolkien', 'The Lord of the Rings', 'Fantasy', 1, '2018-03-13', 'English', 'Great Read'),
(67, 'Joseph Conrad', 'Heart Of Darkness', 'Horror', 0, '2018-03-13', 'English', 'Good'),
(69, 'J.K. Rowling', 'Harry Potter & The Philospher Stone', 'Fiction', 1234, '2018-01-16', 'English', 'Great'),
(70, 'Harper Lee', 'To Kill a Mockingbird ', 'Drama', 4567567, '2018-01-15', 'English', 'Its alright, like'),
(71, 'Antoine de Saint-Exupery', 'The Little Prince', 'Novel', 5675, '2018-01-17', 'French', 'Not the best'),
(72, 'Stieg Larsson', 'The Girl with the Dragon Tattoo', 'Mystery', 67867, '0000-00-00', 'German', 'I liked it'),
(73, 'Paulo Coelho', 'The Alchemist', 'Sci-Fi', 8978987, '2017-12-06', 'Spanish', 'Awesome'),
(74, 'Andy Weir', 'The Martian', 'Fantasy', 8908908, '2017-11-28', 'Latin', 'Love it');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `eBook_MetaData`
--
ALTER TABLE `eBook_MetaData`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `eBook_MetaData`
--
ALTER TABLE `eBook_MetaData`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
