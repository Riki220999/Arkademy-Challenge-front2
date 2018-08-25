import promiseMiddleware from 'redux-promise-middleware'
import logger from "redux-logger"

const middlewares = [];

middlewares.push(logger);
middlewares.push(promiseMiddleware())

export default middlewares

