import {Component} from "react";

class ToolBar extends Component {
    render() {
        const {filters, selected} = this.props;

        return (
            <nav className={'portfolio__toolbar toolbar-portfolio'}>
                <ul className={'toolbar-portfolio__list'}>
                    {filters.map((filter) =>
                        <li key={filter}>
                            <button

                                className={
                                    'toolbar-portfolio__btn' +
                                    `${filter === selected ? ' toolbar-portfolio__btn_selected' : ''}`
                                }
                                onClick={() => this.props.onSelectFilter(filter)}
                            >{filter}</button>
                        </li>)}
                </ul>
            </nav>
        )
    }
}


export default ToolBar