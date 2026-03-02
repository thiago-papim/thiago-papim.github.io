export default function BtnHeader({ nome, section, onClick }) {
  const handleScroll = () => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClick()
    }
  }

  return (
    <button
      onClick={handleScroll}
      className="
    relative
    inline-block
    bg-transparent
    pb-1 px-7 mx-2
    text-sm font-medium uppercase
    after:absolute
    after:left-0
    after:bottom-0
    after:h-0.5
    after:w-0
  dark:after:bg-white/70
  after:bg-black/50
    after:transition-all
    after:duration-300
    hover:after:w-full
    cursor-pointer
  "
    >
      {nome}
    </button>
  )
}
