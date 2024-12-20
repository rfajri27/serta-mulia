const { Firestore } = require('@google-cloud/firestore');
const databaseId = 'serta-mulia';

async function storeData(id, data) {
    const db = new Firestore({ databaseId: databaseId });

    const predictCollection = db.collection('prediction');
    return predictCollection.doc(id).set(data);
}

module.exports = storeData;