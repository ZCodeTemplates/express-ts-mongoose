import { scrapeWebsite } from './webScraper.contoller';
import express from 'express';
import { wrapAsync } from '../../common/middlewares/wrapAsync';

const router = express.Router();

router.post('/', wrapAsync(scrapeWebsite));

export default router;
