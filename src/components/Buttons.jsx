const Button = ({buttons, links}) => {
    return (
        <>
              {buttons.map((btnText, index) => (
                <a href={links[index]} key={index} className="bg-[#224DBE] hover:bg-[#1464F6] w-1/2 md:w-1/4 text-white carlito-bold px-6 py-2 rounded-full">
                <button
                  key={index}
                  className="bg-[#224DBE] hover:bg-[#1464F6] text-white carlito-bold px-6 py-2 rounded-full"
                >
                  {btnText}
                </button>
                </a> 
              ))}
            </>
    )

}

export default Button;