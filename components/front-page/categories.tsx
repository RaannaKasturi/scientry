import { useEffect, useRef } from 'react';

async function fetch_event_id() {
    const url = 'https://raannakasturi-scientrydatafetcher.hf.space/gradio_api/call/fetch_data';
    const data = {
        data: ["Science", ""]
    };
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    const event_id = json['event_id'];
    return event_id;
}

async function fetch_data(event_id: string) {
    const url = `https://raannakasturi-scientrydatafetcher.hf.space/gradio_api/call/fetch_data/${event_id}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const json = await response.text().then((text) => {
        try {
            return JSON.parse(text);
        } catch (error) {
            return error;
        }
    });
    const data = (json);
    return data;
}

export default function Categories() {
    const hasFetched = useRef(false);
    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        (async () => {
            const event_id = await fetch_event_id();
            const data = await fetch_data(event_id);
            console.log(data);
        })();
    }, []);
    return (
        <div className="mt-20">
            <h1>Categories</h1>
        </div>
    );
}
