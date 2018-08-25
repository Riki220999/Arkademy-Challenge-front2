const initialState = {
	productList : [],
	loading : false,
	error : ""
}


const product = (state = initialState, action) => {
	switch(action.type){
		case `GET_PRODUCT_PENDING` : 
			return {
				...state,
				loading : true
			}
		case `GET_PRODUCT_FULFILLED` : 
			return {
				...state,
				productList : state.productList.concat(action.payload.data),
				loading : false
			}
		case `GET_PRODUCT_REJECTED` :
			return {
				...state,
				loading : false,
				error : "Something Wrong"
			}

		default :
			return state;
	}
}

export default product