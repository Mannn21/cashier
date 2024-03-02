export async function postOrderData (data) {
    const res = await fetch("http://localhost:3000/api/order_lists", {
        method: "POST",
        body: JSON.stringify(data),
        cache: "no-store"
    });
    return res.json();
} 