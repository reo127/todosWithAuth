const User = require("../schema/userSchema");


// Add Todo  ------------------------------------------>>>
exports.addTodo = async (req, res) => {
    try {
        const { tasks } = req.body;
        let reqUser = res.user

        // Find user and add todo
        await User.findOneAndUpdate(
            { _id: reqUser._id },
            {
                $push: {
                    tasks: {
                        todos: tasks
                    }
                }
            }
        )

        const user = await User.findById({ _id: reqUser._id })

        // Hide password and send updated user
        user.password = undefined;
        res.json({ user })

    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}



// Delete Todo ----------------------------------------->>
exports.deleteTodo = async (req, res) => {
    try {
        const { userid, todoid } = req.params;
        
         await User.updateOne(
            {_id : userid},
            { $pull : {
                tasks : {_id : todoid }
            }}
        )
        
        res.status(202).json({deleted : "ok"})

    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}



// Update Todo ----------------------------------------->>

exports.updateTodo = async ( req, res ) => {
    try {
        const {userid, index } = req.params;
        console.log(userid, index);


        await User.updateOne(
            {_id : userid},
            { $set : { ["tasks."+index+".todos"] : req.body.todoUpdate }}
        )

        res.status(202).json({Updated : "ok"})
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}

