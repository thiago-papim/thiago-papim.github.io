export default function BtnHeaderMobile({ nome, section }) {
  const handleScroll = () => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleScroll}
      className="
        w-full
        text-lg
        py-4
        font-medium
        uppercase
        border-b
        border-gray-200
        dark:border-gray-700
        hover:bg-gray-100
        dark:hover:bg-gray-800
        transition
      "
    >
      {nome}
    </button>
  )
}
