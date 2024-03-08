import React from 'react'
import ContentDetails from 'src/screens/content/ContentDetails'
import BasePage from 'src/screens/components/general/base/BasePage'

const OptionPage = () => {
  return (
    <BasePage title='Contenido' padding={false} navbar={false} footer={false}>
      <ContentDetails />
    </BasePage>
  )
}

export default OptionPage
