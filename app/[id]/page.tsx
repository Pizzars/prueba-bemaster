import React from 'react'
import ContentCategory from 'src/screens/content/ContentCategory'
import BasePage from 'src/screens/components/general/base/BasePage'

const OptionPage = () => {
  return (
    <BasePage title='Contenido' padding={false} navbar={false} footer={false}>
      <ContentCategory />
    </BasePage>
  )
}

export default OptionPage
