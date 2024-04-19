const BASE_URL = "https://www.dnd5eapi.co/api"

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

function handleError(error) {
    console.log(error)
    // but also want to return error so i can tell the client.
}

export async function establishContact() {
    // const timer = setTimeout(() => {
    //     // rejects(new Error('Slow API response please try again!'))
    // }, 10000)
    return await fetch(BASE_URL, requestOptions)
    .then((response) => {
        // clearTimeout(timer)
        response.json()
    })
    .catch((error) => {
        // clearTimeout(timer)
        handleError(error)
    })
}