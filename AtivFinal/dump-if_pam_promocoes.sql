-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deviceAutor` varchar(256) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `shop` varchar(256) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (4,'hsgagwcaab36016',119.97,'Vestido Vermelho Longo sem Bojo','BakVestidos','https://i.ibb.co/jGm207y/d35f3cba38cb.jpg','2023-12-29 18:19:30'),(5,'aa09432908n36016',85.9,'Vestido vermelho Franzido sem bojo','Shop Da Moda','https://i.ibb.co/r2gZJbq/d94a966a4d2b.jpg','2023-12-29 18:37:03'),(6,'acslllewo239aa16',455.8,'Vestido vermelho de Grif','ALI Fashion','https://i.ibb.co/jgnVjmW/1271fd93b33c.jpg','2023-12-29 18:48:25');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

