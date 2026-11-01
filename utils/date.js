const dayjs = require("dayjs");

function getCurrentDate() {
    return dayjs().format("YYYY-MM-DD HH:mm:ss");
}

module.exports = getCurrentDate;
