function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var sidebarToggle = document.querySelector(".sidebar-toggle");

    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        sidebarToggle.style.color = "#fff"; // Change button color to white
    } else {
        sidebar.style.left = "-250px";
        sidebarToggle.style.color = "#333"; // Change button color to default
    }
}
