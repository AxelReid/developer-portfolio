const Tag: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className='text-xs text-zinc-50 bg-zinc-700 rounded py-1 px-2'>
      {name}
    </div>
  )
}

export default Tag
