import React from "react";

class Tag extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
       
        return (
            <>
            
           <button className={this.props.active=== 'AL'? 'active-btn': 'btn'}   onClick={()=>this.props.handleAll('AL')}>
            All
           </button>
           <button className={this.props.active=== 'JS'? 'active-btn': 'btn'}   onClick={()=>this.props.handleJs('JS')}>
              JavaScript
           </button>
           <button className={this.props.active=== 'RU'? 'active-btn': 'btn'}   onClick={()=>this.props.handleRuby('RU')}>
            Ruby
           </button>
           <button className={this.props.active=== 'JA'? 'active-btn': 'btn'}  onClick={()=>this.props.handleJava('JA')}>
            Java
           </button>
           <button  className={this.props.active=== 'CS'? 'active-btn': 'btn'}  onClick={()=>this.props.handleCss('CS')}>
            CSS
           </button>
           <button className={this.props.active=== 'PY'? 'active-btn': 'btn'}   onClick={()=>this.props.handlePython('PY')}>
            Python
           </button>

            </>
        )
    }
}

export default Tag