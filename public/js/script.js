(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  // Debug alert close functionality
  document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.btn-close[data-bs-dismiss="alert"]')
    console.log('Found close buttons:', closeButtons.length)
    
    closeButtons.forEach((button, index) => {
      console.log(`Close button ${index}:`, button)
      button.addEventListener('click', function(e) {
        console.log('Close button clicked!')
        e.preventDefault()
        const alert = this.closest('.alert')
        if (alert) {
          alert.style.transition = 'opacity 0.15s linear'
          alert.style.opacity = '0'
          setTimeout(() => {
            alert.remove()
          }, 150)
        }
      })
    })
  })
})()

