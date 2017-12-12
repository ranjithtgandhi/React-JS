import React,{Component} from 'react'

class First extends Component {
	constructor(props) {
    super(props)
    this.nameChange = this.nameChange.bind(this)
  }
	nameChange(){
		this.props.onClick()
	}

	render(){
		const {name, age, onClick} = this.props;
		return (
			<button onClick={this.nameChange}>Hi {name} {age}</button>
		)
	}
}

export default First