/*

GEREKLİ PAKETLER YÜKLENİYOR...

*/
// const express = require('express');
// const app = express();
// app.listen(3000, () => console.log('Server running on port 3000'));

// var http = require('http');
// var express = require('express');

// var app = express();

// app.set('port', process.env.PORT || 3005); // GİRİŞ PORTU AYARLANDI
// app.set('views', __dirname + '/app/server/views'); // VIEW KLASÖRÜ TANITILDI
// app.set('view engine', 'ejs'); // VIEW ENGINE AYARLANDI
// app.use(express.static(__dirname + '/app/public')); // KULLANICILAR TARAFINDAN ERİŞİLEBİLEN KLASÖR TANIMLANDI

// require('./app/routes')(app); // ROUTE DOSYASI ÇAĞIRILDI

// /*

// HTTP SERVER OLUŞTURULDU

// */
// http.createServer(app).listen(app.get('port'), function(){
// 	console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
// });


const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

// === Application Configuration ===
const PORT = process.env.PORT || 3005;

app.set('port', PORT);
app.set('views', path.join(__dirname, 'app/server/views'));
app.set('view engine', 'ejs');

// === Static Files ===
app.use(express.static(path.join(__dirname, 'app/public')));

// === Route Definitions ===
try {
  require('./app/routes')(app); // Load routes from external module
} catch (err) {
  console.error("Failed to load routes:", err.message);
  // Optional fallback route
  app.get('/', (req, res) => {
    res.send('Default route is active. No routes file found.');
  });
}

// === Start Server ===
http.createServer(app).listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
