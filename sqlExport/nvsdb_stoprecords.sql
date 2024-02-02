-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nvsdb
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `stoprecords`
--

DROP TABLE IF EXISTS `stoprecords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stoprecords` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserID` int DEFAULT NULL,
  `StopTime` datetime NOT NULL,
  `StopReasonCode` varchar(10) NOT NULL,
  `StartTime` datetime DEFAULT NULL,
  `PCName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserID` (`UserID`),
  KEY `StopReasonCode` (`StopReasonCode`),
  CONSTRAINT `stoprecords_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`),
  CONSTRAINT `stoprecords_ibfk_2` FOREIGN KEY (`StopReasonCode`) REFERENCES `stopreasons` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stoprecords`
--

LOCK TABLES `stoprecords` WRITE;
/*!40000 ALTER TABLE `stoprecords` DISABLE KEYS */;
INSERT INTO `stoprecords` VALUES (4,1,'2024-02-02 02:40:40','Code1','2024-02-02 02:40:40','pc1'),(5,1,'2024-02-02 02:41:30','Code1','2024-02-02 02:41:30','pc1'),(6,1,'2024-02-02 02:43:43','Code2','2024-02-02 02:43:48','pc1'),(7,1,'2024-02-02 02:43:43','Code2','2024-02-02 02:43:48','pc1'),(8,1,'2024-02-02 03:07:22','Code1','2024-02-02 03:07:23','pc1'),(9,1,'2024-02-02 03:07:22','Code1','2024-02-02 03:07:23','pc1'),(10,1,'2024-02-02 03:10:23','Code1','2024-02-02 03:10:25','pc1');
/*!40000 ALTER TABLE `stoprecords` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01 22:15:23
