import React from 'react'
import classes from './products.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Products = ({products}) => {
  return (
    <div className={classes.productsDiv}>
        {products.map((product, index) => {
        return (
            <div className={classes.productDiv}>
                <img src={product.imgUrl} alt='product-img'/>
                <div className={classes.icons}>
                    <ShoppingCartIcon style={{color: '#eb96c4'}} />
                    <FavoriteIcon style={{color: '#eb96c4'}} />
                </div>
                <div className={classes.productDetails}>
                    <h3>{product.name}</h3>
                    <p>{product.details.length > 50 ? product.details.substring(0, 50) + '...' : product.details}</p>
                    <div className={classes.priceDiv}>
                        <p>${product?.price}</p>
                        {product?.offer && <p style={{textDecoration: 'line-through'}}>${product.price - (product.price * product.offer / 100)}</p>}
                        {product?.offer && <p>{product?.offer}%</p>}
                    </div>
                </div>
            </div>
          );
        })}
    </div>
  )
}

export default Products