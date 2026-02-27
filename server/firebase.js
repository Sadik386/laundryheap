const admin = require("firebase-admin");
const fs = require("fs");

// Load Firebase service account in one of three ways (in order):
// 1. SERVICE_ACCOUNT_BASE64 env var (preferred) — base64 of the JSON file
// 2. SERVICE_ACCOUNT_JSON env var — raw JSON string
// 3. local serviceAccountKey.json file (legacy / local dev)

let serviceAccount;
if (process.env.SERVICE_ACCOUNT_BASE64) {
    try {
        const jsonStr = Buffer.from(process.env.SERVICE_ACCOUNT_BASE64, 'base64').toString('utf8');
        serviceAccount = JSON.parse(jsonStr);
    } catch (err) {
        throw new Error('Failed to parse SERVICE_ACCOUNT_BASE64: ' + err.message);
    }
} else if (process.env.SERVICE_ACCOUNT_JSON) {
    try {
        serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_JSON);
    } catch (err) {
        throw new Error('Failed to parse SERVICE_ACCOUNT_JSON: ' + err.message);
    }
} else if (fs.existsSync(__dirname + '/serviceAccountKey.json')) {
    // Fallback for local development only. Do NOT commit this file to git.
    serviceAccount = require('./serviceAccountKey.json');
} else {
    throw new Error('No Firebase service account provided. Set SERVICE_ACCOUNT_BASE64 or SERVICE_ACCOUNT_JSON, or add serviceAccountKey.json locally.');
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
