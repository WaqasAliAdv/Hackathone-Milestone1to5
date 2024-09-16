var _a;
// Listen to the form submission event
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertions for input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    // If all elements exist, proceed
    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        // Get the values from the input fields
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        // Construct the resume output using a template literal
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            \n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            \n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            \n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n        ");
        // Find the resume output element and set its innerHTML
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Could not find the resumeOutput element.');
        }
    }
    else {
        console.error('One or more form elements are missing.');
    }
});
