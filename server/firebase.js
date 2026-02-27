const admin = require("firebase-admin");

// TODO: Download a service account key from Project Settings > Service Accounts
// and save it as "serviceAccountKey.json" in this directory.
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
