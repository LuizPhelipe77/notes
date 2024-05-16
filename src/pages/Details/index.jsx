import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'

export function Details() {
  return(
    <Container>
        <Header />
        
        <main>
          <Content>
            <ButtonText title="excluir nota" />

          <h1>
            Introducao ao react
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatum quos iure, dolor nisi recusandae vero natus adipisci officia hic eveniet soluta dolores excepturi sapiente, eligendi quidem. Commodi, at a!</p>

          <Section title="links uteis">
            <Links>
              <li><a href="#">https://dribbble.com/following</a></li>
              <li><a href="#">https://icons.getbootstrap.com/#install</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="node.js" />
            <Tag title="js" />
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}