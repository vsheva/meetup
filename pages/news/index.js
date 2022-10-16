//localhost:3000/news

import Link from 'next/link'

const NewsPage = () => {
    return <>
        <h1>The News Page</h1>
        <ul>
            <Link href="news/valerii-loves-his-family">
                Valerii loves his family</Link>
            <li>Something else</li>
        </ul>

    </>
}

export default NewsPage;