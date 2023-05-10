const getUsers = require('./json/getUsers.json')

module.exports = {
    getUsers: getUsers
};

module.exports = (fileName: any) => {
    try {
        return require(`./${fileName}.json`);
    }
    catch (err) {
        return `${err}`;
    }
}