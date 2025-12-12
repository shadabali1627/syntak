const fs = require('fs');
const path = require('path');
const https = require('https');

// Read .env.local manually
const envPath = path.join(__dirname, '..', '.env.local');
let apiKey = '';

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.+)/);
    if (match) {
        apiKey = match[1].trim();
    }
} catch (error) {
    console.error('Error reading .env.local:', error.message);
    process.exit(1);
}

if (!apiKey) {
    console.error('GOOGLE_GENERATIVE_AI_API_KEY not found in .env.local');
    process.exit(1);
}

const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.models) {
                console.log('Available Models:');
                const gemmaModels = json.models.filter(model => model.name.includes('gemma'));
                if (gemmaModels.length > 0) {
                    console.log('Gemma Models Found:');
                    gemmaModels.forEach(model => console.log(`- ${model.name}`));
                } else {
                    console.log('No Gemma models found.');
                }
            } else {
                console.log('No models found or error:', json);
            }
        } catch (e) {
            console.error('Error parsing response:', e.message);
        }
    });
}).on('error', (err) => {
    console.error('Error fetching models:', err.message);
});
