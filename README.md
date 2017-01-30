# Readme

## Next Steps
- I ended on [Component Lifecycle](https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm)

## Setup

- Source: [TutorialsPoint React](https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm)
- Here's a quick run-through of my set-up
```sh
npm install -S -D babel-cli
npm init
npm i webpack -S
npm i webpack-dev-server -S
npm i react -S
npm i react-dom -S
npm i babel-core babel-loader babel-preset-react babel-preset-es2015
touch index.html
touch App.jsx
touch main.js
touch webpack.config.js
subl .
npm start
```

## Notes

- [Prop Types and Default Props](https://www.tutorialspoint.com/reactjs/reactjs_props_validation.htm) => I 
don't quite get how / why I'd use these right now
- In the [Forms](https://www.tutorialspoint.com/reactjs/reactjs_forms.htm) example, look at what is happening
in the more advanced example.  We are passing down our method and state as props to our child:
  1. After doing the exercise, I feel like it'd be easier for me to create the child component and then do the
  parent component.  In the InputChild component, there is an input element that is receiving two props, an
  onChange handler and a value.  Because both are in the form of props, I really just have to pass them through:
  ```javascript
  <input onChange={this.props.onChangeProp} value={this.props.valueProp}/>
  ```

  1. The p-tag, just like the example above the complex one, simply spits out whatever the user has typed in.
  Notice how I am producing the text...it's `this.props.valueProp`, not the actual key that is being used in
  the parent's state.
  ```javascript
  <p>{this.props.valueProp}</p>
  ```

  1. My parent component is where it gets a bit trickier.  First, the valueProp is easier to understand...as
  we saw above, the p-tag produces the text using `this.props.valueProp`.  I pass it down be simply assigning
  my valueProp to my state, which in this case is: `valueProp={this.state.term2}`.

  1. The method is a little more difficult but not too much more.  I have to do all the same stuff which is
  write the method and bind it.  Where I was getting confused was the event handler...my parent is NOT 
  specifying the trigger, it is simply defining the method that is called WHEN it is triggered.  I created
  a prop called 'onChangeProp' but that could be called anything.  It is in the CHILD that we specify
  what the trigger is, which, in this case, is onChange.

- **Quick Summary:** Write the child first containing the proper elements and what those elements will be 
filled with or the methods they will be receiving.  The CHILD determines the trigger, so this is where you
set that.  The parent is responsible for the method (what it does, its effect on state) and if it's passing
data, that data must be passed through as props (e.g. valueProp or onChangeProp).  __This is also an example__
__of me grabbing data from a child component and setting it in the state of the parent.__

- They have something on [React Router](https://www.tutorialspoint.com/reactjs/reactjs_router.htm) which I
should take a look at later.



