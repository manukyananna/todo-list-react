import axios from 'axios';
import { API_DOMAIN_KEY, TODOS_KEY } from '../Constants/apiKeys';
import { ERROR_KEY } from '../Constants/mainKeys';
import AlertService from './alertService';

const api = axios.create({
  baseURL: API_DOMAIN_KEY
});

api.interceptors.response.use(response => {
  if (response && response.data && response.data.message) {
    AlertService.alert(ERROR_KEY, response.data.message);
  } else {
    return response;
  }
}, error => AlertService.alert(ERROR_KEY, error));

class ApiService {

  static getTodos(fullName) {
    return api.get(`${fullName}/${TODOS_KEY}`);
  }

  static getTodoById(fullName, id) {
    return api.get(`${fullName}/${TODOS_KEY}/${id}`);
  }

  static createTodo(fullName, data) {
    return api.post(`${fullName}/${TODOS_KEY}`, data);
  }

  static updateTodo(fullName, data, id) {
    return api.patch(`${fullName}/${TODOS_KEY}/${id}`, data);
  }

  static deleteTodo(fullName, id) {
    return api.delete(`${fullName}/${TODOS_KEY}/${id}`);
  }
}

export default ApiService;