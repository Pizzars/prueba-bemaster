import React from 'react'
import Content from 'src/screens/content/Content'
import BasePage from 'src/screens/components/general/base/BasePage'

const OptionPage = () => {
  return (
    <BasePage title='Artists' padding={false} navbar={false} footer={false}>
      <Content />
    </BasePage>
  )
}

export default OptionPage
