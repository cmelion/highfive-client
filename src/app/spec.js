/* global describe, it */

describe('App suite', () => {

    describe('Bootstrap the application', () => {
        // This is a container and is not typically covered
        // as seen on canonical TO_DO App:
        // https://github.com/reactjs/redux/tree/master/examples/todomvc
        it('TODO: consider moving main into its own component');
    });

    // stores
    require('./store/spec');

    // components
    describe('Components', () => {
        require('./components/home/spec');
    });
});
