import { FiArrowRightCircle } from 'react-icons/fi';
import { FiDisc } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';

const AppLinks = [
  {
    id: 1,
    header: 'Create Task',
    url: '/app/createtask',
    icon: FiArrowRightCircle
  },
  {
    id: 2,
    header: 'List Tasks',
    url: '/app/listtasks',
    icon: FiDisc
  },
  {
    id: 3,
    header: 'Edit Tasks',
    url: '/app/edittask',
    icon: FiEdit
  }
];

export default AppLinks;
