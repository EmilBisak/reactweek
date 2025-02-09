export default class Show {
    constructor({ id, name, image, rating, summary }) {
        this.id = id
        this.name = name
        this.image = image
        this.rating = rating
        this.summary = summary
    }

    get uniqueShowName() {
        return `${this.name}-${this.id}`
    }
}
