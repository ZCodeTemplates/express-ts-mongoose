import { ReqBody } from '../../common/types/express.types';
import puppeteer from 'puppeteer';
import { z } from 'zod';

const PUPPERTEER_OPTIONS = {
    COMPLETE_LOAD: 'networkidle0',
    PARTIAL_LOAD: 'networkidle2'
} as const;

const scrapeWebsiteSchema = z.object({ url: z.string().url() });

type ScrapeWebsiteReq = ReqBody<z.infer<typeof scrapeWebsiteSchema>>;

export const scrapeWebsite = async (req: ScrapeWebsiteReq) => {
    const { body } = req;
    const { url } = scrapeWebsiteSchema.parse(body);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: PUPPERTEER_OPTIONS.PARTIAL_LOAD });
    const pageTitle = await page.title();

    await browser.close();
    return { title: pageTitle };
};
