const express = require('express');
let lolChampions = require('lol-champions');
//console.log(lolChampions);

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.set('view engine', 'ejs'); // Da bi ukljucili ejs u aplikaciju

app.get('/', (req, res) => {
    res.render('index', {champions: lolChampions});
});

app.get('/champion/:id', (req, res) => {
    let champion = lolChampions.find(el => el.id === req.params.id);
    let colors = {
      Fighter: 'danger',
      Assassin: 'success',
      Mage: 'warning',
      Tank: 'info',
      Support: 'primary',
      Marksman: 'secondary',
    };
    res.render('champion', {champion, colors});
});

// app.get('/delete/:id', (req, res) => {
//   lolChampions = lolChampions.filter((el) => el.id !== req.params.id);
//   res.redirect('/');
// });

app.listen(3000, function() {
    console.log('Server running ...');
});