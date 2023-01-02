import React from "react";

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){     
        // console.log(this.props.all)
        if(!this.props.all){
            return <h1>Fetching Repos...</h1>
        } 
        return (
            <>
             {this.props.all.items.map((item,i)=>
             <div className="main-box">
             
             <div className="main-box2">
              <h1>#{i + 1}</h1>
               
              <figure>
                 <img className="main-img"
                 src={item.owner.avatar_url}
                 ></img>
              </figure> 
              <h2 className="active">{item.name}</h2>
              </div>
              <div className="main-icon">
              <i class="fa-regular fa-user"></i>{item.name}
              </div>
              <div className="main-icon">
              <i class="fa-solid fa-star"></i>{item.stargazers_count} Stars
              </div>
              <div className="main-icon">
              <i class="fa-solid fa-code-fork"></i>{item.forks_count} Forks
              </div>
              <div className="main-icon">
              <i class="fa-solid fa-triangle-exclamation"></i> {item.open_issues_count} Open issues
              </div>
              
            </div>
             )}
             </>
       
        )
    }
}

export default Main