const express = require('express');
const app = express();
const port = 3000

//route untuk halaman home
app.get('/',(req, res) => {
    res.send('Selamat datang di ExpressJS');
});

app.get('/home',(req, res) => {
    res.sendFile(__dirname + "/home.html");
});

//route untuk halaman about
app.get('/about',(req, res) => {
    // res.send('Ini halaman tentang saya');
    res.sendFile(__dirname + "/about.html");
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
    res.sendFile(__dirname + "/contact.html");
});

app.get('/use',(req, res) =>{
    res.send("<h2>  404 NOT FOUND </");
});

app.listen(port, () => {
    console.log(`server dapat di akses di http://localhost:${port}`);
});