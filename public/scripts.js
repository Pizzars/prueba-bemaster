// window.onload = () => {
//   const forms = document.querySelectorAll('.sone-general-formcontainer')
//   const header1 = document.querySelector('.sone-general-header-label')
//   const language = document.querySelector('.sone-webform-languagebar')
//   const headers = document.querySelectorAll('.sone-general-subheader')
//   const buttons = document.querySelectorAll('.s1_button')
//   const buttonContainer = document.querySelector('.flex.justify-end.margin-top')
//   const form = document.getElementById('form1')
//   // const doc = document.getElementById('')
//   // doc.sty

//   let state = 0

//   const tx1 = header1.textContent
//   header1.style.display = 'none'

//   const divTitle = document.createElement('div')
//   divTitle.id = 'title-container'
//   divTitle.textContent = tx1
//   divTitle.className = 'title-container'

//   const divSubtitle = document.createElement('div')
//   divSubtitle.id = 'subtitle-container'
//   divSubtitle.textContent = `${state + 1}/${forms.length}`
//   divSubtitle.className = 'subtitle-container'

//   const newdiv = document.createElement('div')
//   newdiv.className = 'title-cont'
//   newdiv.appendChild(divSubtitle)
//   newdiv.appendChild(divTitle)

//   form.appendChild(newdiv)

//   const updateState = () => {
//     if (state + 1 > forms.length - 1) {
//       return
//     }

//     const form = forms[state]

//     const updateBorder = element => {
//       if (!element.value) {
//         element.style.border = '1px solid #f41f03'
//         element.style.boxShadow = '0 0 5px #f41f03'
//       } else {
//         element.style.border = 'none'
//         element.style.boxShadow = 'none'
//       }
//     }

//     if (state === 0) {
//       // const date = form.querySelector('input[name="ShowDate1Epoch"]')
//       const rs = validate_artist(false)

//       if (!rs) return
//     }
//     if (state === 1) {
//       const company = form.querySelector('input[name="SG2Addressname"]')

//       if (
//         !validate_SG2_Contact_FirstName(false) ||
//         !validate_SG2_Contact_LastName(false) ||
//         !validate_SG2_Contact_Email(false) ||
//         company.value == ''
//       ) {
//         updateBorder(company)
//         return
//       }
//     }
//     if (state === 2) {
//       const company = form.querySelector('input[name="SG3Addressname"]')
//       const city = form.querySelector('input[name="SG3AddressCity"]')
//       // const country = form.querySelector('select[name="SG3AddressCountryId"]')

//       if (!validate_VenueCapacity(false) || city.value == '' || company.value == '') {
//         updateBorder(company)
//         updateBorder(city)
//         return
//       }
//     }

//     forms[state].style.display = 'none'
//     language.style.display = 'none'
//     state++
//     forms[state].style.display = 'block'
//     const newTitle = document.getElementById('title-container')
//     newTitle.textContent = headers[state - 1].textContent
//     const newSubtitle = document.getElementById('subtitle-container')
//     newSubtitle.textContent = `${state + 1}/${forms.length}`
//     window.scrollTo({ top: 0 })

//     if (state === forms.length - 1) {
//       buttons.forEach(button => {
//         button.style.display = 'inline-block'
//       })
//       const bt = document.getElementById('nextButton')
//       bt.style.display = 'none'
//     }
//   }

//   const newButton = document.createElement('button')
//   newButton.textContent = 'NEXT'
//   newButton.type = 'button'
//   newButton.id = 'nextButton'
//   newButton.onclick = updateState
//   newButton.className = 's1_button green'
//   // newButton.style.background = 'none'
//   buttonContainer.appendChild(newButton)

//   forms.forEach((form, i) => {
//     if (i > 0) form.style.display = 'none'
//     if (i === forms.length - 1) form.style.padding = '2rem'
//   })
//   headers.forEach(header => {
//     header.style.display = 'none'
//   })
//   buttons.forEach(button => {
//     button.style.display = 'none'
//   })
// }

const getData = event => {
  const artistsSelect = document.getElementById('artist')
  const SG2AddressCountryId = document.getElementById('SG2AddressCountryId')
  if (!artistsSelect || !SG2AddressCountryId) {
    setTimeout(() => {
      getData(event)
    }, 100)
    return
  }
  const options = artistsSelect.querySelectorAll('option')
  const optionsCountries = SG2AddressCountryId.querySelectorAll('option')
  const artists = []
  options.forEach(option => {
    artists.push({ value: option.value, label: option.textContent })
  })
  const countries = []
  optionsCountries.forEach(option => {
    countries.push({ value: option.value, label: option.textContent })
  })
  event.source.postMessage(JSON.stringify({ artists, countries }), '*')
}

window.addEventListener('message', function (event) {
  // Verificar el origen del mensaje si es necesario
  // if (event.origin !== "http://url-de-la-pagina-principal.com") return;

  // Manejar el mensaje recibido

  const data = JSON.parse(event.data)
  console.log('Mensaje recibido en el iframe: ', data)
  if (data.type === 'GET_DATA') {
    getData(event)
  }
  if (data.type === 'SEND_DATA') {
    const form = data.data

    form.forEach(field => {
      const element = document.getElementById(field.id)
      if (!element) return
      if (field.id == 'IAgreeChb') {
        element.checked = true
        return
      }
      try {
        element.value = field.value
      } catch (error) {
        console.log(`Error field: ${field.id}`, error)
      }
    })

    const formElement = this.document.getElementById('form1')
    formElement.submit()
  }
  // event.source.postMessage(JSON.stringify(data), "*");
})
