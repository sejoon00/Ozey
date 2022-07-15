import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Head = () => {
  return (
    <>
      <header className="App-header">
        <h1><Link to="/"><img src='./logo.png' alt='logo' /></Link></h1>
        <Link to="/login">LOGIN / REGISTER</Link>
        <Outlet />
      </header>
      <Navbar />
      <div className='SearchBar'>
        <input type="text" placeholder="SEARCH" />
      </div>


      <div className="CategoryBar">
        <p><b>All</b></p>
        <p>Ceramics</p>
        <p>Glass</p>
        <p>Resin/Beads</p>
        <p>Metal</p>
        <p>Leather</p>
        <p>etc.</p>
      </div>
    </>
  )
}

export default Head;