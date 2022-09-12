import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import AddToList from '..';

const mockStore = configureStore();

it('renders with snapshot with no data', () => {
  const initialState = {todos: []};
  const tree = renderer
    .create(
      <Provider store={mockStore(initialState)}>
        <AddToList />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
