import axios from "axios";

const getCart = () => {
	return {
		type : "GET_CART",
	}
} 

const postCart = (detail, qty) => {
	return {
		type : "POST_CART",
		payload : {
			data : {...detail, qty},
		}
	}
} 

const updateQtyPlus = (id, qty) => {
	return {
		type : "UPDATE_QTY_PLUS",
		payload : {
			data : {id, qty},
		}
	}
} 

const updateQtyMin = (id, qty) => {
	return {
		type : "UPDATE_QTY_MIN",
		payload : {
			data : {id, qty},
		}
	}
} 


const deleteCart = (id) => {
	return {
		type : "DELETE_CART",
		payload : id
	}
} 


export {
	getCart,
	postCart,
	deleteCart,
	updateQtyPlus,
	updateQtyMin
}