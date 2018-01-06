var React = require('react');

class Popular extends React.Component{
    render(){
        let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <ul className = 'languages'>
                {languages.map(function(lang){
                    return (
                        <li>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

module.exports = Popular;