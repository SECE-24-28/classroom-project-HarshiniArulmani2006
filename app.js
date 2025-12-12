// let http=require('http');
// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'text/html'});
//     response.end('Hello Harshini!!');
// }).listen(8080);


//New Server
// const http=require('http');
// const server=http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/html'});

//     response.write('<h1>Hello Harshini!!</h1>');
//     response.write('<p>This is the HTML content served from Node.js</p>');
//     response.end();

// });
// new link in browser
// server.listen(3000,()=>{
//     console.log('Server running at http://localhost:3000/');
// });

//ctrl+c for stop the local host running

// const http=require('http');
// const server=http.createServer((request,response)=>{
// response.writeHead(200,{'Content-Type':'text/html'});

// response.write("<h1>Welcome to Harsh's Pasumai Hub!!</h1>");
// response.write("<p>Natural Food and Products directly to Your Home!!</p>");
// response.write("<p>Fresh Fruits and Vegetables.</p>");
// response.write("<p>Many Products Available at Low cost.</p>");
// response.end();

//  });
// server.listen(4000,()=>{
// console.log('Server running at http://localhost:4000/');
//  });
// const {MongoClient,ObjectId}=require('mongodb');
// const url='mongodb://localhost:27017/';// your mongodb url
// const dbName = 'studentdata'; //your database name
// const collectionName='students';

// //create a new mongo client
// const client=new MongoClient(url);
// async function main(){
//     try{
//         //connect to mongodb
//         await client.connect();
//         console.log('Connected successfully to MongoDB');
//         const db=client.db(dbName);
//         const collection=db.collection(collectionName);

//         //Create(insert/write)
//         console.log('\n--- Insert Operation ---');
//         const newUser=[{name:'harshini',email:'harsh@gmail.com',age:19},{name:'bala',email:'bala@gmail.com'},{name:'Arul',email:'arul@gmail.com'},{name:'Tamil',email:'tamil@gmail.com'}];
//         const insertResult=await collection.insertMany(newUser);
//         console.log(collection);
//         console.log('Insterted document:',insertResult.insertedId);

       

//     }catch(error){
//         console.error('Error:',error);

//     }finally{
//         await client.close();
//         console.log('\nConnection closed');
//     }
// }
// main();//run the main function

const {MongoClient,ObjectId}=require('mongodb');
const url='mongodb://localhost:27017/';// your mongodb url
const dbName = 'studentdata'; //your database name
const collectionName='students';

//create a new mongo client
const client=new MongoClient(url);
async function main(){
    try{
        //connect to mongodb
        await client.connect();
        console.log('Connected successfully to MongoDB');
        const db=client.db(dbName);
        const collection=db.collection(collectionName);

        //Create(insert/write)
        console.log('\n--- Insert Operation ---');
        const newUser=[{name:'harshini',email:'harsh@gmail.com',age:19},{name:'bala',email:'bala@gmail.com'},{name:'Arul',email:'arul@gmail.com'},{name:'Tamil',email:'tamil@gmail.com'}];
        const insertResult=await collection.insertMany(newUser);
        console.log(collection);
        console.log('Insterted document:',insertResult.insertedId);

       //Update One
       const updateOneResult = await collection.updateOne({name:"bala"},{ $set:{age:20}});
       console.log('UpdateOne Modified Count:',updateOneResult.updatedCount);

       //Update Many

       const updateManyResult = await collection.updateMany({age:{$gt:18}},{$set:{age:20}});
        console.log('UpdateMany Modified Count:', updateManyResult.updatedCount);

      //Delete One

      
    }catch(error){
        console.error('Error:',error);

    }finally{
        await client.close();
        console.log('\nConnection closed');
    }
}
main();//run the main function