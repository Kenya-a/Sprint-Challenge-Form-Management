# Answers

- [x] What are the required parts of class components?

    A class component should extend React.Component have a constructor, super, this.state, and render like so:

    class ClassComponent extends React.Component{

        constructor(){
            super();

            this.state = {

            };

        };

        render() {

            return (
                <div>JSX Here</div>
            );

        };
    };

    

- [x] Name at least three lifecycle methods?

    1. Mount(Birth):
        - Constructor function is called and state data is initialized.
        - Can receive props and place them in component as state.
        - Render is invoked.
        - After render is called, componentDidMount() will be invoked.


    2. Updating(Growth):
        - Any new props recieved from parent will trigger updates in child(re-renders child component)
        - Any changes in state should go through this.setState. setState calls render by default.
        - componentDidUpdate() should be invoked.

    3. Un-mounting(Death): 
        - componentDidUnmount() should be invoked to clean up work that the Dom does not need.

- [x] Why are forms used so often in web applications and software?

    Forms are used to allow users to enter data and send it to a server for processing.  

- [x] What advantages are there by using a forms library like Formik?

    The advantages of Formik:
        - Handles change-handling, and state management.
        - Naming conventions makes thing cleaner.
        - renders props
        - has special validation with yup.

- [x] Why do we write tests for our apps?

    We write test for our apps to figure out our bus faster, reduce risk of regressions, build trust with our code, makes developers think about edge cases, acts as a safety net when refactoring, acts as documentation for our code, encourages developers to write better(testable) code..
