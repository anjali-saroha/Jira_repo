import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import AddTask from './AddTask'; 

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: null }),
    useNavigate: () => jest.fn()
}));

describe('<AddTask />', () => {

    it('renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <AddTask />
            </MemoryRouter>
        );
    });

    it('shows name error when name field is empty and form is submitted', () => {
        const wrapper = shallow(<AddTask />);
        wrapper.find('CustomButton').simulate('click');
        expect(wrapper.find({label: "Name"}).prop('error')).toBeTruthy();
    });

    it('shows description error when description field is empty and form is submitted', () => {
        const wrapper = shallow(<AddTask />);
        wrapper.find({name: "name"}).simulate('change', {
            target: { name: 'name', value: 'Test Task' }
        });
        wrapper.find('CustomButton').simulate('click');
        wrapper.update();
        expect(wrapper.find({label: "Desciption"}).prop('error')).toBeTruthy();
    });

    it('shows deadline error when deadline field is empty and form is submitted', () => {
        const wrapper = shallow(<AddTask />);
        wrapper.find({name: "name"}).simulate('change', {
            target: { name: 'name', value: 'Test Task' }
        });
        wrapper.find({name: "description"}).simulate('change', {
            target: { name: 'description', value: 'Test desciption' }
        });
        wrapper.find('CustomButton').simulate('click');
        expect(wrapper.find({label: "Deadline"}).prop('error')).toBeTruthy();
    });

    it('updates name in state when name input value changes', () => {
        const wrapper = shallow(<AddTask />);
        wrapper.find({name: "name"}).simulate('change', {
            target: { name: 'name', value: 'Test Task' }
        });
        expect(wrapper.find({name: "name"}).prop('value')).toEqual('Test Task');
    });
    it('updates description in state when description input value changes', () => {
        const wrapper = shallow(<AddTask />);
        wrapper.find({name: "description"}).simulate('change', {
            target: { name: 'description', value: 'Test Description' }
        });
        expect(wrapper.find({name: "description"}).prop('value')).toEqual('Test Description');
    });
    it('updates deadline in state when deadline input value changes', () => {
        const wrapper = shallow(<AddTask />);
        wrapper.find({name: "deadline"}).simulate('change', {
            target: { name: 'deadline', value: 'Test deadline' }
        });
        expect(wrapper.find({name: "deadline"}).prop('value')).toEqual('Test deadline');
    });
    it('updates summary in state when summary input value changes', () => {
        const wrapper = shallow(<AddTask />);
        wrapper.find({name: "summary"}).simulate('change', {
            target: { name: 'summary', value: 'Test summary' }
        });
        expect(wrapper.find({name: "summary"}).prop('value')).toEqual('Test summary');
    });

});
