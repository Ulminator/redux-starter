# React component creation approaches

 - ES5 createClass

    var HelloWorld = React.createClass({
        render: function () {
            return ( 
                <h1>Hello World</h1>
            );
        }
    });

 - ES6 class

    No autobind
        <div onClick={this.handleClick.bind(this)}></div>  // This works fine with ES5 createClass
    
        class Contacts extends React.Component {
            constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
            }
        }

    PropTypes and Default props are declared separately below class definition

    Set initial state in constructor    

 - ES5 stateless function

    var HelloWorld = function(props) {
        return (
            <h1>Hello World</h1>
        );
    };

 - ES6 stateless function
 
    const HelloWorld = (props) => {
        return (
            <h1>Hello World</h1>
        );
    };

Benefits to Stateless Functional Components
    No class needed
    Avoid `this` keyword
    Enforced best practices
    High signal-to-noise ratio (Less typing)
    Enhanced code completion/intellisense
    Bloated components are obvious
    Easy to understand
    Easy to test

# When to Use Each

    Class Components
        Need state
        Need reference to underlying DOM (ref will return null in a Stateless Component)
        Need Lifecycle method hooks (componentDidMount, etc..)
        Child functions (for performance)  //want to avoid nesting functions
    
    Stateless Components
        Everywhere else

# Other Ways to Create Components

 - Object.create
 - Mixins
 - Parasitic Components
 - StampIt

 bit.ly/react-define-component

# Container vs. Presentational Components

 - Container
    Concerned with behavior, marshalling data, and actions ==> Little to no markup (back end of the frontend)
    Pass data and actions down
    Know about Redux
    Often stateful

 - Presentation
    Nearly all markup
    Receive data and actions via props
    Doesn't know about Redux (Just rely on props to display UI)
    Typically functional components

# Redux

 - Do I need Redux?

    Complex data flows
    Inter-component communication
    Non-heirarchical data
    Many actions
    Same data used in multiple places (Components using same data and don't have parent child relationships)

 - 3 Principles

    1. All application state is placed in a single immutable store
        1 store aides debugging, supports server rendering, and makes undo/redo easily possible
    2. Action trigger changes
    3. Reducers update state (functions) 


 - Flux vs. Redux

    Similarities
        Unidirectional Data Flow
        Actions
        Stores

    Differences
        Reducers - Take current state in an action and then return a new state.
        Containers - Just React components, but use is specific
        Redux store is immutable

    Flux
        Stores contain state and change logic
        Multiple stores
        Flat and disconnected stores
        Singleton dispatcher (connects actions to store)
        React components subscribe to stores
        State is mutated

    Redux
        Store and change logic (reducers) are separate
        One store
        Single store with hierarchical reducers
        No dispatcher
        Container components utilize connect (react-redux)
        State is immutable

# Actions
rateCourse(rating) {  // Action creator
    return { type: RATE_COUTSE, rating: rating }  // Action
}

# Creating Redux Store
let store = createStore(reducer);

store.dispatch(action)
store.subscribe(listener)
store.getState()
replaceReducer(nextReducer) // Helpful for hot reloading

 # Copy Object (need babel-polyfill at root of app)

 Object.assign(target, ...sources)
 Object.assign({}, state, {role: 'admin'});

 Spread operator (for arrays)

# React-Redux
 
 - Provider
    Attaches app to store
    
    <Provider store={this.props.store}>
        <App/>
    </Provider>

 - Connect
    Creates container components
   
    export default connect(
        mapStateToProps,     //  Determines what part of the state gets exposed to the component (Reselect Library)
        mapDispatchToProps
    )(AuthorPage);

    //  Determines what actions to expose to the component
    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionsCreators(actions, dispatch)
        };
    }

    3 Ways to Handle mapDispatchToProps

    this.props.dispatch(loadCourses());         Ignore it. Use dispatch and pass in action creator
        Downsides
            1. Boilerplate
            2. Redux concerns in child components

    function mapDispatchToProps(dispatch) {     Manually wrap
        return {
            loadCourses: () => {
                dispatch(loadCourses());
            }
        };
    }

    function mapDispatchToProps(dispatch) {     Use bindActionCreators (does manually wrap for you)
        return {
            actions: bindActionCreators(actions, dispatch);
        };
    }

