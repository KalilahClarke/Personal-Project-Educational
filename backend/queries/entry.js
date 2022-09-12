const db = require('../db/dbConfig.js');

const getAllEntries = async () =>{
    try{
        const allEntries = await db.any('SELECT * FROM journal');
        console.log(allEntries)
        return allEntries;
    }catch(error){
        return error;
    }
};

const getEntry = async (id) =>{
    try{
        const oneEntry = await db.one('SELECT * FROM journal WHERE id=$1',id);
        return oneEntry
    }catch(error){
        return error
    }
}

const createEntry = async(entry) =>{
    const { date, name, start_time, end_time, image, entry_info } = entry
    try{
        const newEntry = await db.one(
            'INSERT INTO journal ( date, name, start_time, end_time, image, entry_info ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [date, name, start_time, end_time, image, entry_info]
        );
        console.log('create successful')
        return newEntry
    }catch(error){
        console.log('create unsuccessful', error)
        return error;
    }
}

const updateEntry = async(entry, id) =>{
    const {date, name, start_time, end_time, image, entry_info} = entry
    try{
        const updatedEntry = await db.one(
            'UPDATE journal SET date = $1, name = $2, start_time = $3, end_time =$4,image = $5, entry_info = $6 WHERE id = $7 RETURNING *',
            [date, name, start_time, end_time, image, entry_info, id]
        )
        return updatedEntry
    }catch(error){
        return error;
    }
};

const deleteEntry = async(id) =>{
    try{
        const deletedEntry = await db.one(
            'DELETE FROM journal WHERE id=$1 RETURNING *', id
        );
        return deletedEntry
    }catch(error){
        return error;
    }
}

module.exports = { getAllEntries, getEntry, createEntry, updateEntry, deleteEntry}
