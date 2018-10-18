/*
Navicat MySQL Data Transfer

Source Server         : cc
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : login

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-10-18 11:12:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for login_info
-- ----------------------------
DROP TABLE IF EXISTS `login_info`;
CREATE TABLE `login_info` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mark` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login_info
-- ----------------------------
INSERT INTO `login_info` VALUES ('1', '曹小诚', 'chm980322', '1');
INSERT INTO `login_info` VALUES ('2', 'cc12210', 'woshicc122', '1');
INSERT INTO `login_info` VALUES ('7', 'admin', 'admin', '1');
INSERT INTO `login_info` VALUES ('9', '曹小诚123', '123456', '1');
INSERT INTO `login_info` VALUES ('10', 'cc100104', 'chm980322', '1');
