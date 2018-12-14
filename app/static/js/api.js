const devApi = 'http://10.36.141.173:7843/server/';
var api = devApi;
const apiObj = {
    store:api+'json/phone.json',
    login_check: api + 'php/login_check.php',
    login_send: api + 'php/login_send.php',
    register_check: api + 'php/register_check.php',
    register_send: api + 'php/register_send.php'
}