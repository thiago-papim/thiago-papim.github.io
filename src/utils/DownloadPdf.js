import pdf from '../assets/curriculo.pdf'

const handleDownload = () => {
  const link = document.createElement('a')
  link.href = pdf
  link.download = 'Curriculo-Thiago-Papim.pdf'
  link.click()
}

export default handleDownload
