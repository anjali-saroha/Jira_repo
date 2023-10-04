import React from 'react';
import { shallow ,mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import TaskDetail from './TaskDetail'; 


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: "1" }),
}));


jest.mock('@mui/material/Typography', () => {
    return {
        __esModule: true,
        default: () => <div>MockedTypography</div>,
    };
});

describe('<TaskDetail />', () => {

    beforeAll(() => {
        const tasks = [
            { id: '1', name: 'Task One', deadline: '2023-01-01', description: 'Test Description', summary: 'Test Summary' },
        ];
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    afterEach(() => {
        localStorage.clear();
    });
    it('renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <TaskDetail />
            </MemoryRouter>
        );
    });

    it('displays "Task not found" when the task is not in localStorage', () => {
        const wrapper = shallow(<TaskDetail />);
        expect(wrapper.text()).toContain('Task not found.');
    });
});
