// Get the form element
const form: HTMLFormElement = document.getElementById('resume-form') as HTMLFormElement;

// Add an event listener to the form submission
form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const name: string = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email: string = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone: string = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education: string = (document.getElementById('education') as HTMLInputElement).value.trim();
    const skills: string[] = (document.getElementById('skills') as HTMLInputElement).value.split(',').map((skill: string) => skill.trim());
    const workExperience: string = (document.getElementById('work-experience') as HTMLTextAreaElement).value.trim();

    // Generate the resume HTML
    const resumeHTML: string = `
    <h1>${name}</h1>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <h2>Education</h2>
    <p>${education}</p>
    <h2>Skills</h2>
    <ul>
      ${skills.map((skill: string) => `<li>${skill}</li>`).join('')}
    </ul>
    <h2>Work Experience</h2>
    <p>${workExperience}</p>
  `;

    // Display the generated resume
    const resumeContainer: HTMLElement = document.createElement('div');
    resumeContainer.innerHTML = resumeHTML;
    document.body.appendChild(resumeContainer);

    // Clear the form fields
    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('phone') as HTMLInputElement).value = '';
    (document.getElementById('education') as HTMLInputElement).value = '';
    (document.getElementById('skills') as HTMLInputElement).value = '';
    (document.getElementById('work-experience') as HTMLTextAreaElement).value = '';
});