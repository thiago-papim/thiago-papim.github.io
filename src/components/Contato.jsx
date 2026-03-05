import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MagicCard } from './ui/magic-card'
import { Button } from './ui/button'
import ReactInputMask from 'react-input-mask'
import { telefoneFormatado } from '@/utils/telefoneFormatado'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Textarea } from './ui/textarea'
import { Alert, Snackbar } from '@mui/material'

export default function Contato() {
  const [telefone, setTelefone] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = {
      nome: e.target.nome.value,
      email: e.target.email.value,
      telefone: e.target.telefone.value,
      mensagem: e.target.mensagem.value,
    }

    try {
      await emailjs.send(
        // service ID
        'service_u34kw1x',
        // template ID
        'template_w3iekgk',
        formData,
        // public key
        'de8LuDniyoi1QNIpw',
      )

      handleClick()
      e.target.reset()
      setTelefone('')
    } catch (error) {
      console.error('Erro ao enviar email:', error)
    }

    setLoading(false)
  }

  return (
    <div
      className="font-montserrat w-full flex flex-col items-center scroll-mt-20 mb-10"
      id="contato"
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Mensagem enviada com sucesso!
        </Alert>
      </Snackbar>
      <h1 className="text-4xl font-light dark:text-white my-8 text-center">
        Contato
      </h1>

      <Card
        className="max-w-200 w-[90%] border-none p-0 shadow-none 
      bg-[#acc2ef] dark:bg-[#0F1C2E]"
      >
        <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
          <CardDescription className="dark:text-white text-black">
            Preencha o formulário abaixo e entre em contato, responderei o mais
            breve possível.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome aqui"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nome@exemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={telefone}
                  onChange={(e) =>
                    setTelefone(telefoneFormatado(e.target.value))
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mensagem">Mensagem</Label>

                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Sua mensagem aqui"
                  rows={4}
                  className="min-h-20 resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
              </Button>{' '}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
