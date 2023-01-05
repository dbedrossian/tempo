const projectFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-description').value.trim();

  if (name && description) {
    const response = await fetch('/api/projects/', {
      method: 'POST',
      body: JSON.stringify({ name, description  }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace(window.location.href);
    } else {
      alert('Failed to create project');
    }
  }
};

document
  .querySelector('.project-form')
  .addEventListener('submit', projectFormHandler);

