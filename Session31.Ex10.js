const employees = [
    { id: 1, name: "Nguyễn Văn A", role: "Developer" },
    { id: 2, name: "Trần Thị B", role: "Tester" },
    { id: 3, name: "Phạm Văn C", role: "Project Manager" },
    { id: 4, name: "Lê Thị D", role: "QA Engineer" },
    { id: 5, name: "Vũ Văn E", role: "DevOps" },
    { id: 6, name: "Hoàng Thị F", role: "HR Manager" },
];

const rowsPerPage = 3; 
let currentPage = 1;  

// Hàm hiển thị bảng dựa trên trang hiện tại
function renderTable(page) {
    let start = (page - 1) * rowsPerPage; 
    let end = start + rowsPerPage;

    let table = document.querySelector("table tbody");
    table.innerHTML = employees.slice(start, end).map(employ => {
        return `
            <tr>
                <td>${employ.id}</td>
                <td>${employ.name}</td>
                <td>${employ.role}</td>
            </tr>
        `;
    }).join("");

    document.getElementById("currentPage").textContent = page;
}

// Gọi hàm để hiển thị trang đầu tiên
renderTable(currentPage);

// Sự kiện Previous Page
document.getElementById("prevPage").addEventListener("click", function() {
    if (currentPage > 1) {
        currentPage--;
        renderTable(currentPage);
    }
});

// Sự kiện Next Page
document.getElementById("nextPage").addEventListener("click", function() {
    if (currentPage * rowsPerPage < employees.length) {
        currentPage++;
        renderTable(currentPage);
    }
});

// 🟢 Thêm nhân viên vào danh sách
document.getElementById("addEmployeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let role = document.getElementById("position").value.trim();

    if (name === "" || role === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Tạo ID mới cho nhân viên
    let newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
    employees.push({ id: newId, name, role });

    // Reset input
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";

    // Cập nhật trang nếu cần
    let totalPages = Math.ceil(employees.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage = totalPages; // Chuyển sang trang cuối cùng nếu có trang mới
    }

    renderTable(currentPage);
});
