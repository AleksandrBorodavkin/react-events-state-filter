import {Component} from "react";


export default class PortfolioLIst extends Component {

    render() {
        const {pictureArray} = this.props
        const pictureColumns = [[], [], []];
        let column = 0;

        for (let i = 0; i < pictureArray.length; i += 1) {
            pictureColumns[column].push(pictureArray[i]);
            if (column === 2) column = 0;
            else column += 1;
        }
        return (
            <div
                className={'portfolio__project-list project-list-portfolio'}>
                <div className={'project-list-portfolio__column'}>
                    {pictureColumns[0].map((picture) =>
                        <div className={'project-list-portfolio__project'}
                             key={Math.random()}>
                            <img src={picture} alt="portfolio img"/>
                        </div>
                    )}
                </div>

                <div className={'project-list-portfolio__column'}>
                    {pictureColumns[1].map((picture) =>
                        <div className={'project-list-portfolio__project'}
                             key={Math.random()}>
                            <img src={picture} alt="portfolio img"/>
                        </div>
                    )}
                </div>

                <div className={'project-list-portfolio__column'}>
                    {pictureColumns[2].map((picture) =>
                        <div className={'project-list-portfolio__project'}
                             key={Math.random()}>
                            <img src={picture} alt="portfolio img"/>
                        </div>
                    )}
                </div>
            </div>
        )


    }

}
