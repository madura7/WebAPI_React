import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from "./Hero";
import axios from 'axios';

//class componentes
class Heroes extends Component {
    state = {
        allHeroes: []
        
    };
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allHeroes.map(hero => 
                    <div key={hero.id} className="row">
                        <Hero likeCount={hero.likeCount} heroName={hero.name} imgUrl={hero.imgUrl} Movies={hero.Movies} />
                     </div>
                    )}
                </div>
            </div>
        );
    }
    
    async componentDidMount() {
        const {data} = await axios.get("http://localhost:5000/api/heroes/");
        console.log(data);

        let heroes = data.map(hero =>{
            return{
                id: hero.id,
                name: hero.name,
                likeCount: hero.likeCount,
                imgUrl: hero.imgUrl,
                Movies: hero.Movies
            }
        });
        this.setState({allHeroes: heroes});
    }
     
    
}

export default Heroes;