import React, {useState} from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Toggle = () => {
    const [theme, setTheme] = useState(false);;

    const handleTheme = () => {
        setTheme(!theme);
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