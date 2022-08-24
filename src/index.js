import React from "react"
import ReactDOM from "react-dom"
/*function Navbar()
{
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Navigation</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Market</a>
                  </li>
              </ul>
          </div>
        </nav>
  )
}

function MainComp()
{
    return (
            <h1>I am learning, React!</h1>
            )
}*/

const page = (
    <div>
        <img src="logo192.png" width="40px"></img>
        <h1>Fun facts about React</h1>
        <div >
            <ul>
                <li>
                    Was released in 2013
                </li>
                <li>
                    Was originally created by Jordan Walke
                </li>
                <li>
                    Has well over 100k stars on Github
                </li>
                <li>
                  Is maintained by facebook
                </li>
                <li>
                  Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </div>
    </div>
)

//document.getElementById("root").append(JSON.stringify(page))

ReactDOM.render(
              page,
              document.getElementById("root"))
