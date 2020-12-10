let errorCodes = {
    404: "Not Found! Oh no! Check your URL",
    505: "Sorry.. can't help.. served is borked",
    403: "You shall not pass!! Not without creds. Then you can go.",
    503: "Service not available!! The servers are having a coffe break..."
}

async function fetchData(sourceURL) {
    // fetch and then statements
    // get what ever data file that is passed into function  
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Here there be monsters! Error ${response.status}`);
        }

        return response;
    })

    // if we are successful, return back to our resource
    let dataset = await resource.json();

    return dataset[0];
    //debugger;
}

async function postData(sourceURL){
    // use fetch or Axios to post to a database here

    return "You are using the postData API endpoint";
}

export { fetchData, postData };