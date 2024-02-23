const list = [
    {
      id: 1,
      title: "Uni Kebap",
      author: " im Brot mit Fleisch,Salat,Sauce",
      price: 7,
      img: "https://i1.wp.com/elit-hilden.de/wp-content/uploads/2020/01/doener-kebap.jpg?fit=1000%2C666&ssl=1",
      amount: 1,
      number:1,
    },
    {
      id: 2,
      title: "Pomm-Döner",
      author: " im Brot mit Fleisch,Pommes, Sauce",
      price: 8,
      img: "https://previews.123rf.com/images/philkinsey/philkinsey1310/philkinsey131000018/22637295-ein-lieferservice-döner-in-einem-fladenbrot-mit-pommes-frites-isoliert.jpg",
      amount: 1,
      number:'1a',
    },
    {
      id: 3,
      title: "Uni Kebap Sezial",
      author: "im Fladenbrot mit Fleisch,Salat, Sauce & Weißkäse",
      price: 8,
      img: "https://www.radiobonn.de/externalimages/?source=jpg255/doener-1.jpg&crop=0x252x4032x2520&resize=1280x800&dt=202008061234180",
      amount: 1,
      number:2,
    },
    ,
    {
      id: 4,
      title: "Uni Kebap",
      author: "im FLadenbrot nur mit Fleisch,Sauce",
      price: 8,
      img: "https://t1.pixers.pics/img-1fb6f67c/carte-da-parati-kebab-in-un-panino-con-salsa-di-aglio.jpg?H4sIAAAAAAAAA3WOS27DMAxEryMDssnoa_kA2eYIhqzIqVt_BElpg56-NIouCy44HGD4Bp578XOEEPcaM2zL_b5GmJeVrjLkWJbvyCwqjs1A7soQSR2fMYd8JNb2PW8Fam6d4MbqZvjylNx8_mBvtaYyABTZpeVF72iFAmErIPBiAQ1op5WXerLGT36sPsXqW_kSXdofHM9p_jooRK5Ods3LxqjMQZTK3tOjgX9IvxooBdcbWASJoCVBT2u83ixK1FK7EY2yxkgr3Tw546NyImgjXJR4QWH7jig_q_JeNSkBAAA=",
      amount: 1,
      number:3,
    },
    {
      
      number:4,
      id: 5,
      title: "Uni kebap Mega ",
      author: "im Fladenbrot mit extra Fleisch,Salat & Sauce ",
      price: 8,
      img: "https://i1.wp.com/elit-hilden.de/wp-content/uploads/2020/01/doener-kebap.jpg?fit=1000%2C666&ssl=1",
      amount: 1,
      
    },
    
    {
      
      number:5,
      id: 6,
      title: "Uni kebap Mega Sezial",
      author: "im Fladenbrot mit extra Fleisch,Salat & Sauce ",
      price: 8.5,
      img: "https://i1.wp.com/elit-hilden.de/wp-content/uploads/2020/01/doener-kebap.jpg?fit=1000%2C666&ssl=1",
      amount: 1,
      
    },  
     {
      
      number:6,
      id: 7,
      title: "Uni kebapteller (Klein)",
      author: "mit Beilage ,Salat & Sauce ",
      price: 10,
      img: "https://t4.ftcdn.net/jpg/04/01/02/31/360_F_401023157_W3BVEOjxtNrvte1jPgMhq0G58a3532eP.jpg",
      amount: 1,
      
    },
    {
      
      number:7,
      id: 8,
      title: "Uni kebapteller (groß)",
      author: "mit Beilage ,Salat & Sauce ",
      price: 12,
      img: "https://t4.ftcdn.net/jpg/04/01/02/31/360_F_401023157_W3BVEOjxtNrvte1jPgMhq0G58a3532eP.jpg",
      amount: 1,
      
    },
    {
      
      number:8,
      id: 9,
      title: "Uni kebapteller Spezial",
      author: "mit Beilage,Salat,Käse ",
      price: 13,
      img: "https://t4.ftcdn.net/jpg/04/01/02/31/360_F_401023157_W3BVEOjxtNrvte1jPgMhq0G58a3532eP.jpg",
      amount: 1,
      
    },
    {
      
      number:9,
      id: 10,
      title: "Chickendöner",
      author: "im Fladenbrot mit Salat & Sauce ",
      price: 7,
      img: "https://i1.wp.com/elit-hilden.de/wp-content/uploads/2020/01/doener-kebap.jpg?fit=1000%2C666&ssl=1",
      amount: 1,
      
    },
    {
      
      number:10,
      id: 11,
      title: "Chickendöner Spezial",
      author: "im Fladenbrot mit Salat,Sauce,Weißläse ",
      price: 8,
      img: "https://i1.wp.com/elit-hilden.de/wp-content/uploads/2020/01/doener-kebap.jpg?fit=1000%2C666&ssl=1",
      amount: 1,
      
    },
    {
      
      number:11,
      id: 12,
      title: "Mega Chickendöner",
      author: "im Fladenbrot mit extra Fleisch,Salat & Sauce ",
      price: 8,
      img: "https://i1.wp.com/elit-hilden.de/wp-content/uploads/2020/01/doener-kebap.jpg?fit=1000%2C666&ssl=1",
      amount: 1,
      
    },
    {
      
      number:12,
      id: 13,
      title: "Mega Chickendöner Spezial",
      author: "im Fladenbrot mit extra Fleisch,Weißkäse, Salat, Sauce ",
      price: 8.5,
      img: "https://i1.wp.com/elit-hilden.de/wp-content/uploads/2020/01/doener-kebap.jpg?fit=1000%2C666&ssl=1",
      amount: 1,
      
    },
    {
      
      number:13,
      id: 14,
      title: "Chicken Teller(klein)",
      author: "im Beilage, Salat & Sauce ",
      price: 10,
      img: "https://as1.ftcdn.net/v2/jpg/02/67/20/08/1000_F_267200813_acA2ix0AM9UPNccvdXP0Png7xz9srLOH.jpg",
      amount: 1,
      
    },
    {
      
      number:14,
      id: 15,
      title: "Chicken Teller(größ)",
      author: "im Beilage, Salat & Sauce ",
      price: 12,
      img: "https://as1.ftcdn.net/v2/jpg/02/67/20/08/1000_F_267200813_acA2ix0AM9UPNccvdXP0Png7xz9srLOH.jpg",
      amount: 1,
      
    },
    {
      
      number:15,
      id: 16,
      title: "Chickenteller Spezial",
      author: "im Beilage, Salat , Käse ",
      price: 13,
      img: "https://as1.ftcdn.net/v2/jpg/02/67/20/08/1000_F_267200813_acA2ix0AM9UPNccvdXP0Png7xz9srLOH.jpg",
      amount: 1,
      
    },
    {
      
      number:16,
      id: 17,
      title: "uni kebap box",
      author: "uni kebap o. Chickenfleisch mit Pommes",
      price: 8,
      img: "https://www.kebabupetra.sk/wp-content/uploads/2021/09/03.png",
      amount: 1,
      
    },
    {
      
      number:'16a',
      id: 18,
      title: "uni kebap box",
      author: "mit Fleisch, Pommes & Salat",
      price: 8.5,
      img: "https://www.kebabupetra.sk/wp-content/uploads/2021/09/03.png",
      amount: 1,
      
    },
    {
      
      number:17,
      id: 19,
      title: "Fladenbrot",
      author: "mit Sauce",
      price: 2,
      img: "https://i.pinimg.com/736x/57/fd/0a/57fd0aab4c4b42e8b7d4f8af7f4ce822.jpg",
      amount: 1,
      
    },
    {
      
      number:18,
      id: 20,
      title: "Kiner Kebap",
      author: "mit Fladenbrot mit Fleisch,Salat,Sauce",
      price: 6.5,
      img: "https://i1.wp.com/elit-hilden.de/wp-content/uploads/2020/01/doener-kebap.jpg?fit=1000%2C666&ssl=1",
      amount: 1,
      
    },




  
  

  ];
  
  export default list;

