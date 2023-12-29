import { getData } from 'src/proxy/BackendREST'
import { LegalModel } from './legalModel'

export const getLegal = async (): Promise<LegalModel | null> => {
  const response = await getData('legal-notice')
  if (response.statusCode == 200) {
    const data = response.data
    const about = data as LegalModel
    return about
  }
  return null
}
