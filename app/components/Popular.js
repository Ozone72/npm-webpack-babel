var React = require('react');

class Popular extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        // don't quite get the bind thing
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
        let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        // console.log('Up Here!', this);
        return (
            <ul className = 'languages'>
                {languages.map(function(lang){
                    // console.log('Down Here!', this);
                    return (
                        <li 
                            style = {lang===this.state.selectedLanguage ? {color: 'red'}:null}
                            onClick = {this.updateLanguage.bind(null, lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
}

module.exports = Popular;