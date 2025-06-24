import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props);
        
           

        this.state ={
            userInfo : {
                name:"Dummy",
                location:"Jaipur",
            }
        };


    }
    
    async componentDidMount() {
        // API call
        const data = await fetch("https://api.github.com/users/MohitSh10");
        const json = await data.json();
        
        this.setState({
            userInfo :json,
        });
        
        console.log(json);   
    }

    render(){
        
        const {name , location} = this.state.userInfo;
        
        return (
            <div className="user-card">
                {/*
                    This is how we set the Class Based Component 
                    
                <h1>Count : {count}</h1>
                <button onClick={() =>{
                        this.setState({
                            count:this.state.count +1,
                        })
                }}>
                    button
                </button> */}
                <h2>Name : {name} </h2>
                <h2>Location : {location} </h2>
                <h2>Contact : 838XXXXX22 </h2>
            </div>
        )
    }
}
export default UserClass;