import axios from "axios"

export const getProject = () => {
  return axios({
    method: 'POST',
    url: 'http://localhost:3000/project/list'
  })
}

export const getProjectCategory = () => {
  return axios({
    method: 'POST',
    url: 'http://localhost:3000/project/category'
  })
}

export const getProjectDetail = (data: {
  projectId: number
}) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:3000/project/detail',
    data
  })
}