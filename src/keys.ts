require('dotenv').config();
export default {
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
<<<<<<< HEAD
        port: process.env.DB_PORT
=======
	port: process.env.DB_PORT
>>>>>>> 464261690a2c30f553ac9ffcc85b1960da25cd92
    }
}
