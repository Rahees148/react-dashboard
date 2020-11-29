
import renderer from 'react-test-renderer';
import NewTask from './NewTask';


it('renders correctly', () => {
  const tree = renderer
    .create(<NewTask />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});