export const api = {
    async searchBook(searchPhrase) {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchPhrase}`, {
            method: "GET",
        });
        if (response.status !== 200) {
            console.error(`Error response - `, response);
            throw new Error("Books were not found");
        }
        const books = await response.json();
        return books;
    },
};