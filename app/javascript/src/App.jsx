import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <div>Home</div>} />
                    <Route exact path="/about" render={() => <div>About</div>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App