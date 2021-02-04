import axios from "axios";

const axiosOrders = axios.create({
	baseURL: 'https://js-burger-6e475-default-rtdb.firebaseio.com/'
});

export default axiosOrders;