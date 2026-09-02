import { useState } from 'react'
import { PencilIcon, Trash2Icon } from '@animateicons/react/lucide'
import useDelete from '../../Hooks/useDelete'
import useEdit from '../../Hooks/useEdit'

const Prodect = ({ products, onProductDeleted, onProductEdited }) => {

  const { deleteProduct } = useDelete()
  const { editProduct } = useEdit()
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({})

  const handleDelete = async (id) => {
    const deleted = await deleteProduct(id)

    if (deleted) {
      onProductDeleted()
    }
  }

  const startEditing = (product) => {
    setEditingId(product.id)
    setEditForm({
      name: product.name,
      price: product.price,
      category: product.category,
      stock: product.stock,
      image: product.image,
    })
  }

  const handleEditChange = (event) => {
    const { name, value } = event.target
    setEditForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const handleEditSubmit = async (event, id) => {
    event.preventDefault()
    const updated = await editProduct(id, {
      ...editForm,
      price: Number(editForm.price),
      stock: Number(editForm.stock),
    })

    if (updated) {
      setEditingId(null)
      onProductEdited()
    }
  }

  return (
    <section className='w-full flex flex-col gap-4 p-4 pb-24 md:p-6 md:pb-6'>
      {
        products.length > 0 ? products.map((item) => (
          <article key={item.id} className='mx-auto grid w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-[minmax(280px,0.9fr)_1.1fr]'>
            <figure className='min-h-64 bg-slate-100 md:min-h-full'>
              <img
                src={item.image}
                alt={item.name}
                className='h-full w-full object-cover'
              />
            </figure>

            <div className='flex flex-col gap-6 p-5 sm:p-8'>
              <div>
                <p className='mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-600'>{item.category}</p>
                <h2 className='text-2xl font-bold text-slate-900 sm:text-3xl'>{item.name}</h2>
                <p className='mt-3 text-2xl font-semibold text-slate-900'>${item.price.toFixed(2)}</p>
              </div>

              {editingId === item.id ? (
                <form onSubmit={(event) => handleEditSubmit(event, item.id)} className='flex flex-col gap-3 border-y border-slate-200 py-5'>
                  <label className='flex flex-col gap-1 text-sm font-medium text-slate-700'>
                    Name
                    <input name='name' value={editForm.name} onChange={handleEditChange} required className='rounded border border-slate-300 px-3 py-2' />
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
                    <label className='flex flex-col gap-1 text-sm font-medium text-slate-700'>
                      Price
                      <input name='price' type='number' min='0' step='0.01' value={editForm.price} onChange={handleEditChange} required className='rounded border border-slate-300 px-3 py-2' />
                    </label>
                    <label className='flex flex-col gap-1 text-sm font-medium text-slate-700'>
                      Stock
                      <input name='stock' type='number' min='0' value={editForm.stock} onChange={handleEditChange} required className='rounded border border-slate-300 px-3 py-2' />
                    </label>
                  </div>
                  <label className='flex flex-col gap-1 text-sm font-medium text-slate-700'>
                    Category
                    <input name='category' value={editForm.category} onChange={handleEditChange} required className='rounded border border-slate-300 px-3 py-2' />
                  </label>
                  <label className='flex flex-col gap-1 text-sm font-medium text-slate-700'>
                    Image URL
                    <input name='image' type='url' value={editForm.image} onChange={handleEditChange} required className='rounded border border-slate-300 px-3 py-2' />
                  </label>
                  <div className='flex flex-col gap-3 sm:flex-row'>
                    <button type='submit' className='flex-1 rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700'>Save changes</button>
                    <button type='button' onClick={() => setEditingId(null)} className='flex-1 rounded-lg border border-slate-300 px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100'>Cancel</button>
                  </div>
                </form>
              ) : <dl className='grid grid-cols-2 gap-3 border-y border-slate-200 py-5'>
                <div>
                  <dt className='text-sm text-slate-500'>Category</dt>
                  <dd className='mt-1 font-medium text-slate-800'>{item.category}</dd>
                </div>
                <div>
                  <dt className='text-sm text-slate-500'>Stock</dt>
                  <dd className='mt-1 font-medium text-emerald-600'>{item.stock > 0 ? item.stock : 'Out of Stock'}</dd>
                </div>
              </dl>}

              {editingId !== item.id && <div className='mt-auto flex flex-col gap-3 sm:flex-row'>
                <button type='button' onClick={() => startEditing(item)} className='flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer'>
                  <PencilIcon size={18} />
                  Edit product
                </button>
                <button type='button' className='flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-3 font-semibold text-red-600 transition hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer' onClick={() => handleDelete(item.id)}>
                  <Trash2Icon size={18} />
                  Delete product
                </button>
              </div>}
            </div>
          </article>
        )) : <p className='text-center text-slate-500'>No products found in this category.</p>
      }
      
    </section>
  )
}

export default Prodect
