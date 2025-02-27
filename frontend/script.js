const apiUrl = "http://localhost:5000/api/stocks";
async function fetchStocks() {
    const res = await fetch(apiUrl);
    const stocks = await res.json();
    document.getElementById("stockList").innerHTML = stocks.map(s => 
        `<p class="${s.isFavorite ? 'favorite' : ''}">
            ${s.name} - $${s.price} 
            <button onclick="toggleFavorite('${s._id}')">★</button>
            <button onclick="removeStock('${s._id}')">❌</button>
        </p>`).join("");
}

async function addStock() {
    const name = document.getElementById("stockName").value;
    const price = document.getElementById("stockPrice").value;
    await fetch(`${apiUrl}/add`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, price }) });
    fetchStocks();
}

async function toggleFavorite(id) {
    await fetch(`${apiUrl}/favorite/${id}`, { method: "PUT" });
    fetchStocks();
}

async function removeStock(id) {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    fetchStocks();
}

fetchStocks();