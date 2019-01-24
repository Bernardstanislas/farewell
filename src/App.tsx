import React, {Component} from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './App.css';
import {peopleList} from './people.service';

const getRandomIndex = () => {
    const peopleCount = peopleList.length;
    return Math.floor(Math.random() * peopleCount);
};

class App extends Component {
    constructor() {
        super({});
        setInterval(() => {
            this.changePerson();
        }, 2000);
    }

    state = {
        imageIndex: getRandomIndex(),
        nameIndex: getRandomIndex()
    };

    changePerson = () => {
        const randomImageIndex = getRandomIndex();
        const randomNameIndex = getRandomIndex();
        this.setState({
            imageIndex: randomImageIndex,
            nameIndex: randomNameIndex,
        });
    };

    render() {
        const image = peopleList[this.state.imageIndex].image;
        const name = peopleList[this.state.nameIndex].name;
        return (
            <div className="App" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                backgroundImage: 'url("data:image/png;base64,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"'
            }}>
                <TransitionGroup>
                    <CSSTransition
                        key={image}
                        timeout={200}
                        classNames="fade"
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(10, 145, 118, 0.8)', borderRadius: '10vw', color: 'white' }}>
                            <img style={{ position: 'relative', maxWidth: '500px', width: '80vw', transition: 'opacity .25s ease-in-out', borderRadius: '10vw' }} src={image} />
                            <h1>Merci {name} !</h1>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default App;
