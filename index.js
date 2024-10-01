const express = require('express');
const app = express();
const expressLayout = require("express-ejs-layouts");
const port = 3000

app.set("views",__dirname + "/views");
app.set('view engine','ejs');
//route untuk halaman home
// app.get('/',(req, res) => {
//     res.send('Selamat datang di ExpressJS');
// });

app.use(expressLayout);
app.use(express.static("public"));

app.get('/prodi',(req, res) => {
    const prodi = [
        {
            namaprodi:'Sistem Informasi',
            fakultas:'FIKR',
            singkatan:'SI'
        },
        {
            namaprodi:'Informatika',
            fakultas:'FIKR',
            singkatan:'IF'
        },
        {
            namaprodi:'Teknik ELektro',
            fakultas:'FIKR',
            singkatan:'TE'
        },
        {
            namaprodi:'Manajemen Informatika',
            fakultas:'FIKR',
            singkatan:'MI'
        },
        {
            namaprodi:'Manajemen',
            fakultas:'FEB',
            singkatan:'MJ'
        },
        {
            namaprodi:'Akuntansi',
            fakultas:'FEB',
            singkatan:'AK'
        }
    ];
    res.render('prodi',{title: 'Halaman Prodi',prodi,layout:'main'});
});

app.get('/',(req, res) => {
    // res.send("Hello");
    // res.sendFile(__dirname + "/index.html");
    const berita = [
        {
            judul:'Berita 1',
            isi:'isi berita 1'
        },
        {
            judul:'Berita 2',
            isi:'isi berita 2'
        },
    ];
    res.render('index',{title: 'Halaman Home',berita,layout:'main'});
});

//route untuk halaman about
app.get('/about',(req, res) => {
    // res.send('Ini halaman tentang saya');
    // res.sendFile(__dirname + "/about.html");
    res.render('about',{title:'About Us',layout:'main'});
});

app.get('/mahasiswa',(req, res) =>{
    res.json({
        "status" : "success",
        "message" : "Data Mahasiswa",
        "data" : 
        [{
            npm: 2226240016, 
            nama:"Bryan"},
        {
            npm: 2226240034, 
            nama:"Matius"},
        {
            npm: 2226240043, 
            nama:"Yulianus"}]
    })
});

app.get('/dosen',(req, res) =>{
    res.json({
        "status" : "success",
        "message" : "Data Dosen",
        "data" : [
            {
                prodi:"Sistem Informasi",
                dosen:["Iis","Faris","Dafid"]
            },
            {
                prodi:"Informatika",
                dosen:["Derry","Siska","Yohannes"]
            },
        ]
    })
});

app.get('/contact',(req, res) =>{
    // res.send('Contact Us');
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact',{title:'Contact',layout:'main'});
});

app.get('/use',(req, res) =>{
    res.send("<h2>  404 NOT FOUND </");
});

app.listen(port, () => {
    console.log(`server dapat di akses di http://localhost:${port}`);
});