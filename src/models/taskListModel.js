// armazenar listas de tarefas
let taskList = [
    { id: '1', title: 'estudos', },
    { id: '1', title: 'tarefas de casa', },
    { id: '1', title: 'Coisas do trabalho', }
]

module.exports = {
    getAllTaskList: () => {
        return taskList
    },

    createList: (title) => {
        const newList = {
            id: Math.floor(Math.random() * 9999999).toString(),
            title: title
        }
        return newList
    },

    saveList: (taskLists) => {
        if (taskLists.title === '') throw new Error('Título da lista não pode ficar vazio.')
        taskLists.push(taskLists)
    },

}