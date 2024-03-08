import React from 'react'
import ContentById from 'src/screens/content/ContentById'
import BasePage from 'src/screens/components/general/base/BasePage'

const OptionPage = () => {
  return (
    <BasePage title='Contenido' padding={false} navbar={false} footer={false}>
      <ContentById />
    </BasePage>
  )
}

export default OptionPage
