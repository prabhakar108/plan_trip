import React from 'react';
import { Link } from 'react-router-dom';
export default class LoginRegister extends React.Component {
 render(){
return (
<div >
<ul>
<li><a class="active" href="#home">Share</a></li>
<li><a href="#news">Edit</a></li>
<li><a href="#contact">Visualize</a></li>
<li><a href="#about">Plan</a></li>
<li><Link to="/">Home</Link></li>
</ul>
</div>
)
}
}
