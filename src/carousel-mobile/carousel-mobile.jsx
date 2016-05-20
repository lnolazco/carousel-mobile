const React = require('react');

const HammerCarousel = require('./hammer-carousel.jsx');

if (process.env.WEBPACK_BUILD) {
    require('./carousel-mobile.scss');
}

const CarouselMobile = React.createClass({
    getInitialState() {
        return {
            carousel: null
        };
    },

    propTypes() {
        return {
            data: React.PropTypes.array.isRequired,
            onSelect: React.PropTypes.func
        };
    },
    componentDidMount() {
        var carousel = new HammerCarousel(this.refs.gallery, Hammer.DIRECTION_HORIZONTAL);
        carousel.onPan({deltaX:-400,deltaY:0,type:'panend'});
        this.setState({ carousel: carousel });
    },
    componentWillUnmount() {
        this.state.carousel.destroy();
    },
    onSelect(element) {
        this.props.onSelect(element);
    },
    getElements() {
        return this.props.data.map((item, index) => {
            return (
                <div className="pane">
                    <img className="pane-item" src={item.url} />
                </div>
            );
        });
    },
    render() {
        const style = { maxHeight: (document.documentElement.clientWidth / 1.8) + 'px'};
        return (
            <div ref="gallery" className = "panes wrapper" style={style} >
            { this.getElements() }
            < /div>
        );
    }
});

module.exports = CarouselMobile;
