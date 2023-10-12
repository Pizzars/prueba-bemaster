import { getData } from 'src/proxy/BackendREST'
import { AboutModel } from './aboutModel'

export const getAbout = async (): Promise<AboutModel | null> => {
  const response = await getData('about', {
    'populate[0]': 'logos'
  })
  if (response.statusCode == 200) {
    const data = response.data.data.attributes
    const about = AboutModel.fromJson(data as any)
    return about
  }
  return null
}
