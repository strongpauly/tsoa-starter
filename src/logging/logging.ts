import * as winston from "winston";

const level = process.env.LOG_LEVEL || "debug";

const toString = winston.format.printf(info => {
    return `${info.timestamp} - ${info.level}: ${info.message}`;
});

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    transports: [
        new winston.transports.Console({
            level,
            format: toString
        })
    ]
});

