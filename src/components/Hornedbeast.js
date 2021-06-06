import React from 'react';
class Hornedbeast extends React.Component {
render (){
    return (
<main>
   <h2>{this.props.title}</h2>
   <p>{this.props.description}</p>
   <img src={this.props.imgUrl} alt={this.props.alt} title={this.props.title}/>
</main>
    )
}  
}
export default Hornedbeast;