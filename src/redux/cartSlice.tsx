import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import desertBloom from '../assets/image/products/desertBloom.jpg'
import goldenGlow from '../assets/image/products/goldenGlow.jpg'
import silverMist from '../assets/image/products/silverMist.jpg'
import starlightSucculent from '../assets/image/products/starlightSucculent.jpg'
import tropicalBreeze from '../assets/image/products/tropicalBreeze.jpg'
import zenBambooGrove from '../assets/image/products/zenBambooGrove.jpg'
import { Product , CartState } from '../model/model'

const Products: Product[] = [
    {
        id: 1,
        imageUrl: desertBloom,
        title: 'Desert Bloom',
        price: 230,
        description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.',
        category: 'Indoor Plants',
        quantity: 0
    },
    {
        id: 2,
        imageUrl: goldenGlow,
        title: 'Golden Glow',
        price: 820,
        description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.',
        category: 'Indoor Plants',
        quantity: 0
    },
    {
        id: 3,
        imageUrl: silverMist,
        title: 'Silver Mist',
        price: 720,
        description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.',
        category: 'Indoor Plants',
        quantity: 0
    },
    {
        id: 4,
        imageUrl: starlightSucculent,
        title: 'Starlight Succulent',
        price: 260,
        description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.',
        category: 'Indoor Plants',
        quantity: 0
    },
    {
        id: 5,
        imageUrl: tropicalBreeze,
        title: 'Tropical Breeze',
        price: 560,
        description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.',
        category: 'Indoor Plants',
        quantity: 0
    },
    {
        id: 6,
        imageUrl: zenBambooGrove,
        title: 'Zen Bamboo Grove',
        price: 120,
        description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices.',
        category: 'Indoor Plants',
        quantity: 0
    }
];

const initialState: CartState = {
    items: [],
    allProducts: Products,
    totalPrice: 0,
    totalCount: 0
};



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<number>) => {
            const existingItem = state.items.find((item:Product) => item.id === action.payload);
            const Product:Product|undefined = Products.find(item => item.id === action.payload);
            if(Product){
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    state.items.push({ ...Product, quantity: 1 });
                }
                state.totalPrice += Product.price;
                state.totalCount += 1;
            }
            
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const product = state.items.find((item:Product) => item.id === action.payload);
            if (product) {
              state.totalCount -= product.quantity;
              state.totalPrice -= product.price * product.quantity;
              state.items = state.items.filter((item:Product) => item.id !== action.payload);
            }
          },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.items.find((item:Product) => item.id === action.payload);
            if (product) {
                product.quantity += 1;
                state.totalCount += 1;
                state.totalPrice += product.price;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const product = state.items.find((item:Product) => item.id === action.payload);
            if (product) {
                state.totalCount -= 1;
                state.totalPrice -= product.price;

                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    state.items = state.items.filter((item:Product) => item.id !== action.payload);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
