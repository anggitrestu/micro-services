require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const mediaRouter = require('./routes/media');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const refreshTokensRouter = require('./routes/refreshTokens');
const mentorRouter = require('./routes/mentors');
const chapterRouter = require('./routes/chapters');
const lessonRouter = require('./routes/lessons');
const reviewRouter = require('./routes/reviews');
const imageCourseRouter = require('./routes/imageCourses');
const myCourseRouter = require('./routes/myCourses');

const verifyToken = require('./middlewares/verifyToken');

var app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/media', mediaRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);
app.use('/refresh-tokens', refreshTokensRouter);
app.use('/mentors', verifyToken, mentorRouter);
app.use('/chapters', verifyToken, chapterRouter);
app.use('/lessons', verifyToken, lessonRouter);
app.use('/reviews', verifyToken, reviewRouter);
app.use('/image-courses', verifyToken, imageCourseRouter);
app.use('/my-courses', verifyToken, myCourseRouter);
module.exports = app;
