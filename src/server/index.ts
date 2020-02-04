import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'express-bunyan-logger';

import devMiddleware from './middlewares/development';
import prodMiddleware from './middlewares/production';

const app: Application = express();

app.use(logger());
app.use(bodyParser());
app.use(cookieParser());

const setupAppRoutes = process.env.NODE_ENV === 'development' ? devMiddleware : prodMiddleware;
setupAppRoutes(app);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404)
        .type('txt')
        .send('Not found....');
    next();
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

export default app;
