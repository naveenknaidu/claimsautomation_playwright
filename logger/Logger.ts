const {createLogger, transports, format} = require('winston');
const moment = require('moment');
// this is for logging every step
//const date = new Date().toISOString().slice(0,10);
const date = moment().format('YYYY-MM-DD-HH-mm');
const automationLogger = createLogger({
    transports:[
        new transports.File({
            filename: `logs/automation-info-${date}.log`,
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.Console({
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})
module.exports = {automationLogger}
