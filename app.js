import express from "express";
import routes from "./src/routes/userRoutes";
// import sha256 from 'crypto-js/sha256';
// import CryptoJS from "crypto-js";
// Encrypt
// var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
 
// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
 
// console.log(bytes); 
// console.log(originalText); // 'my message'
 const app = express();

app.use(express.json());

app.use((req,resp,next)=>{
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'OPTOINS, GET, POST, DELETE, PUT');
    resp.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

routes(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Our server is listening on the ${PORT} port`);
});
