/**
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *  @name:      Router
 *  @version:   1.0
 *  @author:    Morten Haugstad
 *  @description: Routing for Certificate Tracker
 * 
 *  @file: Router.js
 *  @description: Responsible for all the routing
 * 
 * 
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 */

const express = require('express');
const router = express.Router();

const CertificateController = require('../Controllers/certificateController');

// Default Routes
router.get('/certificate/list', CertificateController.getListAll);
router.get('/certificate/list/:id', CertificateController.getList);

router.post('/certificate/', CertificateController.postCreate);
router.post('/certificate/edit/:id', CertificateController.postEdit);
router.post('/certificate/delete/:id', CertificateController.postDelete);

module.exports = router;