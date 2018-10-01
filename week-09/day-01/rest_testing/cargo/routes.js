'use strict';

const express = require('express');
const app = express();
let actualCargo = {
  caliber25: 0,
  caliber30: 0,
  caliber50: 0,
  shipstatus: "empty",
  ready: false
}

app.get('/rocket', (req, res) => {
  res.status(200).json(actualCargo).send();
});

app.get('/rocket/fill', (req, res) => {
  if (req.query.caliber && req.query.amount) {

    if (req.query.caliber === '.50') {
      actualCargo.caliber50 = req.query.amount;
    } else if (req.query.caliber === '.30') {
      actualCargo.caliber30 = req.query.amount;
    } else if (req.query.caliber === '.25') {
      actualCargo.caliber25 = req.query.amount;
    } 
    
    let actualAmount = Number(actualCargo.caliber25) + Number(actualCargo.caliber30) + Number(actualCargo.caliber50);
    let actualShipStatus = actualAmount / 12500 * 100;
    
    if (actualShipStatus === 0) {
      actualCargo.shipstatus = "empty";
    } else if (actualShipStatus < 100) {
      actualCargo.shipstatus = `${actualShipStatus}%`;
    } else if (actualShipStatus === 100) {
      actualCargo.shipstatus = "full";
      actualCargo.ready = true;
    } else if (actualShipStatus > 100) {
      actualCargo.shipstatus = "overloaded"
    }  
    
    res.status(200).json({
      received: req.query.caliber,
      amount: req.query.amount,
      shipstatus: actualCargo.shipstatus,
      ready: actualCargo.ready
    }).send();
  } else {
    res.status(400).json({ error: "no ammunition provided"}).send();
  }  
});

module.exports = app;