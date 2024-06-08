import express from 'express';
import accountRoutes from './mvc/account/account.routes';
import webScraperRoutes from './mvc/webScraper/webScraper.routes';

const router = express.Router();

router.use('/account', accountRoutes);
router.use('/webScraper', webScraperRoutes);

export default router;
