var React = require('react');
var PropTypes = require('prop-types');

class SelectLanguage extends React.Component{
    render(){
        let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return(
            <ul className = 'languages'>
            {languages.map(function(lang){
                return (
                    <li 
                        style = {lang===this.props.selectedLanguage ? {color: 'red'}:null}
                        onClick = {this.props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                )
            }, this)}
        </ul>
        )
    }
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        // don't quite get the bind thing **REVISIT**
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang){
        this.setState(function(){
            return{
                selectedLanguage: lang
            }
        });
    }
    render(){
        return (
           <div>
            <SelectLanguage 
                selectedLanguage = {this.state.selectedLanguage}
                onSelect = {this.updateLanguage}
            />
           </div>
        )
    }
}

module.exports = Popular;