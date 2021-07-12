import http from "./HttpComman";

class ApiServices {
    async getAllEvents() {
        let query = `?limit=10&offset=0`
        const res = await http.get(`/events${ query }`)
        return res
    }

    async getEventDetail(id) {
        try {
            const res = await http.get(`/events/${ id }`)            
            return res
        } catch (err) {
            if (err.response) {
                return { status: err.response.status, message: err.response.data }
            }
        }        
    }

    async getEventsWithParams(startAt, endAt, offset) {
        const limit = 10
        let query = `?limit=${ limit }&offset=${ offset }`
        if (startAt !== '') {
            query += `&startsAt=${ startAt }`
        }
        if (endAt !== '') {
            query += `&endsAt=${ endAt }`
        }
        try {
            const res = await http.get(`/events${ query }`)            
            return res
        } catch (err) {
            if (err.response) {
                return { status: err.response.status, message: err.response.data }
            }
        }  
    }
}

export default new ApiServices()
// Prod/events?limit=10&offset=0&startsAt=2020-05-26T10:33