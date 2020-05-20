const poker = require('./lib/node-poker');
import jsHttpCookie from 'cookie';


export default function configGame(req, res) {
  
  if (req.method === 'POST' && req.body) {
    // console.log(req.body['smallBlind'])
    // Process a POST request
    // console.log('table1', table);

    var table = new poker.Table(
      req.body['smallBlind'],
      req.body['bigBlind'],
      req.body['minPlayers'],
      req.body['maxPlayers'],
      req.body['minBuyIn'],
      req.body['maxBuyIn']
    );
    // console.log('table2', table);
    var players = req.body.players;
    players.forEach(function (item) {
      
       table.AddPlayer(item.name, item.chips);    
       console.log("Player :" + item.name + " added");  
    });

    // console.log('table3', table);
    //  console.log('playersToAdd', table.playersToAdd);

    var game = table.StartGame();
    console.log(table.game);

    res.statusCode = 200;
    // var game = table.game;
    res.json({ message: 'Table configured' });
  
  } else {
    // Handle any other HTTP method
    res.statusCode = 200;
    res.json({ message: 'Table not configured' });
  }
};


  