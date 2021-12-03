// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { BrowserRouter} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//   <Router>
//    <Routes>
//      <Route exact path="/" element={<App/>}/>
//    </Routes>
//    </Router>,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
 document.body.appendChild(document.createElement('div'))
)
})
