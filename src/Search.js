class Search {

    /**
     * @example searchableObjects = [
     *  {"id": 1, "title": "Test-Title 1", "url": "https://google.com"},
     *  {"id": 2, "title": "Test-Title 2", "url": "https://youtu.be"},
     * ]
     *
     * @param searchableObjects
     */
    constructor(searchableObjects) {
        this.searchableObjects = searchableObjects;
    }

    filterByTitle(title) {
        return this.searchableObjects.filter(element => {
            return element.title.includes(title);
        });
    }

    filterByUrl(url) {
        return []; // @TODO implement similarly to filterByTitle
    }

    getById(id) {
        return []; // @TODO implement similarly to filterByTitle (careful! id is an integer, not a string!)
    }

    addSearchableObject(object) {
        // @TODO push object into array
    }

    getSearchableObject() {
        return this.searchableObjects;
    }
}

module.exports = Search;
