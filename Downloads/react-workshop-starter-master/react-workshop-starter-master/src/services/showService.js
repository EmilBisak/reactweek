import { API } from '../shared/api'
import Show from '../models/Show'

export class ShowService {
    // Fetch your Shows
    fetchShows = () => {
        return API.get('/shows')
            .then(response => {
                console.log('response :', response)

                return response.data.slice(0, 50).map((show) => {
                    console.log('show :', show);

                    const { name, id, image, rating } = show

                    return new Show({ name, id, image, rating })
                })
            })
    }

    fetchShow = (id) => {
        return API.get(`/shows/${id}`)
            .then(response => {
                const { data: show } = response

                console.log('show :', show);

                return new Show(show)
            })
    }

}

export const showService = new ShowService()
