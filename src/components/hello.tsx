import * as React from 'react';

export interface IProps {
    name: string;
}

class Hello extends React.Component<IProps, {}> {
    render() {
        const { name } = this.props;

        return (
            <div className="hello">
                <div className="greeting">
                    Hello
                </div>
            </div>
        );
    }
}

export default Hello;