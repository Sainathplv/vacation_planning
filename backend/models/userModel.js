const pool = require('../config/db');

// Find user by email
exports.findUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0]; // Ensure you're returning the user object
};

// Create a new user
exports.createUser = async (name, email, phone, hashedPassword) => {
  const result = await pool.query(
    'INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING id, name, email',
    [name, email, phone, hashedPassword]
  );
  return result.rows[0]; // Return the created user
};
