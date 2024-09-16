// Get the form element
var form = document.getElementById('resume-form');
// Add an event listener to the form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    // Get the form data
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var education = document.getElementById('education').value.trim();
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    var workExperience = document.getElementById('work-experience').value.trim();
    // Generate the resume HTML
    var resumeHTML = "\n    <h1>".concat(name, "</h1>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n    <h2>Skills</h2>\n    <ul>\n      ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n    </ul>\n    <h2>Work Experience</h2>\n    <p>").concat(workExperience, "</p>\n  ");
    // Display the generated resume
    var resumeContainer = document.createElement('div');
    resumeContainer.innerHTML = resumeHTML;
    document.body.appendChild(resumeContainer);
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('education').value = '';
    document.getElementById('skills').value = '';
    document.getElementById('work-experience').value = '';
});
