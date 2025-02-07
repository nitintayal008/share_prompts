import Link from '@node_modules/next/link'
import React from 'react'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section>
        <h1>
            <span>{type} Post </span>
        </h1>
        <p>
            {type} and share amazing prompts with the world, and let your 
            imagination run wild with ant Ai-powered platform.
        </p>
        <form 
            action=""
            onSubmit={handleSubmit}
            >
                <label htmlFor="">
                    <span>
                        Your AI Prompt
                    </span>
                    <textarea value={post.prompt} onChange={(e)=>setPost({...post, 
                        prompt: e.target.value
                    })}
                        placeholder='Write your prompt here ...'
                        required
                        className='form_textarea'
                    >

                    </textarea>
                </label>
                <label htmlFor="">
                    <span>
                        Tag {` `}
                        <span>(#product, #webDevelopment, #idea)</span>
                    </span>
                    <input value={post.tag} onChange={(e)=>setPost({...post, 
                        tag: e.target.value
                    })}
                        placeholder='#tag'
                        required
                        className='form_input'
                    />
                </label>
                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href="/" className='text-gray-500'>
                        Cancel
                    </Link>
                    <button className='px-5 py-1.5 text-sm 
                bg-primary-orange rounded-full text-white' type='submit' disabled={submitting}>
                        {submitting ? `${type}...`:type}Submit
                    </button>
                </div>
        </form>
    </section>
  )
}

export default Form