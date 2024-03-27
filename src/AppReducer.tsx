import { useReducer,Reducer } from "react";
interface CartItem {
    id: number,
    name: string,
    quantity: number,
    price: number
}

interface CartState {
    items: CartItem[];
}
type Action = |{ type: "Add_Item", item: CartItem } | { type: "Remove_Item", id: number } | { type: "Update_Quantity", id: number } ;

const data:CartItem[] =[
    { id: 1, name: 'Apple', quantity: 2, price: 25 },
  { id: 2, name: 'Mangoe', quantity: 1, price: 40 },
]
const intialState:CartState = {
    items : data,
}

const cartReducer:Reducer<CartState,Action> = (state,action)=>{
    switch (action.type) {
        case "Add_Item":
            return{
            ...state,
              items: [...state.items,action.item]
            }
    
        default:
           return state;
    }

}
const CartComponent: React.FC = () => {
    const [cartState, dispatch] = useReducer(cartReducer,intialState);
    const handleAddItem = (item:CartItem)=>{
        dispatch({type: "Add_Item",item})
    }
    console.log(cartState);
    
    return (
        <>
            <h1>App Reducer</h1>
            <ol>
            { 
                cartState.items.map((item)=>(
                    <div key={item.id}>
                       <li>
                         <strong>{item.name}price {item.price}</strong>
                       </li>
                    </div>
                ))
                
            }
            </ol>
            <button onClick={()=>{handleAddItem({id:4,name:"banana",quantity:56,price:45})}}>AddItem</button>
        </>
    )
}

export default CartComponent;