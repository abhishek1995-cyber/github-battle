import React from "react";
import Main from "./Component/Main";
import Tag from "./Component/Tag";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          all: null,
          active:''
        }
    }

componentDidMount(){
  fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories').then((res) =>
    res.json()
  ).then((data) => this.setState({
    all:data,
   active:"AL"
  }))
}

handleAll = (AL) =>{
  fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories').then((res)=> res.json()).then((profile) =>this.setState({
    all:profile,
   active:AL
  }))
}

handleJs = (JS) =>{
  fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:JavaScript&sort=stars&order=desc&type=Repositories').then((res)=> res.json()).then((js)=> this.setState({
    all:js,
    active:JS
  }))
  
}

handleRuby = (RU) => {
  fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:Ruby&sort=stars&order=desc&type=Repositories').then((res)=> res.json()).then((python)=> this.setState({
    all:python,
    active:RU
  }))
}

handleJava = (JA) => {
  fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:Java&sort=stars&order=desc&type=Repositories').then((res)=> res.json()).then((java)=> this.setState({
    all:java,
   active: JA
  }))
}

handleCss = (CS) => {
  fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:Css&sort=stars&order=desc&type=Repositories').then((res)=> res.json()).then((css)=> this.setState({
    all:css,
   active:CS
  }))
}

handlePython = (PY) => {
  fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:Python&sort=stars&order=desc&type=Repositories').then((res)=> res.json()).then((python)=> this.setState({
    all:python,
   active:PY
  }))
}

    render(){
        return (
            <>
          <div className="tag">
           <Tag handleAll={this.handleAll} 
           handleJs={this.handleJs}
           handleRuby={this.handleRuby}
           handleJava={this.handleJava}
           handleCss={this.handleCss}
           handlePython={this.handlePython}
           active={this.state.active}
           />
           </div>
           <div className="main">
           <Main all={this.state.all}/>
           </div>
            </>
        )
    }
}

export default App