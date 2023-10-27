import { useState } from 'react'
import { Title } from '../components/Title/styles'
import { Subtitle } from '../components/Subtitle/styles'
import { Input } from '../components/Input'
import { Button } from '../components/ButtonEnter/index'
import { Form } from '../components/Form/Form'
import { Checkbox } from '../components/Box'
import ImagemLogin from '../assets/images/login-image.png'
import { ContainerLogin } from '../components/Containerpage/style'
import { postLogin } from '../services/auth/auth'

export function Login() {
  const [stateLogin, setStateLogin] = useState('')
  const [statePassword, setStatePassword] = useState('')

  const doLogin = async () => {
    const result = await postLogin(stateLogin, statePassword)
    if (result.logged) {
      window.location.href = '/'
      return
    }
    alert(result.message)
  }

  return (
    <ContainerLogin>
      <div className="leftContainer">
        <Form>
          <div className="textLoginContainer">
            <Subtitle>Seja bem vindo!</Subtitle>
            <Title fontSize={36}>Realize seu login</Title>
          </div>
          <Input
            label="E-Mail"
            placeholder="Insira seu e-mail"
            inputState={stateLogin}
            inputSetState={setStateLogin}
          />
          <Input
            label="Senha"
            placeholder="Insira sua senha"
            inputState={statePassword}
            inputSetState={setStatePassword}
          />

          <div id="checkbox-remember">
            <div className="checkboxDiv">
              <Checkbox />
              <Subtitle>
                <span>Lembrar-me</span>
              </Subtitle>
            </div>
            <div className="rememberDiv">
              <Subtitle>Esqueci minha senha</Subtitle>
            </div>
          </div>
          <Button text="Entrar" variant="login" onClick={() => doLogin()} />
        </Form>
      </div>
      <div>
        <img src={ImagemLogin} />
      </div>
    </ContainerLogin>
  )
}
