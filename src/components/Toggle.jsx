import React, {useState, useEffect} from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
    winter: 'winter',
    dracula: 'dracula',
}

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme')
}

const Toggle = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage() || themes.winter);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    },[theme])

    const handleTheme = () => {
        const newTheme = theme === 'dracula' ? 'winter' : 'dracula';       
        setTheme(newTheme);
      };

    return (        
        <div className='navbar-end'>            
            <label className='swap swap-rotate '>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' onChange={handleTheme} />
        
            {/* sun icon */}
            <BsSunFill className='swap-on h-4 w-4' />
        
            {/* moon icon */}
            <BsMoonFill className='swap-off h-4 w-4' />
            </label>
        </div>
    );
};

export default Toggle;