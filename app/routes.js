// module.exports = function(app) {

//     app.get('/',function(req,res){ // İSTEMCİNİN '/' İSTEĞİNE KARŞILIK VEREN KOD BLOĞU
//         res.render('index'); // INDEX VİEW DOSYASI RENDER EDİLDİ
//     });

// }

module.exports = function(app) {
    app.get('/', (req, res) => {
      res.render('index', { title: 'Welcome', message: 'Node is working!' });
    });
  };
  