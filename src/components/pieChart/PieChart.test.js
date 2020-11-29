
import renderer from 'react-test-renderer';
import PieChart from './PieChart';


it('renders correctly', () => {
  const tree = renderer
    .create(<PieChart />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});