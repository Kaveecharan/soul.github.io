import {useRef, useState} from 'react'
import classes from './sidebar.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Sidebar = ({categories}) => {

  const checkbox1Ref = useRef(null);
  const checkbox2Ref = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState(null);

  // category selection function
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  // only one checked checkbox function
  const handleCheckboxChange=(event)=> {
    if (event.target === checkbox1Ref.current) {
      checkbox2Ref.current.checked = false;
    } else if (event.target === checkbox2Ref.current) {
      checkbox1Ref.current.checked = false;
    }
  }
        
  return (
    <div className={classes.sidebarDiv}>
        <h2>Product Categories</h2>
        {categories.map((category, index) => {
        return (
          <div key={index} className={classes.categoryDiv}>
            <div className={classes.mainCat}>
              <p>{category.mainCategory}</p>
              <KeyboardArrowRightIcon style={{cursor: 'pointer', color: 'gray'}} onClick={() => handleCategoryClick(category)}/>
            </div>
            {selectedCategory === category && (
              <div className={classes.subCategoryDiv}>
                <p>{category.subCategory}</p>
              </div>
            )}
          </div>
          );
        })}
        <h2>Browse By</h2>
        <div className={classes.browseOption}>
            <div><input type="checkbox" ref={checkbox1Ref} onChange={handleCheckboxChange}/> Latest</div>
            <div><input type="checkbox" ref={checkbox2Ref} onChange={handleCheckboxChange} /> Popular</div>
        </div>
    </div>
  )
}

export default Sidebar