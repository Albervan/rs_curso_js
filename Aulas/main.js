axios.get('https://api.github.com/users/albervan')
    .then(function(response) {
        console.log(response);
        console.log(response.request.readyState);
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
    }
);