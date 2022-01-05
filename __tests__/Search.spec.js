const Search = require("../src/Search");


describe("Filter, add and get function", () => {
    const testInput = [
        {"id": 1, "title": "Test-Title 1", "url": "https://google.com"},
        {"id": 2, "title": "Test-Title 2", "url": "https://youtu.be"},
        {"id": 3, "title": "Test-Title 3", "url": "https://amazon.com"},
    ];

    let s = new Search(testInput);

    test("it should filter by a search term (title)", () => {
        let filteredTitle = s.filterByTitle("Title");

        const output = [{"id": 1, "title": "Test-Title 1", "url": "https://google.com"}];

        expect(filteredTitle.length).toEqual(3);
        expect(s.filterByTitle("Test-Title 1")).toEqual(output);
        expect(s.filterByTitle("tEst-tiTle 1")).toEqual(output);
        expect(() => {
            s.filterByTitle("")
        }).toThrow("Please type in a title.");
    });

    test("it should filter by a URL", () => {
        let filteredUrl = s.filterByUrl("google");

        const output = [{"id": 1, "title": "Test-Title 1", "url": "https://google.com"}];

        expect(filteredUrl).toEqual(output);
        expect(s.filterByUrl("gOOgle")).toEqual(output);
    });

    test("it should filter by ID", () => {
        let filteredId = s.getById(1);

        const output = [{"id": 1, "title": "Test-Title 1", "url": "https://google.com"}];

        expect(filteredId).toEqual(output);
    });

    test("it should add an object to the array & return an array with old and new objects", () => {
        s.addSearchableObject({"id": 4, "title": "Test-Title 4", "url": "https://ebay.com"});

        const output = [
           {"id": 1, "title": "Test-Title 1", "url": "https://google.com"},
           {"id": 2, "title": "Test-Title 2", "url": "https://youtu.be"},
           {"id": 3, "title": "Test-Title 3", "url": "https://amazon.com"},
           {"id": 4, "title": "Test-Title 4", "url": "https://ebay.com"},
       ];

       expect(s.getSearchableObjects()).toEqual(output);
       expect(s.getSearchableObjects().length).toEqual(4);
    });

});