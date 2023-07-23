const express = require('express');
const router = express.Router();
const { handleError } = require('../utils/handleErrors');
const mysql = require('mysql');
require('dotenv').config();


const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT
});

// קריאת נתונים
router.get('/', async (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results, fields) => {
    if (err) {
      return handleError(res, err.status || 500, err.message);
    }
    res.send(results);
  });
});

// הוספת נתונים
router.post('/addUser', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      country,
      city,
      email,
      phone_number,
      job_title,
      years_of_experience,
    } = req.body;

    const query = `INSERT INTO users (first_name, last_name, country, city, email, phone_number, job_title, years_of_experience) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      first_name,
      last_name,
      country,
      city,
      email,
      phone_number,
      job_title,
      years_of_experience,
    ];
    db.query(query, values, (err, result) => {
      if (err) {
        return handleError(res, err.status || 500, err.message);
      }
      res.send(result);
    });
  } catch (error) {
    handleError(res, 500, error.message);
  }
});

// מחיקת נתונים
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await deleteData(parseInt(id));
    return res.send(deletedData);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

// עדכון נתונים
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name } = req.body;
    const updatedData = await updateData(parseInt(id), first_name);
    return res.send(updatedData);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

// פונקציה למחיקת נתונים
function deleteData(id) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('שגיאה בשאילתת DELETE:', err);
        reject(err);
      }
      resolve(result);
    });
  });
}

// פונקציה לעדכון נתונים
function updateData(id, first_name) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE users SET first_name = ? WHERE id = ?';
    db.query(query, [first_name, id], (err, result) => {
      if (err) {
        console.error('שגיאה בשאילתת UPDATE:', err);
        reject(err);
      }
      resolve(result);
    });
  });
}

// סגירת החיבור לאחר שכל השאילתות עם הבסיס נתונים הושלמו
function closeDBConnection() {
  db.end();
}

// מחיקת הנתיב בסיום הסקירה של כל השאילתות עם הבסיס נתונים
router.use((req, res, next) => {
  closeDBConnection();
  next();
});

module.exports = router;
