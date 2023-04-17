import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const coursedata = [
    {
        id: 1,
        rname: "Maths",
        imgdata: "maths.png",
        down:
            <DropdownButton id="dropdown-button" title="Syllabus" variant="none" className='btn2 mb-3 mt-4'>
                <Dropdown.Item href="/pdf">Class: 12th</Dropdown.Item>
                <Dropdown.Item href="/mathspdf_11th">Class: 11th</Dropdown.Item>
                <Dropdown.Item href="/pdf3">Class: 10th</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Class: 9th</Dropdown.Item>

            </DropdownButton>

    },
    {
        id: 2,
        rname: "Physics",
        imgdata: "physics.png",
        down:
            <DropdownButton id="dropdown-button" title="Syllabus" variant="none" className='btn2 mb-3 mt-4'>
                <Dropdown.Item href="#/action-1">Class: 12th</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Class: 11th</Dropdown.Item>

            </DropdownButton>

    },
    {
        id: 3,
        rname: "Chemistry",
        imgdata: "chemistry.png",
        down:
            <DropdownButton id="dropdown-button" title="Syllabus" variant="none" className='btn2 mb-3 mt-4'>
                <Dropdown.Item href="#/action-1">Class: 12th</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Class: 11th</Dropdown.Item>

            </DropdownButton>

    },
    {
        id: 4,
        rname: "English",
        imgdata: "english.png",
        down:
            <DropdownButton id="dropdown-button" title="Syllabus" variant="none" className='btn2 mb-3 mt-4'>
                <Dropdown.Item href="#/action-1">Class: 12th</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Class: 11th</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Class: 10th</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Class: 9th</Dropdown.Item>

            </DropdownButton>

    },

    {
        id: 5,
        rname: "science",
        imgdata: "science.png",
        down:
            <DropdownButton id="dropdown-button" title="Syllabus" variant="none" className='btn2 mb-3 mt-4'>
                
                <Dropdown.Item href="#/action-2">Class: 10th</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Class: 9th</Dropdown.Item>

            </DropdownButton>

    },
    {
        id: 6,
        rname: "Biology",
        imgdata: "bio.png",
        down:
            <DropdownButton id="dropdown-button" title="Syllabus" variant="none" className='btn2 mb-3 mt-4'>
                <Dropdown.Item href="#/action-1">Class: 12th</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Class: 11th</Dropdown.Item>
                

            </DropdownButton>

    },

];

export default coursedata;