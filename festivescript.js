function display(sectionId) {
    // Hide all sections
    var sections = ['section-1', 'section-2', 'section-a', 'section-b', 'section-c', 'section-d'];
    sections.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.remove('active');
        }
    });
    
    // Show the selected section
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

