import React from 'react';
import Sidebar from './sidebar';

interface IContentProps {}

const Content = (props: IContentProps): JSX.Element => {
    return (
        <main>
            <Sidebar />
            <article>content</article>
        </main>
    );
};

export default Content;
