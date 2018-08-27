import axios from "axios";

const getList = () => {
	return {
		type : "GET_PRODUCT",
		payload : axios.get("http://192.168.56.1:1999/product/get")
	}
} 

export {
	getList
}