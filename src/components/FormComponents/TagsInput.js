import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TagsInput = ({ id, name, onChange, defaultTags }) => {
    const [value, setValue] = useState('');
    const [tags, setTags] = useState(defaultTags ? defaultTags : []);

    const changeHandler = (e) => {
        setValue(e.target.value);
        onChange(tags);
    }

    const removeTag = (tag) => {
        const arr = tags.filter(t => t !== tag);
        setTags(arr);
        onChange(arr);
    }

    const updateTagsHandler = (e) => {
        e.preventDefault();
        // Add tags if input is not empty and if input value is not comma
        if (e.target.value !== '' && e.target.value !== ',') {

            if (e.key === ',') {

                const newTag = value.trim().split(',')[0];

                if (!tags.includes(newTag) && newTag !== '') {
                    const arr = [...tags, newTag];
                    setTags(arr);
                    onChange(arr);
                }
                setValue('');

            } else if (e.key === 'Enter') {

                const newTag = value.trim();
                if (!tags.includes(newTag) && newTag !== '') {
                    const arr = [...tags, newTag];
                    setTags(arr);
                    onChange(arr);
                }
                setValue('');
            }

        }
    }

    return (
        <div>
            <div className="mx-auto">
                <input
                    className='my-3 form-control w-50 mx-auto'
                    type="text"
                    placeholder='Enter a Tag Name'
                    name='tags'
                    id={id ? id : name}
                    value={value}
                    onChange={changeHandler}
                    onKeyUp={updateTagsHandler}
                    onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
                    onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
                />
                <label className="fw-bold text-decoration-underline my-2" htmlFor={id ? id : name}>
                    Tag List:
                </label>
                <ul className="list-unstyled list-inline">
                {tags.length > 0
                ? tags.map((tag, i) =>
                    <li key={i} 
                    className="border-bottom list-inline-item btn btn-primary position-relative pe-4">
                        {tag}
                        <span onClick={() => removeTag(tag)}>
                            <FontAwesomeIcon className='position-absolute top-0 end-0 p-1' 
                            icon={faTimes} size='sm' />
                        </span>
                    </li>
                )
            : <li className='fst-italic'>No tags so far</li>}
                </ul>
                
            </div>
            <pre className='text-dark'>
                Press comma ',' or Enter to submit a tag value.
            </pre>
        </div>
    );
}

export default TagsInput;