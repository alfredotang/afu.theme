import express, { Application, Request, Response } from 'express';
import appRootPath from 'app-root-path';
import cheerio from 'cheerio';
import fs from 'fs';

const prodMiddleware = (app: Application) => {
    app.use('/', express.static(appRootPath.resolve('dist/public')));
    app.get('/health', (req: Request, res: Response) => {
        const html = fs.readFileSync(appRootPath.resolve('dist/public/index.html'), 'UTF-8');
        const $ = cheerio.load(html);
        const script = `
        <div style="display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    padding-top: 10%; 
                    color: green;">
            HEALTH
        </div>
        `;
        $('body').prepend(script);
        res.send($.html());
    });

    // all other requests be handled by UI itself
    app.get('*', (req: Request, res: Response) => {
        const html = fs.readFileSync(appRootPath.resolve('dist/public/index.html'), 'UTF-8');
        const $ = cheerio.load(html);
        const script = `<script>var env = { EDITABLE: ${process.env.EDITABLE} };</script>`;
        $('body').prepend(script);
        res.send($.html());
    });
};

export default prodMiddleware;
