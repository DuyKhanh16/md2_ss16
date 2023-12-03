import {createSlice,configureStore} from "@reduxjs/toolkit";

/* 
    1.Khởi tạo state : import createSlice
    2.Khởi tạo reducer
    3.khởi tạo store
    4.xuất kho mang đi dùng.
 */
//1 : Khởi tạo state
 const productState= createSlice({
    name:"redux-toolkit11111111",
    initialState:{
        products:[
            {
                name: "bánh mì",
                price: 5000
            },
            {
                name: "bánh bao",
                price: 6000
            },
            {
                name: "bánh chuối",
                price: 8000
            }
        ]
    },
    reducers:{
        addProduct: (state,action)=>{
            state.products.push({
                //payload là cái giá trị truyền lên 
                name: action.payload,
                price:15000,
            })
        }
    }
 })
 //1.1: xuất ra action
    // export const abc= productState.actions;
export const { addProduct } = productState.actions;
  
 // 2.  khởi tạo reducer
 const productReducer =productState.reducer;
 
 // 3. khởi tạo store
 const store= configureStore({
    reducer:{
          productReducer,
    }
 })
 //4 : xuất ra cho ứng dụng dùng
export default store;   
