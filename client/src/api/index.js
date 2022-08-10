import axios from "axios";
const API = axios.create({baseURL:"http://10.0.2.2:3000/api/v1"})
export const getProducts =() => API.get(`/get_product`)
export const getOneProducts =(id) => API.get(`/get_product/${id}`)

export const addProducts =(product) => API.post('/add_product', product)
export const updateProducts = (id, updatedInvoice) => API.patch(`/update_product/${id}`, updatedInvoice)
export const deleteProducts =(id) => API.delete(`/delet_product/${id}`)
// export const fetchInvoicesByUser = (searchQuery) => API.get(`/invoices?searchQuery=${searchQuery.search}`);