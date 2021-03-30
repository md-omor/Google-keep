import React from 'react'
import Logo1 from './image/logo1.png'
import Logo2 from './image/logo2.png'
import AddIcon from '@material-ui/icons/Add';

const Header = () => {
    return (
        <div>
        <header>
            <h1>Google Keep Clone by Omor</h1>
            <div className="logos">
                <span className="logo keep">
                    <img src={Logo1} alt="logo" width="50" height="50"/>
                </span>
                <AddIcon />
                <span className="logo keep">
                    <img src={Logo2} alt="logo" width="70" height="50"/>
                </span>
            </div>
        </header>
            
        </div>
    )
}

export default Header



