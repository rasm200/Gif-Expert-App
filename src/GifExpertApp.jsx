import { useState } from 'react '
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = ({ version }) => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {

        setCategories(['Valorant', ...categories]);
    }
    return (
        <>
            <h1>GifExpertApp (Version {version})</h1>
            <hr />

            {/* Input */}
            <AddCategory setCategories={setCategories} />

            <button onClick={onAddCategory} >Agregar categoría</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>

        </>
    )
}
