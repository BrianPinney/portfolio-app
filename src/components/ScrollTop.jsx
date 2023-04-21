import {useState} from 'react';
import { Button } from 'react-bootstrap';

export default function ScrollButton() {

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button className='scroll-button' onClick={scrollToTop}>
        ^
	</Button>
);
}

