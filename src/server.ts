import express from 'express';

const app = express();

app.get('/', (request, response) => {
    
     console.log('Server is listening');
     return response.json({message: 'Everything is working again'})
});

app.listen(3333);