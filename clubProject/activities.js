function activityTable() {
    let tbody = document.querySelector("#ActivityTable tbody");
    events.forEach(function(events) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${events.name}</td><td>${events.date}</td>`;
        tbody.appendChild(tr);
    })
} 