import axios from "axios";

const username = 'frontend@shyftplan.com'
const password = 'api_test_auth_token'

const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')


export default axios.create({
    baseURL: "https://fyx8bq1lpa.execute-api.eu-central-1.amazonaws.com/Prod/",
    headers: {
        // "Content-type": "application/json",
        "Authorization": `Basic ${ token }`
    }
})
