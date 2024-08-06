window.onload = function() {
    showContent('prbc');
};

function showContent(Id) {
    // Hide all content sections
    document.getElementById('prbc-topic').style.display = "none";
    document.getElementById('plasma-topic').style.display = "none";
    document.getElementById('platelets-topic').style.display = "none";

    // Remove the active class from all types
    document.querySelectorAll('.type').forEach(function(element) {
        element.classList.remove('active');
    });

    // Show the selected content section and add active class to the clicked type
    if (Id === 'prbc') {
        document.getElementById('prbc-topic').style.display = "block";
        document.querySelector('.type.prbc').classList.add('active');
    } else if (Id === 'plasma') {
        document.getElementById('plasma-topic').style.display = "block";
        document.querySelector('.type.plasma').classList.add('active');
    } else if (Id === 'platelet') {
        document.getElementById('platelets-topic').style.display = "block";
        document.querySelector('.type.platelet').classList.add('active');
    }
}

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}
