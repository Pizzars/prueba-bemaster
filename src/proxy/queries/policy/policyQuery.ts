import { getData } from 'src/proxy/BackendREST'
import { PolicyModel } from './policyModel'

export const getPolicy = async (): Promise<PolicyModel | null> => {
  const response = await getData('privacy-policy')
  if (response.statusCode == 200) {
    const data = response.data
    const about = data as PolicyModel
    return about
  }
  return null
}
