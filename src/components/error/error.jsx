import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './error.css';

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null, message: null};
    }

    componentDidCatch(error, message) {
        this.setState({
            error,
            message,
        });
    }

    render() {
        const {message} = this.state;
        const {children} = this.props;

        return (
            <>
                {message
                    ? (
                        <article className={styles.default} data-test="component-error">
                            <header>
                                <h2>Ooops</h2>
                            </header>
                            <p>Někde se stala chyba. Hned začneme pracovat na nápravě.</p>
                        </article>
                    )
                    : (children)
                }
            </>
        );
    }
}

Error.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
        PropTypes.number,
    ]).isRequired,
};

export default Error;
