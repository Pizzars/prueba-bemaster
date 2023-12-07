window.onload = () => {
  const forms = document.querySelectorAll('.sone-general-formcontainer')
  const header1 = document.querySelector('.sone-general-header-label')
  const language = document.querySelector('.sone-webform-languagebar')
  const headers = document.querySelectorAll('.sone-general-subheader')
  const buttons = document.querySelectorAll('.s1_button')
  const buttonContainer = document.querySelector('.flex.justify-end.margin-top')
  const form = document.getElementById('form1')
  // const doc = document.getElementById('')
  // doc.sty

  let state = 0

  const tx1 = header1.textContent
  header1.style.display = 'none'

  const divTitle = document.createElement('div')
  divTitle.id = 'title-container'
  divTitle.textContent = tx1
  divTitle.className = 'title-container'

  const divSubtitle = document.createElement('div')
  divSubtitle.id = 'subtitle-container'
  divSubtitle.textContent = `${state + 1}/${forms.length}`
  divSubtitle.className = 'subtitle-container'

  const newdiv = document.createElement('div')
  newdiv.appendChild(divSubtitle)
  newdiv.appendChild(divTitle)

  form.appendChild(newdiv)

  const updateState = () => {
    if (state + 1 > forms.length - 1) {
      return
    }

    const form = forms[state]

    const updateBorder = element => {
      if (!element.value) {
        element.style.border = '1px solid #f41f03'
        element.style.boxShadow = '0 0 5px #f41f03'
      } else {
        element.style.border = 'none'
        element.style.boxShadow = 'none'
      }
    }

    if (state === 0) {
      // const date = form.querySelector('input[name="ShowDate1Epoch"]')
      const rs = validate_artist(false)

      if (!rs) return
    }
    if (state === 1) {
      const company = form.querySelector('input[name="SG2Addressname"]')

      if (
        !validate_SG2_Contact_FirstName(false) ||
        !validate_SG2_Contact_LastName(false) ||
        !validate_SG2_Contact_Email(false) ||
        company.value == ''
      ) {
        updateBorder(company)
        return
      }
    }
    if (state === 2) {
      const company = form.querySelector('input[name="SG3Addressname"]')
      const city = form.querySelector('input[name="SG3AddressCity"]')
      // const country = form.querySelector('select[name="SG3AddressCountryId"]')

      if (!validate_VenueCapacity(false) || city.value == '' || company.value == '') {
        updateBorder(company)
        updateBorder(city)
        return
      }
    }

    forms[state].style.display = 'none'
    language.style.display = 'none'
    state++
    forms[state].style.display = 'block'
    const newTitle = document.getElementById('title-container')
    newTitle.textContent = headers[state - 1].textContent
    const newSubtitle = document.getElementById('subtitle-container')
    newSubtitle.textContent = `${state + 1}/${forms.length}`
    window.scrollTo({ top: 0 })

    if (state === forms.length - 1) {
      buttons.forEach(button => {
        button.style.display = 'inline-block'
      })
      const bt = document.getElementById('nextButton')
      bt.style.display = 'none'
    }
  }

  const newButton = document.createElement('button')
  newButton.textContent = 'NEXT'
  newButton.type = 'button'
  newButton.id = 'nextButton'
  newButton.onclick = updateState
  newButton.className = 's1_button green'
  // newButton.style.background = 'none'
  buttonContainer.appendChild(newButton)

  forms.forEach((form, i) => {
    if (i > 0) form.style.display = 'none'
    if (i === forms.length - 1) form.style.padding = '2rem'
  })
  headers.forEach(header => {
    header.style.display = 'none'
  })
  buttons.forEach(button => {
    button.style.display = 'none'
  })
}
