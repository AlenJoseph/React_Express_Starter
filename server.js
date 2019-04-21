const express = require('express');
const cors = require("cors");
const mysql= require('mysql');
const app = express();


/*......................................................................... */
const connection =  mysql.createConnection({
  host:'localhost',
  user :'root',
  password:'root',
  database:'react_sql'
});
connection.connect(err=>{
  if(err){
      return err;
  }
});
 
/*......................................................................... */
app.use(cors());
app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Alen', lastName: 'Joseph'},
    {id: 2, firstName: 'Jane', lastName: 'Dain'},
    {id: 3, firstName: 'John', lastName: 'Doe'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
