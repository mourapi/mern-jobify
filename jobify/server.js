import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express, { response } from "express";
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';

// import { validateTest } from './middleware/validationMiddleware.js';


// routers
import jobRouter from './routers/jobRouter.js';


// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

app.use(express.json());

app.get('/', (req,res)=> {
    res.send('Hello Wolrd');
});


app.use('/api/v1/jobs', jobRouter);


// Test Route

app.post(
  '/api/v1/test', 
   [
    body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ min: 50 })
    .withMessage('name must be at least 50'),
   
  ],
   (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      const errorMessages = erros.array().map((error)=>error.msg);
      return res.status(400).json({ errors: errorMessages });
    }
    next();
},
  (req, res) => {
     const { name } = req.body;
     res.json({ msg: `hello ${name}` });
  }
);

// Not found middleware

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
  });

// #### Error Middleware

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server running on PORT ${port}....`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  };

 /* mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("A conexão com o MongoDB foi realizada com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });  */
/*
app.listen(port, ()=> {
    console.log(`server running on PORT ${port}...`);
});*/