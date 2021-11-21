import express, { Request, Response } from 'express';
const router = express.Router();
import TransactionController from '@src/controllers/transaction';

router.get('/transactions/balance', (_, res: Response) => {
  res.status(200).json(TransactionController.getBalance());
});

export default router;
