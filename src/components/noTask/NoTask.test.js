
import renderer from 'react-test-renderer';
import NoTask from './NoTask';


it('renders correctly', () => {
  const tree = renderer
    .create(<NoTask />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});