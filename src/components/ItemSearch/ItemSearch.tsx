interface PropItemSearch {
  search: string;
}

const ItemSearch = ({ search }: PropItemSearch) => {
  return (
    <div className='hover:bg-cyan-100 px-4 py-1 cursor-pointer'>{search}</div>
  )
}

export default ItemSearch;
