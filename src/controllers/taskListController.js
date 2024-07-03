const taskListModel = require("../models/taskListModel")

module.exports = {
    //get /app

    index: (req, res) => {
        const taskList = taskListModel.getAllTaskList()
        res.render('app', { taskList })
    },

    //get //app/nova-lista

    create: (req, res) => {
        res.render('create.ejs')
    },

    //post / app/nova-lista

    save: (req, res) => {
        const { title } = req.body

        const newList = taskListModel.createList(title)
        taskListModel.saveList(newList)

        res.redirect('/app')
    },


    //get / app/:id



    //get / app/:id/excluir

}