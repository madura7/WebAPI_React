import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap'
import pngImage from "../../src/assets/logo192.png"

//class componentes
class Hero extends Component {
    state = {
        Id: this.props.Id,
        heroName: this.props.heroName,
        movies:["Movie1","Movie2"],
        likeCount: this.props.likeCount,
        imgUrl: this.props.imgUrl
    };
    render() {
        return (
            // <React.Fragment>
            //     <h1 style={{ color: "blue", fontSize: "40px" }}>Hero Component :{this.isHero()}</h1>
            //     <button type="button" className="btn btn-primary">{this.state.heroId}</button>

            // </React.Fragment>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={this.props.imgUrl} />
                <Card.Body >
                    <Card.Title>{this.state.heroName}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. 

                        <ul>
                            {this.showMovies()}
                        </ul>
                    </Card.Text> 
                    
                    <div className="col text-center">
                        <Button  variant="primary" onClick={() => this.likeAvenger(1)}>Like Avengers 
                             <span className="badge badge-light"> Like: {" "}{this.state.likeCount}</span>
                        </Button>
                    </div>
                    
                </Card.Body>
            </Card>

        );
    }
    getHeroName() {
        alert(this.state.heroName);
    }
    isHero() {
        return this.state.Id < 1000 ? "Already an avenger" : "Not an avenger";
    }

    showMovies(){
    return this.state.movies.length===0? <p>No movies</p> : this.state.movies.map(movies => <li key={this.state.movies.indexOf(movies)} >{movies}</li>)
    
    
    }

    likeAvenger = counter => {
        //this.setState({likeCount : this.state.likeCount + 1});
    }
    

}

export default Hero;