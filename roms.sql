CREATE DATABASE  IF NOT EXISTS `roms` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `roms`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: roms
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `building`
--

DROP TABLE IF EXISTS `building`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `building` (
  `BuildingID` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `BuildingName` varchar(3) NOT NULL,
  `Location` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`BuildingID`),
  UNIQUE KEY `BuildingName_UNIQUE` (`BuildingName`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `building`
--

LOCK TABLES `building` WRITE;
/*!40000 ALTER TABLE `building` DISABLE KEYS */;
INSERT INTO `building` VALUES (01,'A1','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(02,'A2','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(03,'A3','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(04,'A4','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(05,'A5','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(06,'B1','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(07,'B2','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(08,'B3','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(09,'B4','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(11,'B6','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(12,'B8','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(13,'B9','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(14,'B10','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(15,'B11','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(16,'B12','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(17,'C1','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(18,'C2','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(19,'C3','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(20,'C4','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(21,'C5','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(22,'C6','268 Ly Thuong Kiet, P. 14, Q. 10, TP. HCM'),(23,'H1','Khu pho Tan Lap, P. Dong Hoa, TP. Di An, Binh Duong'),(24,'H2','Khu pho Tan Lap, P. Dong Hoa, TP. Di An, Binh Duong'),(25,'H3','Khu pho Tan Lap, P. Dong Hoa, TP. Di An, Binh Duong'),(26,'H6','Khu pho Tan Lap, P. Dong Hoa, TP. Di An, Binh Duong');
/*!40000 ALTER TABLE `building` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty` (
  `FacultyID` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `FacultyName` varchar(60) NOT NULL,
  `BuildingID` int(2) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`FacultyID`),
  UNIQUE KEY `BuildingID_UNIQUE` (`BuildingID`),
  CONSTRAINT `faculty_building` FOREIGN KEY (`BuildingID`) REFERENCES `building` (`BuildingID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES (01,'Trung tâm Đào tạo Bảo dưỡng Công nghiệp',NULL),(02,'Khoa Cơ khí',15),(03,'Khoa Kỹ thuật Địa chất và Dầu khí',12),(04,'Khoa Điện - Điện tử',06),(05,'Khoa Kỹ thuật Giao thông',21),(06,'Khoa Kỹ thuật Hoá học',07),(07,'Khoa Môi trường và Tài nguyên',13),(08,'Khoa Khoa học và Kỹ thuật Máy tính',03),(09,'Khoa Quản lý Công nghiệp',14),(10,'Khoa Khoa học Ứng dụng',09),(11,'Khoa Công nghệ Vật liệu',20),(12,'Khoa Kỹ thuật Xây dựng',11);
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `register`
--

DROP TABLE IF EXISTS `register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register` (
  `RegisterID` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `RoomID` int(3) unsigned zerofill NOT NULL,
  `UserID` int(7) unsigned zerofill NOT NULL,
  `DateUse` date NOT NULL,
  `Start` int NOT NULL,
  `End` int NOT NULL,
  `RegisterDate` datetime(5) NOT NULL DEFAULT CURRENT_TIMESTAMP(5),
  `Subject` varchar(50) NOT NULL,
  PRIMARY KEY (`RegisterID`),
  KEY `register_subject_idx` (`Subject`),
  KEY `register_room_idx` (`RoomID`),
  KEY `register_user_idx` (`UserID`),
  CONSTRAINT `register_room` FOREIGN KEY (`RoomID`) REFERENCES `room` (`RoomID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `register_user` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register`
--

LOCK TABLES `register` WRITE;
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
INSERT INTO `register` VALUES (0000000004,001,0000003,'2025-04-30',7,8,'2025-04-30 00:52:14.78376','DSA'),(0000000009,001,0000003,'2025-04-30',10,11,'2025-04-30 11:57:03.58853','DSA'),(0000000010,001,0000003,'2025-04-30',9,9,'2025-04-30 12:25:01.62647','DSA');
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `registerDate_BEFORE_INSERT` BEFORE INSERT ON `register` FOR EACH ROW BEGIN
	DECLARE validDate condition for sqlstate '45000';
    IF (NEW.`DateUse` < CURDATE() OR
    (NEW.`DateUse` = CURDATE() AND NEW.`Start` + 5 <= HOUR(CURRENT_TIME()))) THEN
		SIGNAL validDate
        SET MESSAGE_TEXT = 'Error: Date must be in the future.';
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `registerDuplicate_BEFORE_INSERT` BEFORE INSERT ON `register` FOR EACH ROW BEGIN
	IF EXISTS (
		SELECT *
        FROM register
        WHERE DateUse = NEW.`DateUse` AND ((Start <= NEW.`Start` AND End >= NEW.`Start`)
        OR (Start <= NEW.`End` AND End >= NEW.`End`))
    )
    THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Duplicate register';
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `register_BEFORE_UPDATE` BEFORE UPDATE ON `register` FOR EACH ROW BEGIN
DECLARE validDate condition for sqlstate '45000';
    IF (NEW.`DateUse` < CURDATE() OR
    (NEW.`DateUse` = CURDATE() AND NEW.`Start` + 5 <= HOUR(CURRENT_TIME()))) THEN
		SIGNAL validDate
        SET MESSAGE_TEXT = 'Error: Date must be in the future.';
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `registerDuplicate_BEFORE_UPDATE_1` BEFORE UPDATE ON `register` FOR EACH ROW BEGIN
	IF EXISTS (
		SELECT *
        FROM register
        WHERE DateUse = NEW.`DateUse` AND ((Start <= NEW.`Start` AND End >= NEW.`Start`)
        OR (Start <= NEW.`End` AND End >= NEW.`End`))
    )
    THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Duplicate register';
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `RoomID` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `BuildingID` int(2) unsigned zerofill NOT NULL,
  `RoomNum` char(3) NOT NULL,
  PRIMARY KEY (`RoomID`),
  KEY `room_building_idx` (`BuildingID`),
  CONSTRAINT `room_building` FOREIGN KEY (`BuildingID`) REFERENCES `building` (`BuildingID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=509 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (001,03,'201'),(002,03,'202'),(003,03,'203'),(004,03,'204'),(005,03,'205'),(006,03,'301'),(007,03,'302'),(008,03,'303'),(009,03,'304'),(010,03,'305'),(011,04,'201'),(012,04,'202'),(013,04,'203'),(014,04,'204'),(015,04,'205'),(016,04,'301'),(017,04,'302'),(018,04,'303'),(019,04,'304'),(020,04,'305'),(021,04,'401'),(022,04,'402'),(023,04,'403'),(024,04,'404'),(025,04,'405'),(026,04,'501'),(027,04,'502'),(028,04,'503'),(029,04,'504'),(030,04,'505'),(031,05,'101'),(032,05,'102'),(033,05,'103'),(034,05,'104'),(035,05,'105'),(036,05,'106'),(037,05,'107'),(038,05,'108'),(039,05,'109'),(040,05,'110'),(041,06,'101'),(042,06,'102'),(043,06,'103'),(044,06,'104'),(045,06,'105'),(046,06,'106'),(047,06,'107'),(048,06,'108'),(049,06,'109'),(050,06,'110'),(051,06,'111'),(052,06,'112'),(053,06,'113'),(054,06,'114'),(055,06,'115'),(056,06,'116'),(057,06,'117'),(058,06,'118'),(059,06,'119'),(060,06,'120'),(061,06,'201'),(062,06,'202'),(063,06,'203'),(064,06,'204'),(065,06,'205'),(066,06,'206'),(067,06,'207'),(068,06,'208'),(069,06,'209'),(070,06,'210'),(071,06,'211'),(072,06,'212'),(073,06,'213'),(074,06,'214'),(075,06,'215'),(076,06,'216'),(077,06,'217'),(078,06,'218'),(079,06,'219'),(080,06,'220'),(081,06,'301'),(082,06,'302'),(083,06,'303'),(084,06,'304'),(085,06,'305'),(086,06,'306'),(087,06,'307'),(088,06,'308'),(089,06,'309'),(090,06,'310'),(091,06,'311'),(092,06,'312'),(093,06,'313'),(094,06,'314'),(095,06,'315'),(096,06,'316'),(097,06,'317'),(098,06,'318'),(099,06,'319'),(100,06,'320'),(101,06,'401'),(102,06,'402'),(103,06,'403'),(104,06,'404'),(105,06,'405'),(106,06,'406'),(107,06,'407'),(108,06,'408'),(109,06,'409'),(110,06,'410'),(111,06,'411'),(112,06,'412'),(113,06,'413'),(114,06,'414'),(115,06,'415'),(116,06,'416'),(117,06,'417'),(118,06,'418'),(119,06,'419'),(120,06,'420'),(121,07,'101'),(122,07,'102'),(123,07,'103'),(124,07,'104'),(125,07,'105'),(126,07,'106'),(127,07,'107'),(128,07,'201'),(129,07,'202'),(130,07,'203'),(131,07,'204'),(132,07,'205'),(133,07,'206'),(134,07,'207'),(135,07,'301'),(136,07,'302'),(137,07,'303'),(138,07,'304'),(139,07,'305'),(140,07,'306'),(141,07,'307'),(142,07,'401'),(143,07,'402'),(144,07,'403'),(145,07,'404'),(146,07,'405'),(147,07,'406'),(148,07,'407'),(149,08,'101'),(150,08,'102'),(151,08,'103'),(152,08,'104'),(153,08,'105'),(154,08,'106'),(155,08,'107'),(156,08,'201'),(157,08,'202'),(158,08,'203'),(159,08,'204'),(160,08,'205'),(161,08,'206'),(162,08,'207'),(163,08,'301'),(164,08,'302'),(165,08,'303'),(166,08,'304'),(167,08,'305'),(168,08,'306'),(169,08,'307'),(170,09,'101'),(171,09,'102'),(172,09,'103'),(173,09,'104'),(174,09,'105'),(175,09,'106'),(176,09,'201'),(177,09,'202'),(178,09,'203'),(179,09,'204'),(180,09,'205'),(181,09,'206'),(182,09,'301'),(183,09,'302'),(184,09,'303'),(185,09,'304'),(186,09,'305'),(187,09,'306'),(188,09,'401'),(189,09,'402'),(190,09,'403'),(191,09,'404'),(192,09,'405'),(193,09,'406'),(194,09,'501'),(195,09,'502'),(196,09,'503'),(197,09,'504'),(198,09,'505'),(199,09,'506'),(200,09,'601'),(201,09,'602'),(202,09,'603'),(203,09,'604'),(204,09,'605'),(205,09,'606'),(206,11,'101'),(207,11,'102'),(208,11,'103'),(209,11,'104'),(210,11,'105'),(211,11,'106'),(212,11,'201'),(213,11,'202'),(214,11,'203'),(215,11,'204'),(216,11,'205'),(217,11,'206'),(218,11,'301'),(219,11,'302'),(220,11,'303'),(221,11,'304'),(222,11,'305'),(223,11,'306'),(224,11,'401'),(225,11,'402'),(226,11,'403'),(227,11,'404'),(228,11,'405'),(229,11,'406'),(230,12,'101'),(231,12,'102'),(232,12,'103'),(233,12,'104'),(234,12,'201'),(235,12,'202'),(236,12,'203'),(237,12,'204'),(238,12,'301'),(239,12,'302'),(240,12,'303'),(241,12,'304'),(242,12,'401'),(243,12,'402'),(244,12,'403'),(245,12,'404'),(246,13,'101'),(247,13,'102'),(248,13,'103'),(249,13,'201'),(250,13,'202'),(251,13,'203'),(252,13,'301'),(253,13,'302'),(254,13,'303'),(255,14,'101'),(256,14,'102'),(257,14,'103'),(258,14,'201'),(259,14,'202'),(260,14,'203'),(261,14,'301'),(262,14,'302'),(263,14,'303'),(264,15,'101'),(265,15,'102'),(266,15,'103'),(267,15,'104'),(268,15,'105'),(269,15,'201'),(270,15,'202'),(271,15,'203'),(272,15,'204'),(273,15,'205'),(274,15,'301'),(275,15,'302'),(276,15,'303'),(277,15,'304'),(278,15,'305'),(279,20,'101'),(280,20,'102'),(281,20,'103'),(282,20,'104'),(283,20,'201'),(284,20,'202'),(285,20,'203'),(286,20,'204'),(287,20,'301'),(288,20,'302'),(289,20,'303'),(290,20,'304'),(291,20,'401'),(292,20,'402'),(293,20,'403'),(294,20,'404'),(295,20,'501'),(296,20,'502'),(297,20,'503'),(298,20,'504'),(299,21,'101'),(300,21,'102'),(301,21,'103'),(302,21,'104'),(303,21,'201'),(304,21,'202'),(305,21,'203'),(306,21,'204'),(307,21,'301'),(308,21,'302'),(309,21,'303'),(310,21,'304'),(311,21,'401'),(312,21,'402'),(313,21,'403'),(314,21,'404'),(315,21,'501'),(316,21,'502'),(317,21,'503'),(318,21,'504'),(319,22,'101'),(320,22,'102'),(321,22,'103'),(322,22,'104'),(323,22,'105'),(324,22,'201'),(325,22,'202'),(326,22,'203'),(327,22,'204'),(328,22,'205'),(329,22,'301'),(330,22,'302'),(331,22,'303'),(332,22,'304'),(333,22,'305'),(334,22,'401'),(335,22,'402'),(336,22,'403'),(337,22,'404'),(338,22,'405'),(339,22,'501'),(340,22,'502'),(341,22,'503'),(342,22,'504'),(343,22,'505'),(344,22,'601'),(345,22,'602'),(346,22,'603'),(347,22,'604'),(348,22,'605'),(349,23,'101'),(350,23,'102'),(351,23,'103'),(352,23,'104'),(353,23,'105'),(354,23,'106'),(355,23,'107'),(356,23,'108'),(357,23,'109'),(358,23,'110'),(359,23,'201'),(360,23,'202'),(361,23,'203'),(362,23,'204'),(363,23,'205'),(364,23,'206'),(365,23,'207'),(366,23,'208'),(367,23,'209'),(368,23,'210'),(369,23,'301'),(370,23,'302'),(371,23,'303'),(372,23,'304'),(373,23,'305'),(374,23,'306'),(375,23,'307'),(376,23,'308'),(377,23,'309'),(378,23,'310'),(379,23,'401'),(380,23,'402'),(381,23,'403'),(382,23,'404'),(383,23,'405'),(384,23,'406'),(385,23,'407'),(386,23,'408'),(387,23,'409'),(388,23,'410'),(389,24,'101'),(390,24,'102'),(391,24,'103'),(392,24,'104'),(393,24,'105'),(394,24,'106'),(395,24,'107'),(396,24,'108'),(397,24,'109'),(398,24,'110'),(399,24,'201'),(400,24,'202'),(401,24,'203'),(402,24,'204'),(403,24,'205'),(404,24,'206'),(405,24,'207'),(406,24,'208'),(407,24,'209'),(408,24,'210'),(409,24,'301'),(410,24,'302'),(411,24,'303'),(412,24,'304'),(413,24,'305'),(414,24,'306'),(415,24,'307'),(416,24,'308'),(417,24,'309'),(418,24,'310'),(419,24,'401'),(420,24,'402'),(421,24,'403'),(422,24,'404'),(423,24,'405'),(424,24,'406'),(425,24,'407'),(426,24,'408'),(427,24,'409'),(428,24,'410'),(429,25,'101'),(430,25,'102'),(431,25,'103'),(432,25,'104'),(433,25,'105'),(434,25,'106'),(435,25,'107'),(436,25,'108'),(437,25,'109'),(438,25,'110'),(439,25,'201'),(440,25,'202'),(441,25,'203'),(442,25,'204'),(443,25,'205'),(444,25,'206'),(445,25,'207'),(446,25,'208'),(447,25,'209'),(448,25,'210'),(449,25,'301'),(450,25,'302'),(451,25,'303'),(452,25,'304'),(453,25,'305'),(454,25,'306'),(455,25,'307'),(456,25,'308'),(457,25,'309'),(458,25,'310'),(459,25,'401'),(460,25,'402'),(461,25,'403'),(462,25,'404'),(463,25,'405'),(464,25,'406'),(465,25,'407'),(466,25,'408'),(467,25,'409'),(468,25,'410'),(469,26,'101'),(470,26,'102'),(471,26,'103'),(472,26,'104'),(473,26,'105'),(474,26,'106'),(475,26,'107'),(476,26,'108'),(477,26,'109'),(478,26,'110'),(479,26,'201'),(480,26,'202'),(481,26,'203'),(482,26,'204'),(483,26,'205'),(484,26,'206'),(485,26,'207'),(486,26,'208'),(487,26,'209'),(488,26,'210'),(489,26,'301'),(490,26,'302'),(491,26,'303'),(492,26,'304'),(493,26,'305'),(494,26,'306'),(495,26,'307'),(496,26,'308'),(497,26,'309'),(498,26,'310'),(499,26,'401'),(500,26,'402'),(501,26,'403'),(502,26,'404'),(503,26,'405'),(504,26,'406'),(505,26,'407'),(506,26,'408'),(507,26,'409'),(508,26,'410');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserID` int(7) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Role` int NOT NULL,
  `Username` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `FacultyID` int(2) unsigned zerofill NOT NULL,
  `Email` varchar(50) NOT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `Username_UNIQUE` (`Username`),
  KEY `user_faculty_idx` (`FacultyID`),
  CONSTRAINT `user_faculty` FOREIGN KEY (`FacultyID`) REFERENCES `faculty` (`FacultyID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (0000003,'ba',1,'a','a',02,'englishtalent123@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'roms'
--

--
-- Dumping routines for database 'roms'
--
/*!50003 DROP PROCEDURE IF EXISTS `GetBuildingRoom` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetBuildingRoom`(IN building VARCHAR(3))
BEGIN
	SELECT DISTINCT RoomID, RoomNum, BuildingName, Location, FacultyName
	FROM room INNER JOIN (building LEFT JOIN faculty USING(BuildingID)) USING(BuildingID)
    WHERE BuildingName = building;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetFree` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetFree`(IN id INT, IN datee date)
BEGIN
	SELECT Start, End
    FROM register
    WHERE RoomID = id AND datee >= CURDATE() AND DateUse = datee;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRegister` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRegister`(IN id INT)
BEGIN
	SELECT BuildingName, RoomNum, FacultyName, DateUse, Start, End, Subject
    FROM register INNER JOIN (room INNER JOIN (building INNER JOIN faculty USING (BuildingID)) USING(BuildingID)) USING(RoomID)
    WHERE RegisterID = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRoom` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRoom`(IN id INT)
BEGIN
	SELECT RoomNum, BuildingName, FacultyName
    FROM room INNER JOIN (building INNER JOIN faculty USING(BuildingID)) USING(BuildingID)
    WHERE RoomID = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRoomList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRoomList`()
BEGIN
	SELECT DISTINCT RoomID, RoomNum, BuildingName, Location, FacultyName
	FROM room INNER JOIN (building LEFT JOIN faculty USING(BuildingID)) USING(BuildingID);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRoomNum` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRoomNum`(IN num INT)
BEGIN
	SELECT DISTINCT RoomID, RoomNum, BuildingName, Location, FacultyName
	FROM room INNER JOIN (building LEFT JOIN faculty USING(BuildingID)) USING(BuildingID)
    WHERE RoomNum = num;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRoomSchedule` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRoomSchedule`(IN id INT)
BEGIN
	SELECT RoomNum, BuildingName
    FROM room INNER JOIN building USING(BuildingID)
    WHERE RoomID = id;
    
    SELECT Name, Subject, DateUse, Start, End
    FROM register INNER JOIN user USING(UserID)
    WHERE RoomID = id AND DateUse >= CURDATE() AND (Start + 5 >= HOUR(CURRENT_TIME()) OR End + 5 >= HOUR(CURRENT_TIME()))
    ORDER BY DateUse, Start;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRoomSearch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRoomSearch`(IN num INT, IN building VARCHAR(3))
BEGIN
	SELECT DISTINCT RoomID, RoomNum, BuildingName, Location, FacultyName
	FROM room INNER JOIN (building LEFT JOIN faculty USING(BuildingID)) USING(BuildingID)
    WHERE RoomNum = num AND BuildingName = building;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUser`(IN id INT)
BEGIN
	SELECT Username, Name, FacultyID, Email, Role
    FROM roms.user
    WHERE UserID = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserProfile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUserProfile`(IN id INT)
BEGIN
	SELECT Name, FacultyName, Role
    FROM roms.user INNER JOIN roms.faculty USING(FacultyID)
    WHERE UserID = id;
    
    SELECT RegisterID, RoomNum, BuildingName, Subject, Location, DateUse, Start, End
	FROM (room INNER JOIN building USING(BuildingID)) INNER JOIN register USING(RoomID)
	WHERE UserID = id AND DateUse >= CURDATE() AND Start + 5 >= HOUR(CURRENT_TIME())
	ORDER BY DateUse, Start;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RegisterRoom` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RegisterRoom`(
	IN roomid INT,
    IN userid INT,
    IN day DATE,
	IN start INT,
    IN end INT,
    IN subject VARCHAR(50)
)
BEGIN
	INSERT INTO register(RoomID, UserID, DateUse, Start, End, Subject)
    VALUES(roomid, userid, day, start, end, subject);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateRegister` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateRegister`(
	IN registerid INT,
    IN day DATE,
	IN start INT,
    IN end INT,
    IN subject VARCHAR(50)
)
BEGIN
	UPDATE register
	SET
		DateUse = day,
        Start = start,
        End = end,
        Subject = subject
    WHERE RegisterID = registerid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUser`(
	IN id INT,
    IN username VARCHAR(30),
    IN name VARCHAR(50),
    IN faculty INT(2),
    IN email VARCHAR(50)
)
BEGIN
	UPDATE roms.user
    SET
		Username = username,
        Name = name,
        FacultyID = faculty,
        Email = email
    WHERE UserID = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-30 18:33:07
