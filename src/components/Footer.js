import React, {Component} from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
export default class footer extends Component {
    render(){
        return(
            <div className="footer">
                <p style={{fontSize:"20px", fontWeight:"600"}}>
                    Copyright <CopyrightIcon/> 2022
                    </p>
            </div>
        )
    }
}