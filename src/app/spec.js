/* global describe, it */

describe('App suite', () => {

    describe('Bootstrap the application', () => {
        // This is a container and is not typically covered
        // as seen on canonical TO_DO App:
        // https://github.com/reactjs/redux/tree/master/examples/todomvc
        it('TODO: consider moving main into its own component');
    });

    // actions
    require('./actions/spec');

    // reducers
    require('./reducers/spec');

    // epics
    require('./epics/spec');

    // stores
    require('./store/spec');

    // components
    describe('Components', () => {
        require('./containers/home/components/recognition-card/spec');
        require('./containers/header/components/menu/spec');
    });
});
