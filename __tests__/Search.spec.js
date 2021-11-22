const Search = require("../src/Search");


describe("Filter function", () => {
    const testInput = [
        {"id": 1, "title": "Test-Title 1", "url": "https://google.com"},
        {"id": 2, "title": "Test-Title 2", "url": "https://youtu.be"},
        {"id": 3, "title": "Test-Title 3", "url": "https://amazon.com"},
    ]
    test("it should filter by a search term (title)", () => {
        let s = new Search(testInput);
        let actual = s.filterByTitle("Title");

        expect(actual.length).toEqual(3);
    });
});