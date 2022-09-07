import Navigation from './Navigation';
import classes from './Header.module.css'
const Header =props=>{
    return(
        <header className={classes['main-header']}>
            <h1>A Basic Login Page</h1>
      <Navigation onLogout={props.onLogout} />
        </header>
    )
}

export default Header;