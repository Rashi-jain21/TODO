import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import TODOList from '..';
import {FlatList} from 'react-native';

const mockStore = configureStore();

it('renders with snapshot with no data', () => {
  const initialState = {todos: []};
  const tree = renderer
    .create(
      <Provider store={mockStore(initialState)}>
        <TODOList />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders todo list with data', () => {
  const initialState = {
    todos: [{name: 'item1', id: '1234', status: 'complete'}],
  };
  const tree = renderer.create(
    <Provider store={mockStore(initialState)}>
      <TODOList />
    </Provider>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
  expect(tree.root.findByType(FlatList).children).toHaveLength(1);
});
