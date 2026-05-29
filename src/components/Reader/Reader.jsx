import { Component } from "react";

export class Reader extends Component{
    state = {
        index: 0,
    };

    changeIndex = value =>{
        this.setState(state =>({index: state.index + value}))
    }

    // onPrev = () => {
    //     this.setState(state=>({ index: state.index - 1}));
    // };

    // onNext = () => {
    //     this.setState(state=>({ index: state.index + 1}));
    // };

    render(){
        return(
            <div>
                <section>

                    <button type="button"
                    onClick={()=>this.changeIndex(-1)} 
                    >   
                    Назад
                    </button>

                    <button type="button"
                    onClick={()=>this.changeIndex(1)}  
                    >
                    Вперёд
                    </button>

                </section>

    <p>
        {this.state.index + 1}/{this.props.items.length}
    </p>

                <article>
                    <h2>Lorem ipsum dolor sit amet</h2>

                    <p>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco
 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
 dolor in reprehenderit in voluptate velit esse cillum dolore eu
 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
 proident, sunt in culpa qui officia deserunt mollit anim id est
 laborum."
                    </p>

                </article>

            </div>
        )
    }
}