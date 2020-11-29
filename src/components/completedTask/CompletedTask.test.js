
import renderer from 'react-test-renderer';
import CompletedTask from './CompletedTask';


it('renders correctly', () => {
  const tree = renderer
    .create(<CompletedTask />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});