import React, {Component} from 'react'
import './style.css';
export default class SetProFile extends Component {
    constructor(props){
        super(props);
        this.state ={
            cpn: 1,
        }
        this.handleOnclick = this.handleOnclick.bind(this)
    }
    handleOnclick = (e, index) =>{ 
        alert(index);
        // this.setState({
        //     cpn:2
        // })
    }

    render(){

    
    return(
      
    <div className = "row">
        <div className="col-md-3">
        <div className="menubar">
            <ul className="el-menu">
                <li className="el-menu-item" onClick = {(e) => this.handleOnclick(e, 1)}>
                    <a href="#">
                    <i className="fas fa-user"></i>
                    <span>Personal Info</span>
                    </a>
                </li>
                <li className="el-menu-item" onClick = {(e) => this.handleOnclick(e, 2)}>
                    <a href="#">
                    <i className="fas fa-id-card"></i>
                    <span>Contact Info</span>
                    </a>
                </li>
                <li className="el-menu-item" onClick = {(e) => this.handleOnclick(e, 3)}>
                    <a href="#">
                    <i className="fas fa-envelope"></i>
                    <span>Email</span>
                    </a>
                </li>
                
                <li className="el-menu-item" onClick = {(e) => this.handleOnclick(e, 4)}>
                    <a href="#">
                    <i className="fas fa-key"></i>
                    <span>Password</span>
                    </a>
                </li>
        
            </ul>
        </div>
        </div>

        <div className="col-md-9">
            <div className="menubar">
                <div className="edit edit-personal-info">
                   
                    <div className="col-md-3"></div>
                        <div className="change-name">
                            <span>Name</span>
                        </div>
                    <div className="col-md-9"></div>
                    <div className="change-name">
                            <input type="text"></input>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        
  

   
    );
    }
}
