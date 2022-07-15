var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
        status.classList.add('success')
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status.classList.add('success')
      });
    }
    form.addEventListener("submit", handleSubmit)
