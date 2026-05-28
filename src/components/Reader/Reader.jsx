import { Component } from "react";

export class Reader extends Component{
    state = {
        publicationIndex: 0,
    };

    render(){
        return(
            <div>
                <section>
                    <button type="button">Назад</button>
                    <button type="button">Вперёд</button>
                </section>

                <p>1/10</p>

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