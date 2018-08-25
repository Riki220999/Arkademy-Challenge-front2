import axios from "axios";

const getList = () => {
	return {
		type : "GET_PRODUCT",
		payload : axios.get("http://192.168.0.10:1999/product/get")
	}
} 

export {
	getList
}