window.onload = () => {
  const forms = document.querySelectorAll('.sone-general-formcontainer')
  const headers = document.querySelectorAll('.sone-general-subheader')
  // const doc = document.getElementById('')
  // doc.sty

  forms.forEach((form, i) => {
    if (i > 0) form.style.display = 'none'
  })
  headers.forEach(header => {
    header.style.display = 'none'
  })
}
