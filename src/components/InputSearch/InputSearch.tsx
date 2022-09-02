import { useRef, useState } from "react"
import { BiSearch, BiXCircle } from "react-icons/bi"
import { defaultIconSize } from "../../contants/contants"
import ItemSearch from "../ItemSearch/ItemSearch"

const InputSearch = () => {

  const [searchValue, setSearchValue] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleClear = () => {
    setSearchValue('')
    inputRef.current.focus();
  }

  const handleChange = (e: any) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
        setSearchValue(searchValue);
    }
  }


  return (
    <div className='sm:w-2/5 w-full mb-2 sm:mb-0'>
      <form className='flex items-center w-full relative'>
        <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <BiSearch size={defaultIconSize} className='cursor-pointer'/>
            </div>
            <input spellCheck={false} onFocus={() => setModalOpen(true)} onBlur={() => setModalOpen(false)} onChange={handleChange} ref={inputRef} value={searchValue} type="text" id="simple-search" className='input' placeholder='Search' required />
            {searchValue && (
              <div onClick={handleClear} className="flex absolute right-2 top-3 items-center">
                <BiXCircle className='cursor-pointer' size={'1.5rem'} />
              </div>
            )}
        </div>
        { modalOpen && (
        <div onClick={() => setModalOpen(true)} className='modal-search'>
          <ul className='py-4 text-xl'>
            <ItemSearch search="Uzumaki Naruto" />
            <ItemSearch search="Người Nhện không có nhà" />
            <ItemSearch search="Cristiano Ronaldo" />
            <ItemSearch search="Manchester United" />
            <ItemSearch search="Uzumaki Boruto" />
            <ItemSearch search="Big Mouth" />
          </ul>
        </div>)}
      </form>
    </div>
  )
}

export default InputSearch