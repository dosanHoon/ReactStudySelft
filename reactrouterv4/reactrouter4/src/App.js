import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header.js'

import Home from './routes/Home.js'
import About from './routes/About.js'
import Posts from './routes/Posts.js'
import Login from './routes/Login.js'
import MyPage from './routes/MyPage.js'
import Search from './routes/Search.js'
import NotMatch from './routes/NotMatch.js'

const App = () => {
    return (
        <Router>
            <div >
            <Header />
            <div >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about/:username" component={About} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/login" component={Login} />
                    <Route path="/me" component={MyPage} />
                    <Route path="/search" component={Search} />
                    <Route component={NotMatch} />
                </Switch>
            </div>
            </div>
        </Router>
    )
}

export default App