import axios from "axios"

export const getProject = (params: {
  categoryId?: string;
}) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:3000/project/list',
    data: params
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