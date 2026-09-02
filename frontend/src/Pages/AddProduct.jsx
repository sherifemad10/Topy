import { useState } from 'react'
import Searchbar from '../component/Dashboard/Searchbar'

const initialForm = {
  name: '',
  price: '',
  category: '',
  stock: '',
  description: '',
  image: '',
}

const AddProduct = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          stock: Number(form.stock || 0),
        }),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => null)
        throw new Error(result?.message || 'Unable to add product')
      }

      setForm(initialForm)
      setStatus({ type: 'success', message: 'Product added successfully.' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className='w-full p-4 pb-24 md:ml-72 md:w-auto md:p-6 md:pb-6'>
      <Searchbar title='Add Product' />

      <form onSubmit={handleSubmit} className='mx-auto mt-6 flex w-full max-w-3xl flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8'>
        <div>
          <h2 className='text-2xl font-bold text-slate-900'>Product details</h2>
          <p className='mt-1 text-sm text-slate-500'>Add the information for your new product.</p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          <label className='flex flex-col gap-2 text-sm font-medium text-slate-700 sm:col-span-2'>
            Product name
            <input name='name' value={form.name} onChange={handleChange} required placeholder='e.g. Wireless Mouse' className='rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100' />
          </label>

          <label className='flex flex-col gap-2 text-sm font-medium text-slate-700'>
            Price
            <input name='price' type='number' min='0' step='0.01' value={form.price} onChange={handleChange} required placeholder='0.00' className='rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100' />
          </label>

          <label className='flex flex-col gap-2 text-sm font-medium text-slate-700'>
            Stock quantity
            <input name='stock' type='number' min='0' step='1' value={form.stock} onChange={handleChange} placeholder='0' className='rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100' />
          </label>

          <label className='flex flex-col gap-2 text-sm font-medium text-slate-700'>
            Category
            <input name='category' value={form.category} onChange={handleChange} required placeholder='e.g. Accessories' className='rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100' />
          </label>

          <label className='flex flex-col gap-2 text-sm font-medium text-slate-700'>
            Image URL
            <input name='image' type='url' value={form.image} onChange={handleChange} placeholder='https://example.com/product.jpg' className='rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100' />
          </label>

          <label className='flex flex-col gap-2 text-sm font-medium text-slate-700 sm:col-span-2'>
            Description
            <textarea name='description' value={form.description} onChange={handleChange} rows='4' placeholder='Describe the product...' className='resize-y rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100' />
          </label>
        </div>

        {status.message && <p role='status' className={status.type === 'success' ? 'text-sm text-emerald-600' : 'text-sm text-red-600'}>{status.message}</p>}

        <button type='submit' disabled={isSubmitting} className='rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60'>
          {isSubmitting ? 'Adding product...' : 'Add product'}
        </button>
      </form>
    </main>
  )
}

export default AddProduct
