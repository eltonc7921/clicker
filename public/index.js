class Clock extends React.Component {
	constructor(props){
		super(props);
		this.clockTickInterval = 1; // how many times per second
		this.state = this.getTime();
	}

	getTime(){
		const time = new Date();
		return {
			date : `${time.getMonth()+1}/${time.getDate()}/${time.getFullYear()}`,
			time : `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
		};
	}

	render(){
		return (
			<p className="clock">
				{this.state.date}<br/>
				{this.state.time}<br/>
			</p>
		)
	}

	updateClock(){
		const time = new Date();
		this.setState(this.getTime());
	}

	componentDidMount(){
		this.clockTickInterval = setInterval( () => {
			this.updateClock();
		}, 1000 / this.clockTickSpeed);
	}

	componentWillUnmount(){
		clearInterval(this.clockTickInterval);
	}
}

class RotatingButton extends React.Component {
	onClick(){
		window.open(this.props.link, '_blank');
	}
	render(){
		return (
			<div className='RotatingButton' onClick={this.onClick.bind(this)}>
				<a href={this.props.link}> {this.props.name} </a>
			</div>
		)
	}
}

class DropdownList extends React.Component {
	constructor(props) {
		super(props);
		this.links = [
			{
				name : 'Github',
				url : 'https://github.com/eltonc7921',
			},
			{
				name : 'Google',
				url : 'https://google.com',
			},
		];

	}

	generateLinks() {
		let listItems = [];
		for (var i = 0; i < this.links.length; i++) {
			listItems.push(
				<li className="dropDownLinks" key={i}>
					<a href={this.links[i].url} target="_blank">
						{this.links[i].name}
					</a>
				</li>);
		}
		return listItems;
	}
	render(){
		return (
			<div>
				<input type="checkbox" id="buttonControl" className="dropdownListInput" />
				<label className="button" htmlFor="buttonControl">
					<ul className="dropDownList">
						{this.generateLinks()}
					</ul>
				</label>
			</div>
		);
	}
}

class DropDownButton extends React.Component {
	toggleList(){
		const input = document.querySelector('#buttonControl');
		if (input.getAttribute("checked")) {
			input.removeAttribute("checked");
		} else {
			input.setAttribute("checked", true);
		}
	}

	render(){
		return(
			<div className="dropdown">
				<button onClick={this.toggleList}/>
			</div>
		);
	}
}

class Navbar extends React.Component {
	constructor(props){
		super(props);
		this.username = 'Elton Chan';
	}

	render(){
		return (
			<div id='navbar'>
				<h1 className='nameTag'> {this.username} </h1>
				<RotatingButton link='https://github.com/eltonc7921' name='Github'/>
				<Clock/>
				<DropDownButton/>
			</div>
		);
	}
}

class Banner extends React.Component {
	render(){
		return (
			<div className='banner'>
				<img className="logo" src="img/logo.png"/>
			</div>
		);
	}
}

class Clicker extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
		this.state.score = 0;
		this.state.clickPower = 1;
	}

	increase() {
		this.setState((state, props) => {
			return {
				score : state.score + state.clickPower,
				clickPower : state.clickPower,
			};
		});
	}

	render() {
		return (
			<div onClick={this.increase.bind(this)} className="scoreBox">
				<p>
					{this.state.score}
				</p>
			</div>
		)
	}
}

class ClickerGame extends React.Component {
	render() {
		return (
			<div id="clickerGame">
				<Clicker/>
			</div>
		);
	}
}

class App extends React.Component {
	makeList(){
		const list = [];
		for (let i = 0; i < 100; i++) {
			list.push(<h1> Hello, world! </h1>);
		}
		return list;
	}

	render(){
		return (
			<div>
				<Navbar/>
				<DropdownList/>
				<Banner/>
				<ClickerGame/>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
document.getElementById('root')
);
