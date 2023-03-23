import React,{Component} from 'react';
import './Joke.css'

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
        this.increaseLikes=this.increaseLikes.bind(this)
        this.decreaseLikes=this.decreaseLikes.bind(this)
        this.color=this.color.bind(this)
    }
    increaseLikes(){
        this.setState({likes:this.state.likes+1})
        
    }
    decreaseLikes(){
        this.setState({likes:this.state.likes-1})
    }
    color(){
        let obj;
        if(this.state.likes>=15){
            obj={mood:"🤣",color:"#46d446"}
            return obj;
        }else if(this.state.likes>=12){
            obj={mood:"😆",color:"#22a622"}
            return obj;
        }else if (this.state.likes>=9){
            obj={mood:"😃",color:"#1f911f"}
            return obj;
        }else if(this.state.likes>=6){
            obj={mood:"🙂",color:"#b0be2f"}
            return obj;
            
        }else if (this.state.likes>=3){
            obj={mood:"😐",color:"#bf9530"}
            return obj;
            
        }else if (this.state.likes>=0){
            obj={mood:"😕",color:"#94561e"}
            return obj;
        
        }else {
            obj={mood:"😠",color:"#a62a2a"}
            return obj;
        }
    }
    render() {
        return (
            <div className="Joke">
                <div className="Joke-likeSection">
                    <button onClick={this.increaseLikes} className="Joke-btn"><i className="fas  fa-thumbs-up"></i></button>
                    <div className="Joke-likes" style={{borderColor:this.color().color}}>{this.state.likes}</div>
                    <button onClick={this.decreaseLikes} className="Joke-btn"><i className="fas  fa-thumbs-down"></i></button>
                </div>
                <div className="Joke-textDiv">
                <p className="Joke-text">{this.props.jokeText}</p>
                </div>
                <span className="Joke-mood">{this.color().mood}</span>
            </div>
        )
    }
}

export default Joke;