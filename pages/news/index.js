// website-name.com/news

import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage () {
    return <Fragment>
                <h1>The News Page</h1>
                <ul>
                    <li><Link href="/news/next-js-is-great">Next Js Is A Great Framework</Link></li>
                    <li><Link href="/news/Another-Article">Another Article!</Link></li>
                </ul>
            </Fragment>
}

export default NewsPage;