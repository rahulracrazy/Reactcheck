import {Link} from 'react-router-dom'
import classes from './MainNav.module.css'
function MainNavigation(){
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetup</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                    <li><Link to='/newmeet'>New Meetups</Link></li>
                </ul>
            </nav>
    </header>
}
export default MainNavigation;