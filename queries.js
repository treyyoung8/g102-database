const db = require('./database-connection')

module.exports = {
    getAll() {
        return db('students')
    },
    getById(id){
        return db('students').where('id', id)
    },
    createStudent(newStudent) {
        return db('students').insert(newStudent).returning('*')
    },
    deleteStudent(id){
        return db('students').where('id', id).delete()
    },
    updateStudent(id, student) {
        return db('students').where('id', id).update(student).returning('*')
    }
}