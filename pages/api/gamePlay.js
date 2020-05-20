const poker = require('./lib/node-poker');
import jsHttpCookie from 'cookie';

export default (req, res) => {
  
    if (req.method === 'POST' && req.body) {

  
      table.StartGame();
  
      res.statusCode = 200;
      // var game = table.game;
      res.json({ message: 'Game Started' });
    
    } else {
      // Handle any other HTTP method
      res.statusCode = 200;
      res.json({ message: 'Game not Started' });
    }
  };