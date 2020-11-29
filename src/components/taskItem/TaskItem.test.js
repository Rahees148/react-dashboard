
import renderer from 'react-test-renderer';
import TaskItem from './TaskItem';


it('renders correctly', () => {
  const tree = renderer
    .create(<TaskItem key={1} task={{id:1,name:'testing',completed:false,userId: 2}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});