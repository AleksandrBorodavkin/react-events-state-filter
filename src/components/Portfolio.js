import {Component} from "react";
import ToolBar from "./ToolBar.js";
import PortfolioLIst from "./PortfolioLIst";
import portfolioArray from "./db";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.filters = ["All", "Websites", "Flayers", "Business Cards"];
        this.state = {
            selected: "All",
            portfolioArray: portfolioArray,


        }
    }

    onSelectFilter = (filter) => {
        this.setState({selected: filter})
    }

    getFilteredPortfolio = () => {
        return portfolioArray
            .filter((portfolioArray) => {
                if (this.state.selected === 'All') {
                    return true
                } else {
                    return portfolioArray.category === this.state.selected
                }
            })
            .map((portfolioArray) => portfolioArray.img)
    }


    render() {
        return (<div>
                <ToolBar
                    filters={this.filters}
                    selected={this.state.selected}
                    onSelectFilter={this.onSelectFilter}/>
                <PortfolioLIst pictureArray={this.getFilteredPortfolio()}
                               selected={this.state.selected}/>
            </div>
        )

    }


}

export default Portfolio