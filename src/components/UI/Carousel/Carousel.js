import React, {Component} from 'react'
import ItemsCarousel from 'react-items-carousel';
import ChevronButton from '../../../components/UI/ChevronButton/ChevronButton'
import classes from './Carousel.css'


class Carousel extends Component{

	state ={
		activeItemIndex: 0,
		films: this.props.films

	}

	render(){
    return(
        <div className={"row "+classes.Carousel} >
				<ItemsCarousel
					gutter={12}
					activePosition={'center'}
					chevronWidth={60}
					numberOfCards={4}
					slidesToScroll={4}
					outsideChevron={false}
					showSlither={false}
					firstAndLastGutter={false}
					activeItemIndex={this.state.activeItemIndex}
    			requestToChangeActive={value => this.setState({ activeItemIndex: value })}
					rightChevron={<ChevronButton icon="keyboard_arrow_right"></ChevronButton>}
					leftChevron={<ChevronButton icon="keyboard_arrow_left"></ChevronButton>}>
					{this.props.films}
				</ItemsCarousel> 
			</div>
		);
	}
}

export default Carousel;
