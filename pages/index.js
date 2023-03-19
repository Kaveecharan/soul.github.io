import Topbar from "../components/Topbar"
import Sidebar from "../components/Sidebar"
import Products from '../components/Products'
import classes from './index.module.css'

const categories = [
    {
        mainCategory: 'Clothing',
        subCategory: `https://youtu.be/dQw4w9WgXcQ`
    },
    {
        mainCategory: `Office Products`,
        subCategory: `https://youtu.be/dQw4w9WgXcQ`
    },
    {
        mainCategory: `Health & Personal Care`,
        subCategory: `https://youtu.be/dQw4w9WgXcQ`
    },
    {
        mainCategory: `Health & Household`,
        subCategory: `https://youtu.be/dQw4w9WgXcQ`
    
    },
    {
        mainCategory: `Sports & Fitness`,
        subCategory: `https://youtu.be/dQw4w9WgXcQ`
    
    },{
        mainCategory: `Home & Kitchen`,
        subCategory: `https://youtu.be/dQw4w9WgXcQ`
    
    },
    {
        mainCategory: `Books`,
        subCategory: `https://youtu.be/dQw4w9WgXcQ`
    
    },
    {
        mainCategory: `EMF Protection Gear`,
        subCategory: `https://youtu.be/dQw4w9WgXcQ`
    
    }] // categories array

const products = [
    {
        name: 'Alhydran Auxano',
        details: 'Contains ingredients, such as antioxidants, which protect the skin against free radicals.',
        price: '420',
        imgUrl: 'https://www.auxano.com.sg/uploads/8/7/9/3/87933120/alh-spf-30-86_orig.jpg',
        offerPrice: '',
        offer: '10',
    },
    {
        name: 'Medical Pillow',
        details: 'Our natural latex neck support pillow is breathable and provides effective airflow.',
        price: '250',
        imgUrl: 'https://cdn.salla.sa/wVBXn/3JkdO9xyjRTqMapNDJRWsMHdhWv0jsNLkpbmlCXA.jpg',
        offerPrice: '',
        offer: '',
    },
    {
        name: 'Medical Chair',
        details: 'This lazy boy medical recliner features a high-strength steel structure with a maximum capacity of 300 lbs.',
        price: '1220',
        imgUrl: 'https://foter.com/photos/420/power-lift-medical-recliner-chair-for-elderly.jpeg',
        offerPrice: '',
        offer: '',
    },
] // product array

const index = (props) => {

  return (
      <>
        <Topbar/>
        <div className={classes.index}>
            <Sidebar categories={props.categories}/>
            <Products products={props.products}/>
        </div>
      </>
  )
}

// using getStaticProps to avoid the time delay that useEffect would create

export async function getStaticProps(){
    return{
        props:{
            categories: categories,
            products: products
        }
    }
}

export default index