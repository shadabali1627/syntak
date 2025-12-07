async function testUrl(url) {
    try {
        console.log(`Testing ${url}...`);
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: [{ role: 'user', content: 'hello' }] })
        });
        console.log(`Success: ${url} returned ${response.status}`);
        const text = await response.text();
        console.log('Body start:', text.slice(0, 100));
        return true;
    } catch (error) {
        console.log(`Failed: ${url} - ${error.cause ? error.cause.code : error.message}`);
        return false;
    }
}

async function run() {
    const v4 = await testUrl('http://127.0.0.1:3000/api/chat');
    const v6 = await testUrl('http://[::1]:3000/api/chat');

    if (!v4 && !v6) console.log('ALL TESTS FAILED. Server is definitely unreachable.');
}

run();
