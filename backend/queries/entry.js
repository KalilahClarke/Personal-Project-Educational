const { all } = require('../app');
const db = require('../db/dbConfig.js');

const getAllEntries = async() =>{
    try{
        const allEntries = await db.any('SELECT * FROM journal');
        console.log(allEntries)
        return allEntries;
    }catch(error){
        return error;
    }
};

const getEntry = async(id) =>{
    try{
        const oneEntry = await db.one('SELECT * FROM journal WHERE id=$1',id);
        return oneEntry
    }catch(error){
        return error
    }
}

const createEntry = async(entry) =>{
    const { date, name, image, entryInfo } = journal
    try{
        const newEntry = await db.one(
            'INSERT INTO journals ( date, name, image, entryInfo ) VALUES ($1, $2, $3, $4) RETURNING *',
            [date, name, image, entryInfo]
        );
        console.log('create successful')
        return newEntry
    }catch(error){
        console.log('create unsuccessful', error)
        return error;
    }
}

const updateEntry = async(entry, id) =>{
    const {date, name, image, entryInfo} = entry
    try{
        const updatedEntry = await db.one(
            'UPDATE journal SET date = $1, name = $2, image = $3, entryInfo = $4 WHERE id = $5 RETURNING *',
            [date, name, image, entryInfo, id]
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
