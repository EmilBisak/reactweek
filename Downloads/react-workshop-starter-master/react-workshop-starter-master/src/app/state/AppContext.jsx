import React from 'react';

const AppContext = React.createContext({
    theme: "red",
    changeTheme: f => f
})

//create the consumer as higher order component
export const withAppContext = ChildComponent => props => (
    <AppContext.Consumer>
        {context => <ChildComponent {...props} global={context} />}
    </AppContext.Consumer>
)

export default AppContext;