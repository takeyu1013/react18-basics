import axios from 'axios'
import { useQuery } from 'react-query'
import { dalay } from '../utils/fetchDelay'

const getUsers = async () => {
  const { data } = await axios
    .get('https://jsonplaceholder.typicode.com/users?_limit=3')
    .then(await dalay(3000))
  return data
}

export const useQueryUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: Infinity,
  })
}
