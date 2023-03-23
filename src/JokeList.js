import React,{Component} from 'react';
import axios from 'axios';
import Joke from './Joke';
import './JokeList.css'

class JokeList extends Component {
    static defaultProps={
        numJokesToGet:10
    }
    constructor (props){
        super(props);
        this.state = {
            joke:JSON.parse(window.localStorage.getItem('jokeArray') || "[]"),
            loading:false
        }
        this.handleClick=this.handleClick.bind(this)
        this.newJoke=this.newJoke.bind(this)
    }
    async componentDidMount(){
        if(this.state.joke.length===0){
            for(let i=0;i<this.props.numJokesToGet;i++){
                let response = await axios.get("https://icanhazdadjoke.com/",{headers:{Accept: "application/json"}})
                this.setState({joke:[...this.state.joke,{jokeText:response.data.joke,id:response.data.id}]})
            }
            const jokeArray=this.state.joke;
            window.localStorage.setItem('jokeArray', JSON.stringify(jokeArray))
        }
        
    }
    handleClick(){
        this.setState({loading:true});
        this.newJoke()
    }
    async newJoke(){
        try{
            for(let i=0;i<this.props.numJokesToGet;i++){
                let response = await axios.get("https://icanhazdadjoke.com/",{headers:{Accept: "application/json"}})
                this.setState({joke:[...this.state.joke,{jokeText:response.data.joke,id:response.data.id}]})
            }
            window.localStorage.clear()
            window.localStorage.setItem("jokeArray",JSON.stringify(this.state.joke))
            this.setState({loading:false})
        }catch(e){
            alert(e)
        }
        
    }
    render() {
        if(this.state.loading){
            return (
                <div className="Loader">
                    <h1 className="JokeList-loading">Loading...</h1>
                    <i className="far fa-8x fa-laugh fa-spin"></i>
                </div>
            )
        }else{

            return (
                <div className="JokeList">
                    <div className="JokeList-left">
                        <p className="JokeList-p"><span className="JokeList-span">Dad</span> Joke</p>
                        <div className="JokeList-emojiDiv"><span className="JokeList-emojiSpan"></span>😂</div>
                        <button onClick={this.handleClick} className="JokeList-btn">New Joke</button>
                    </div>
                    <div className="JokeList-right">
                        {this.state.joke.map(joke=><Joke key={joke.id} jokeText={joke.jokeText}/>)}
                    </div>
                </div>
            )
        }
    }
}

export default JokeList