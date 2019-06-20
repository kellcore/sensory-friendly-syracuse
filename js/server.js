const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const moment = require('moment');
const fs = require('fs');

const Sequelize = require('sequelize');

const db = new Sequelize('postgres')