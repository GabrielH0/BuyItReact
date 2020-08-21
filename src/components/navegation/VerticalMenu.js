import React from 'react'
import './VerticalMenu.css'
import Categories from './categories/Categories';


class VerticalMenu extends React.Component {

    constructor() {
        super();
        this.state = { 
            showPopup: false
         };
    }

    showCategoriesPopup = () => {
        this.setState(
            { showPopup:!this.state.showPopup }
        )
    }


    render() {
        return (
            <div id="menuVertical"> 
                <div id="links">
                    <div className="dropdown link">
                        <a onClick={this.showCategoriesPopup} className=" dropdown-toggle">Categorias</a>
                        <div className={
                            this.state.showPopup ? "dropdown-menu show" : "dropdown-menu"
                        }>
                        <Categories/>
                        </div>
                    </div>
                    <div className="link">
                        <a>Promoções</a>
                    </div>
                    <div className="link">
                        <a>Recomendados</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default VerticalMenu;