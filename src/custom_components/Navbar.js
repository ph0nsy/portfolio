import './Navbar.css'

function Navbar({ scroll = true }){
    const processedClassName = scroll ? "Navbar-container Navbar-background" :"Navbar-container";
    console.log(processedClassName);

    return (
    <div className={processedClassName}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="Navbar-element cursor-target">Option A</button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="Navbar-element cursor-target">Option B</button>  
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="Navbar-element cursor-target">Option C</button>  
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="Navbar-element cursor-target">Option D</button>  
    </div>);
}

export default Navbar;