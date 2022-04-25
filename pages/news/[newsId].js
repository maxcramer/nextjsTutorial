// website-name.com/news/something-important
// if file name is in [] then it is DYNAMIC!!!! 

import { useRouter } from 'next/router';

function DetailsPage () {
    const router = useRouter();

    const newsId = router.query.newsId; // holds value in url 

    // then send req to back end API to fetch news item with newsId

    return <h1>The Details Page</h1>
}

export default DetailsPage