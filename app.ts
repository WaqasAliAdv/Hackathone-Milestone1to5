// Listen to the form submission event
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertions for input elements

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const usernameElement = document.getElementById('username') as HTMLInputElement;

    // If all elements exist, proceed
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement
        && usernameElement) {

        // Get the values from the input fields
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        const username = usernameElement.value;

        // Picture Element
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        const uniquePath = `resume/${username.replace(/\s+/g, '_')}_cv.html`

        // Construct the resume output using a template literal
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            
            <h3>Education</h3>
            <p>${education}</p>
            
            <h3>Skills</h3>
            <p>${skills}</p>
            
            <h3>Experience</h3>
            <p>${experience}</p>
        `;

        const downloadLink = document.createElement('a')
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your Fresh Resume';

        // Find the resume output element and set its innerHTML
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

            resumeOutputElement.appendChild(downloadLink)

            resumeOutputElement.style.display = 'block';

        } else {
            console.error('Could not find the resumeOutput element.');
        }
    } else {
        console.error('One or more form elements are missing.');
    }
});