document.getElementById("searchForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    
    if (!query) {
        document.getElementById("results").innerHTML = "<p>Please enter a search term</p>";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/books?title=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const books = await response.json();
        
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = books.length
            ? books.map(b => `<p>${b.title} - ${b.author} ($${b.price})</p>`).join("")
            : "<p>No books found matching your search</p>";
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("results").innerHTML = "<p>Error searching for books. Please try again.</p>";
    }
});