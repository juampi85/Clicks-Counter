const Contador = ({ numClicks }) => {
  return (
    <div className="min-w-[300px] h-[300px] border-[8px] mb-4 border-white text-[160px] p-6 text-white flex items-center justify-center">
      {numClicks}
    </div>
  )
}

export default Contador;