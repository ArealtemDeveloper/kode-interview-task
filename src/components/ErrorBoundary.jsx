import React, { Component } from 'react';

function reload() {
    location.reload();
}

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
  
        this.state = {
            error: null,
        }
    }

    componentDidCatch(error,errorInfo){
        console.log({error, errorInfo});
    }

    static getDerivedStateFromError(error){
        return {error};
    }
  

    render() {
        if(this.state.error)
            return (
                <div style={{
                    position: 'absolute',
                    top: '35%',
                    left: '35%', 
                    
                    textAlign: 'center',
                    
                }}>
                    <img src={require('../assets/images/fly.png')} alt="" />
                    <h2 style={{fontWeight: 600}}>Какой-то сверхразум все сломал</h2>
                    <div>
                        <p style={{color: '#97979B', fontWeight: 400, margin: '1rem'}}>
                            Постараемся быстро починить
                        </p>
                        <button onClick={reload}>Попробовать снова</button>
                    </div>
                </div>
            ) 

        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

export default ErrorBoundary;