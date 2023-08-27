import React, { FC } from 'react'
import { getPrompts } from '@/db';
import SearchItem from '../components/SearchItem/SearchItem';


const Search: FC = async() => {
    const prompts = await getPrompts();
    return (

        <article>
            <h1>Hello world</h1>
            <ul>
                {Object.values(prompts).map((prompt, idx) =>
                    <SearchItem key={idx} prompt={prompt}/>
                )}
            
            </ul>
        </article>
    )
}

export default Search
