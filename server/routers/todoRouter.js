const isLogin = require('../middlewares/isLogin');
const express = require('express');
const router = express.Router();
const { addTodo, deleteTodo, updateTodo } = require('../controllers/todoControllers');


router.post('/addtodo', isLogin, addTodo );
router.delete('/deletetodo/:userid/:todoid', isLogin, deleteTodo);
router.put('/updatetodo/:userid/:index', isLogin, updateTodo);


module.exports = router;