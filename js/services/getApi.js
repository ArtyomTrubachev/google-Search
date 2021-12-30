
    const getApi = async (url) => {
        const result = await fetch(url, {
            method: "GET",
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': "87be083d19msh70dbd96fd2e8374p169566jsnb6aa20f742f5"
            }
        });
        return result.json();
    }

    export {getApi};