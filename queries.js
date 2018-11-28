const db = require('./database-connection')

module.exports = {
    getAll() {
        return db('students')
    },
    getById(id){
        return db('students').where('id', id)
    },
    createStudent(newStudent) {
        return db('students').insert(newStudent)
    },
    createStudent2(newStudent) {
        return db('students').insert(newStudent).returning('*')
    }
}

// module.exports = {
//     getById(id){
//         return db.select(id).from('students')
//     }
// }

// module.exports = {
//     createStudent(callItWhatYouWill) {
//         return db('students')
//             .insert(callItWhatYouWill)
//     }
// }