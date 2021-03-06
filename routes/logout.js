var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res) {
    req.session.username = null; // 删除session
    req.session.uid = null;
    req.session.destroy();
    res.json({ "status": 'success', "msg": 'ok' });
    return;
});
router.get('/', function (req, res) {
    res.render('logout');
    return;
});

module.exports = router;
