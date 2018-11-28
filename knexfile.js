// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/g102_student_db'
  },

  productiontouch: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
