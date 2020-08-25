import React from 'react'
import './VerticalMenu.css'
import './categories/Categories.css'
import Categories from './categories/Categories'


class VerticalMenu extends React.Component {

    constructor() {
        super();
        this.state = { 
            showCategories: false
         };
    }

    showCategoriesPopup() {
        this.setState(
            { showCategories: !this.state.showCategories }
        )
    }


    render() {
        return (
            <div>
                <div id="menuVertical"> 
                    <div id="links">
                        <div className="dropdown link">
                            <a onClick={this.showCategoriesPopup.bind(this)}>Categorias</a>
                        </div>
                        <div className="link">
                            <a>Promoções</a>
                        </div>
                        <div className="link">
                            <a>Recomendados</a>
                        </div>
                    </div>
                </div>
            {this.state.showCategories ? 
                <Categories/>
                : null
                }
            </div>
            
        )
    }
}

export default VerticalMenu;

