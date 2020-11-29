
import renderer from 'react-test-renderer';
import LatestTask from './LatestTask';


it('renders correctly', () => {
  const tree = renderer
    .create(<LatestTask />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});