import mysql  from 'mysql2';

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'if_pam_promocoes'
  });

export default database.promise();