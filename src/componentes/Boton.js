const Boton = ({texto, esBotonDeClick, lolo, numClicks}) => { 
  return (
    <button 
      disabled={numClicks === 0}
      className={esBotonDeClick ? "bg-[#002ead] w-[250px] h-20 font-bold text-white border-2 border-white rounded-[15px] m-[5px] cursor-pointer text-[35px] hover:bg-[#00471b]" :
       "bg-[#5a01a7] w-[250px] h-[80px] font-bold text-white border-2 border-white rounded-[15px] m-[5px] cursor-pointer text-[35px] hover:bg-[#00471b]"}
      onClick={lolo}>
      {texto}
    </button>
  )
}

export default Boton;