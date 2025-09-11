// 1) carregar .env antes de tudo
import dotenv from 'dotenv';
dotenv.config();

// 2) imports
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';

// rotas
import doctorRoutes from './routes/doctor.js';

// 3) app e middlewares
const app = express();

app.use(cors({
  origin: ['http://localhost:3000'], // ajuste se o front rodar em outra URL/domínio
  credentials: true,
}));
app.use(express.json());           // substitui body-parser.json
app.use(cookieParser());
app.use(fileUpload());
app.use(express.static('doctors')); // garanta que a pasta exista

// 4) rotas
app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});
app.use('/', doctorRoutes);

// 5) handler de erros
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Something went wrong',
    status,
    stack: err.stack,
  });
});

// 6) conexão Mongo + start
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    // use a string completa no .env (com DB name): process.env.MONGO
    await mongoose.connect(process.env.MONGO);
    console.log('✅ Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
}

start();
