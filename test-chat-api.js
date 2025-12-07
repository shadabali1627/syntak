// Native fetch is available in Node 18+

async function testChat() {
    console.log("Testing Chat API...");
    try {
        const response = await fetch('http://127.0.0.1:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [
                    { role: 'user', content: 'Hello, are you working?' }
                ]
            })
        });

        console.log(`Status: ${response.status} ${response.statusText}`);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error Body:", errorText);
        } else {
            console.log("Success! Stream started.");
            // Just read a bit of the stream to confirm
            const reader = response.body;
            // Node 18+ fetch returns a web stream, but node-fetch returns a node stream.
            // Let's just print text for simplicity if it's not a stream or handle basic stream dump
            // For debugging 500, response.text() above on error is most important.
        }

    } catch (error) {
        console.error("Network/Fetch Error:", error);
    }
}

testChat();
